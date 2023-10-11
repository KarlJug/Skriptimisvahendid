#!/bin/bash

# Kuvab kõik kasutajad /etc/passwd failist
awk -F: '{print $1}' /etc/passwd
