get-childitem *.csv | foreach {rename-item $_ $_.name.replace(" ","")}
get-childitem *.csv | foreach {rename-item $_ $_.name.replace("(","")}
get-childitem *.csv | foreach {rename-item $_ $_.name.replace(")","")}
