## Calcolo del prezzo del biglietto del treno

# Traccia

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

# Svolgimento
 (Userò questa in quanto più semplice e diretta)

- Chiedo all'utente il numero di km che vuole percorrere
- Chido all'utente la sua età
- moltiplico il numero di km per il prezzo del biglietto al km (0.21 €)
- **SE** l'utente ha < 18 anni 
    -  applica il 20% di sconto
- **SE** l'utente ha > 65 anni 
    -  applica il 40% di sconto
- Scrivo a schermo il prezzo del biglietto.


# Alternativa al ciclo di if

- **SE** l'utente ha un'età compresa tra i >= 18 **E** <=65 
    -  scrivi a schermo il prezzo del biglietto
- **ALTRIMENTI** 
    - **SE** l'utente ha < 18 anni 
        -  applica il 20% di sconto
    - **ALTRIMENTI**  ( in questo caso l'utente sarà > 65 anni)
        -  applica il 40% di sconto