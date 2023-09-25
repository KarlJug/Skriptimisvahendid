#!/bin/bash

# kontrollib et skrip oleks käivitatud juurkasutaja õigustes
if [ $UID -ne 0 ]; then
    echo "Käivita skript $(basename "$0") juurkasutaja õigustes!"
    exit 1
fi

# küsib nimi ja kontrollib kas seelle nimelinge kasutaja on olemas
read -p "Sisesta nimi: " nimi

if id "$nimi" &>/dev/null; then
    echo "Kasutaja $nimi on olemas."
    exit 1
fi

# küsib kas kasutaja soovib parroli uuesti sisestada kui jah siis küsib paroolid uuesti kuin paroolid kattuvad ja kui kattuvad siis tagastab parooli või kui kasutaja vastab ei siis skript lõpetab töö
while true; do
    read -s -p "Sisesta parool: " parool
    echo
    read -s -p "Sisesta parool uuesti: " parool_confirm
    echo


    if [ ${#parool} -lt 8 ]; then
        echo "Parool on liiga lühike!"

        read -p "Kas soovid parooli uuesti sisestada? (jah/ei) " vastus
        if [ "$(echo "$vastus" | tr '[:upper:]' '[:lower:]')" == "jah" ]; then
            continue
        else
            echo "Skript lõpetab töö!"
            exit 1
        fi
    elif [ "$parool" != "$parool_confirm" ]; then
        echo "Paroolid ei kattu!"

        read -p "Kas soovid parooli uuesti sisestada? (jah/ei) " vastus
        if [ "$(echo "$vastus" | tr '[:upper:]' '[:lower:]')" == "jah" ]; then
            continue
        else
            echo "Skript lõpetab töö!"
            exit 1
        fi
    else
        break
    fi
done


# loob kasutaja
useradd -m -s /bin/bash -p "$(echo "$parool" | openssl passwd -1 -stdin)" "$nimi"

# küsib kasutajalt gruppi ja kui kasutaja ei sisesta midagi siis kasutaja grupiks saab kylaline
read -p "Sisesta kasutaja grupp (default: kylaline): " grupp

if [ "$grupp" == "" ]; then
    grupp="kylaline"
fi

# tekitab gruppi kui seda pole ja lisab kasutaja gruppi
groupadd "$grupp"
usermod -a -G "$grupp" "$nimi"

# kontrollib kas kasutaja loomine õnnestus
if [ $? -ne 0 ]; then
    echo "Kasutaja loomine ebaõnnestus!"
    exit 1
fi

# loob kasutaja kodukata faili nimega "teretulemast_$nimi.txt" kausta /home/$nimi/kataloog/teretulemast_$nimi.txt
mkdir -p /home/"$nimi"/kataloog
touch /home/"$nimi"/kataloog/teretulemast_"$nimi".txt

# kirjutab faili "teretulemast_$nimi.txt" sisse "Tere tulemast $nimi"
echo "Tere tulemast $nimi" > /home/"$nimi"/kataloog/teretulemast_"$nimi".txt

echo "Kasutaja $nimi on loodud ja lisatud gruppi $grupp."