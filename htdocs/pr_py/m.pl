#!"E:\portableapps\xampp\perl\bin\perl.exe"

print "Content-type: text/plain; charset=iso-8859-1\n\n";
$atom = "<<<<<<<<";
$atom =~ s/</&lt;/gi; #remplazamiento con expresiones regulares
print "$atom";
print '<br />';
print '1/2';
print '<br />';
print sqrt(100);
