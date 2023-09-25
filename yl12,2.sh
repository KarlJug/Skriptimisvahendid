#!/bin/bash

nimekiri="nimekiri.txt"

# kontrollib, nimekiri.txt on olemas
if [ -f "$nimekiri" ]; then
    
    # loeb failist nimekirja
    while read enimi pnimi; do

        # Eemaldab tähed "õüäö" ja asendab need "ouao"
        # Liidab eesnime ja perekonnanime kokku ja lisab punkti vahele
        rida=$(echo "$enimi.$pnimi" | sed 'y/õüäöÕÜÄÖ/ouaoOUAO/')

        # Genereerib parooli
        parool=$(date +%s%N${RANDOM}${RANDOM} | sha256sum | head -c12)

        # Loob kasutaja kui seda pole olemas
        if  id "$rida" &>/dev/null; then
            echo "Kasutaja $rida on juba olemas"

        else
            useradd -m -s /bin/bash -p "$(echo "$parool" | openssl passwd -1 -stdin)" "$rida"

            # kontrollib kas fail nimega kasutajad.txt on olemas kui mitte siis loob selle
            if [ ! -f "kasutajad.txt" ]; then
                touch kasutajad.txt
            else
                echo "$rida $parool" >> kasutajad.txt
                echo "$rida $parool"
            fi

        fi

    done < "$nimekiri"

else
    echo "Faili ei ole"
fi
