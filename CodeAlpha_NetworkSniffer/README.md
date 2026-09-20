# CodeAlpha - Basic Network Sniffer
**Cyber Security Internship — Task 1**

A lightweight, Python-based network packet sniffer built using [Scapy](https://scapy.net/). This tool captures live network packets, dissects protocol layers (Ethernet, IP, IPv6, ARP, TCP, UDP, ICMP), displays formatted packet metadata, previews payload contents, and aggregates capture statistics upon termination.

---

## 📁 Project Structure

```text
CodeAlpha_NetworkSniffer/
│
├── network_sniffer.py     # Main sniffer application script
├── requirements.txt       # Dependencies (Scapy)
├── README.md              # Project documentation and guide
├── .gitignore             # Ignored temporary and environment files
└── screenshots/           # Evidence and execution screenshots
```

---

## ✨ Features & Requirements Fulfillment

This project fulfills all criteria of **CodeAlpha Task 1: Network Sniffer**:

| Requirement | Implementation Detail | Function / Component |
| :--- | :--- | :--- |
| **Python Program** | Fully functional standalone CLI tool | [`network_sniffer.py`](network_sniffer.py) |
| **Live Packet Capture** | Real-time promiscuous/interface sniffing | `scapy.all.sniff()` |
| **Source & Destination IPs** | Extracts IPv4, IPv6, or ARP hardware/protocol addrs | `get_addresses()` |
| **Protocol Identification**| Resolves TCP, UDP, ICMP, ARP, IP, IPv6 | `get_protocol()` |
| **Port Inspection** | Source and destination port extraction | `get_ports()` |
| **TCP Flags** | Inspects TCP control bits (SYN, ACK, FIN, etc.) | `packet[TCP].flags` |
| **Payload Preview** | ASCII-sanitized string preview (truncated to 80 chars) | `get_payload()` |
| **Packet Counter** | Incremental live counter per intercepted frame | `process_packet()` |
| **Protocol Statistics** | Aggregated breakdown of captured protocols | `show_summary()` |
| **Graceful Exit** | Handles `KeyboardInterrupt` (Ctrl+C) smoothly | `try ... finally` block |
| **CLI Arguments** | Optional interface selection and packet limit | `parse_arguments()` |

---

## ⚙️ Prerequisites & Installation

### 1. Requirements
- **Python 3.8+**
- **Administrator / Root Privileges**: Raw socket access requires elevated privileges.
- **Npcap (Windows users)**: Scapy on Windows requires **Npcap** (or WinPcap). Download and install it with "WinPcap API-compatible Mode" checked from [npcap.com](https://npcap.com/).

### 2. Setup
Clone or copy the project files, navigate into the directory, and install dependencies:

```bash
cd CodeAlpha_NetworkSniffer
python -m pip install -r requirements.txt
```

Verify installation:
```bash
python -c "import scapy; print('Scapy Version:', scapy.__version__)"
```

---

## 🚀 Usage Guide

> [!IMPORTANT]
> Always run your terminal (PowerShell, Command Prompt, or Bash) as **Administrator** (Windows) or with `sudo` (Linux/macOS).

### Basic Execution (Continuous capture on default interface)
```powershell
python network_sniffer.py
```

### Capture Specific Number of Packets
```powershell
python network_sniffer.py --count 20
```

### Specify Network Interface
To bind to a particular network interface (e.g. `Wi-Fi`, `Ethernet`, `eth0`):
```powershell
python network_sniffer.py --interface "Wi-Fi" --count 50
```

---

## 📊 Sample Output

### Live Capture View
```text
==========================================================================================
CODEALPHA - BASIC NETWORK SNIFFER
==========================================================================================
Interface : Default
Packets   : Continuous

Starting packet capture...
Press Ctrl+C to stop.

==========================================================================================
Packet #1    Time: 22:14:03
==========================================================================================
Source      : 192.168.1.15
Destination : 142.250.190.46
Protocol    : TCP
Length      : 74 bytes
Ports       : 52143 -> 443
TCP Flags   : S
Payload     : .............
------------------------------------------------------------------------------------------

==========================================================================================
Packet #2    Time: 22:14:04
==========================================================================================
Source      : 192.168.1.15
Destination : 8.8.8.8
Protocol    : UDP
Length      : 86 bytes
Ports       : 53521 -> 53
------------------------------------------------------------------------------------------
```

### Summary Screen (Ctrl+C or limit reached)
```text
==================================================
CAPTURE SUMMARY
==================================================
Total packets captured: 20

Protocol statistics:
  TCP        : 12
  UDP        : 5
  ICMP       : 2
  ARP        : 1
==================================================
```

---

## 🧪 Testing & Verification

1. Start the sniffer in an elevated terminal:
   ```powershell
   python network_sniffer.py -c 10
   ```
2. Open a separate terminal or web browser to generate traffic:
   ```powershell
   ping google.com
   curl https://www.google.com
   ```
3. Observe real-time packet inspection and the final summary table.

---

## 📸 Screenshots

Save execution screenshots in the `screenshots/` directory for your internship submission portfolio:
- `screenshots/capture_live.png`: Terminal output showing live packet capture.
- `screenshots/capture_summary.png`: Summary screen showing protocol distribution.

---

## ⚠️ Legal & Ethical Disclaimer

This program was created strictly for educational purposes and authorized network security analysis as part of the **CodeAlpha Cyber Security Internship**. Unauthorized interception of network traffic on networks or devices without explicit written permission is illegal and violates privacy laws and terms of service. Always test in isolated lab environments or on personal systems.
