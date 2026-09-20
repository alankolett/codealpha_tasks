from scapy.all import sniff, IP, IPv6, TCP, UDP, ICMP, ARP, Raw, conf
from collections import Counter
from datetime import datetime
import argparse
import sys

packet_count = 0
protocol_stats = Counter()


def get_protocol(packet):
    """Identify the highest-level protocol visible in the packet."""

    if ARP in packet:
        return "ARP"

    if ICMP in packet:
        return "ICMP"

    if TCP in packet:
        return "TCP"

    if UDP in packet:
        return "UDP"

    if IP in packet:
        return "IP"

    if IPv6 in packet:
        return "IPv6"

    return "OTHER"


def get_addresses(packet):
    """Extract source and destination addresses."""

    if IP in packet:
        return packet[IP].src, packet[IP].dst

    if IPv6 in packet:
        return packet[IPv6].src, packet[IPv6].dst

    if ARP in packet:
        return packet[ARP].psrc, packet[ARP].pdst

    return "N/A", "N/A"


def get_ports(packet):
    """Extract TCP/UDP source and destination ports."""

    if TCP in packet:
        return packet[TCP].sport, packet[TCP].dport

    if UDP in packet:
        return packet[UDP].sport, packet[UDP].dport

    return None, None


def get_payload(packet):
    """Return a safe printable preview of the packet payload."""

    if Raw not in packet:
        return ""

    raw_data = bytes(packet[Raw].load)

    # Limit output so terminals don't get flooded.
    preview = raw_data[:80]

    printable = "".join(
        chr(byte) if 32 <= byte <= 126 else "."
        for byte in preview
    )

    return printable


def process_packet(packet):
    """Process and display information about a captured packet."""

    global packet_count

    packet_count += 1

    timestamp = datetime.now().strftime("%H:%M:%S")
    protocol = get_protocol(packet)

    source, destination = get_addresses(packet)
    src_port, dst_port = get_ports(packet)

    packet_length = len(packet)

    protocol_stats[protocol] += 1

    print("\n" + "=" * 90)
    print(f"Packet #{packet_count}    Time: {timestamp}")
    print("=" * 90)

    print(f"Source      : {source}")
    print(f"Destination : {destination}")
    print(f"Protocol    : {protocol}")
    print(f"Length      : {packet_length} bytes")

    if src_port is not None:
        print(f"Ports       : {src_port} -> {dst_port}")

    if TCP in packet:
        print(f"TCP Flags   : {packet[TCP].flags}")

    payload = get_payload(packet)

    if payload:
        print(f"Payload     : {payload}")

    print("-" * 90)


def show_summary():
    """Display capture statistics."""

    print("\n")
    print("=" * 50)
    print("CAPTURE SUMMARY")
    print("=" * 50)

    print(f"Total packets captured: {packet_count}")

    if protocol_stats:
        print("\nProtocol statistics:")

        for protocol, count in protocol_stats.most_common():
            print(f"  {protocol:<10} : {count}")

    print("=" * 50)


def parse_arguments():
    parser = argparse.ArgumentParser(
        description="CodeAlpha Basic Network Sniffer"
    )

    parser.add_argument(
        "-i",
        "--interface",
        help="Network interface to sniff on"
    )

    parser.add_argument(
        "-c",
        "--count",
        type=int,
        default=0,
        help="Number of packets to capture. 0 = continuous capture"
    )

    return parser.parse_args()


def main():
    args = parse_arguments()

    print("=" * 90)
    print("CODEALPHA - BASIC NETWORK SNIFFER")
    print("=" * 90)

    if args.interface:
        print(f"Interface : {args.interface}")
    else:
        print("Interface : Default")

    if args.count == 0:
        print("Packets   : Continuous")
    else:
        print(f"Packets   : {args.count}")

    print("\nStarting packet capture...")
    print("Press Ctrl+C to stop.\n")

    try:
        sniff(
            iface=args.interface,
            prn=process_packet,
            count=args.count,
            store=False
        )

    except PermissionError:
        print("\n[ERROR] Permission denied.")
        print("Run the terminal as Administrator/root.")

    except Exception as error:
        print(f"\n[ERROR] {error}")

    finally:
        show_summary()


if __name__ == "__main__":
    main()
