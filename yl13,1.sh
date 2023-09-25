#!/bin/bash

# kontrollib, et skripti käivitamisel oleks kaust või fail määratud
if [ $# -ne 1 ]; then
    echo "Kasutusjuhend: $0 <failinimi/tee>"
    exit
fi

failiTee=$1

# loob varukoopia kaustas, mille nimi on sama mis failil, järgides sellele kuupäeva ja kellaaja lisamise reeglit
function varunda() {
    cp -r "$1" "$1-$(date +%Y-%m-%d-%H-%M)"
}

# kontrollib, et fail oleks olemas
if [ -f "$failiTee" ]; then
    varunda "$failiTee"

else
    echo "Faili ei ole olemas"
fi
