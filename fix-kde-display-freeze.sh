#!/usr/bin/env bash
# Egyszeri futtatás sudo-val — KDE fekete képernyő / NVIDIA suspend bug fix
set -euo pipefail

echo "==> systemd-logind: auto-suspend kikapcsolása"
sudo mkdir -p /etc/systemd/logind.conf.d
sudo tee /etc/systemd/logind.conf.d/99-no-auto-suspend.conf > /dev/null << 'EOF'
[Login]
IdleAction=ignore
IdleActionSec=0
HandleLidSwitch=ignore
HandleLidSwitchExternalPower=ignore
HandleLidSwitchDocked=ignore
EOF

echo "==> NVIDIA: hybrid laptop finomhangolás (kijelző AMD-n megy)"
sudo tee /etc/modprobe.d/nvidia-power.conf > /dev/null << 'EOF'
options nvidia NVreg_DynamicPowerManagement=0x02
options nvidia NVreg_EnableGpuFirmware=0
options nvidia_drm modeset=0
EOF

echo "==> NVIDIA suspend hook maszkolása (resume fagyás ellen)"
sudo systemctl mask nvidia-suspend.service nvidia-hibernate.service nvidia-suspend-then-hibernate.service

echo "==> logind újraindítása"
sudo systemctl restart systemd-logind

echo
echo "Kész. Indítsd újra a gépet: sudo reboot"
echo "Utána a KDE Energiakezelésben is ellenőrizd: Suspend = Soha, Kijelző kikapcsolás = Soha"
