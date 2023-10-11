#!/bin/bash

# kontrollib et skrip oleks käivitatud juurkasutaja õigustes
if [ $UID -ne 0 ]; then
    echo "Käivita skript $(basename "$0") juurkasutaja õigustes!"
    exit
fi

# menüü väljastamine
echo "1. Uuenda paketihaldustarkvara"
echo "2. Paigalda paket apache2 ja käivita see"
echo "3. Eemalda paket apache2 ja eemalda ka seadistusfailid"
echo "4. Välju"

# kasutaja sisestab valiku
read -p "Sisesta valik: " valik

echo

# valiku põhjal käivitatakse skript
case $valik in
    1)
        apt-get update
        ;;
    2)
        apt-get install apache2
        systemctl start apache2
        ;;
    3)
        apt-get purge apache2
        apt-get autoremove
        ;;
    4)
        echo "Skript lõpetab töö"
        exit 1
        ;;
    *)
        echo "Vigane valik"
        exit 1
        ;;
esac