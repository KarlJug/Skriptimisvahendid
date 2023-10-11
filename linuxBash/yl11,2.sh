#!/bin/bash

# Kontrollib mittu argumenti on antud
if [ "$#" -ne 2 ]; then
    echo "Kasutusjuhend: $0 <failinimi/tee> <soovitud õigused>"
    exit 1
fi

failinimi=$1
oigused=$2

# Kontrollib kas fail on olemas
if [ -f "$failinimi" ]; then
    # Võtab faili õigused
    failiOigused=$(stat -c "%a" "$failinimi")

    # Kontrollib kas failil on soovitud õigused
    if [ "$failiOigused" -eq "$oigused" ]; then
        echo "Faili $failinimi on olemas ja õigustega korrektsed"
    else
        # Muudab faili õigused
        echo "Hoiatus: faili $failinimi õigused on $failiOigused, peaksid olema $oigused!"
    fi
else
    echo "Hoiatus: $failinimi pole fail või ei eksisteeri!"
fi