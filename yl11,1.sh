#!/bin/bash

read -p "Sisesta program: " prog

if systemctl is-active "$prog" > == /dev/null; then
	echo " $prog on aktiivne ja töötab."
else
	echo " Hoiatus: $prog ei ole aktiivne!"
fi
