#!"E:/install/x86/Lua/5.1/lua.exe"
o = {1, 2, 3, 4}


print("Content-Type: text/html; charset=iso-8859-1\n\n")
print(table.getn(o), '<br />')

a = {'one', 'dos', 'tres'}

for k,v in pairs(a) do
	print(k,v, "<br />")
end
