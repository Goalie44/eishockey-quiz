# Baut index.html aus den Dateien in src/ zusammen: python3 build.py
import re
s=open('index.html').read()
css=open('src/base.css').read()+open('src/extra.css').read()
head=s[:s.index('<style>')+7]
html=head+css+"\nbody{padding-bottom:env(safe-area-inset-bottom)}\n</style>\n</head>\n<body>\n"+open('src/body.html').read()+"""
<script src="config.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>
<script>
"""+open('src/data_k1.js').read()+open('src/data_beg.js').read()+"\nconst $=id=>document.getElementById(id);\n"+open('src/engine.js').read()+open('src/app.js').read().replace("const $=id=>document.getElementById(id);\n","",1)+"</script>\n</body>\n</html>\n"
open('index.html','w').write(html)
print('ok',len(html))
