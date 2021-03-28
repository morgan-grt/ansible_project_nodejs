import locale
from datetime import datetime

locale.setlocale(locale.LC_ALL, 'fr_FR.utf8')
date = datetime.now().strftime('%d %B %Y à %H heure(s) %M minute(s) et %S seconde(s)')

dirname = 'ui/'
name = 'index'

with open(dirname + name + '.html', 'r', encoding='utf-8') as f:
    newF = ''

    inDiv = False
    modification = False
    modified = False
    for line in f:
        modification = False
        if 'id="txt-ansible-date"' in line:
            modification = True
            newF += '\t\t\t\t\t<p id="txt-ansible-date">Le: ' + date + '</p>\n'

        if 'id="txt-ansible"' in line:
            newF += '\t\t\t\t\t<p id="txt-ansible">Page modifiée avec un script python lancé par Ansible</p>\n'
            modification = True
            modified = True

        if 'id="d3-content"' in line:
            inDiv = True

        if inDiv and '</div>' in line and not modified:
            newF += '\t\t\t\t\t<p id="txt-ansible">Page modifiée avec un script python lancé par Ansible</p>\n'
            newF += '\t\t\t\t\t<p id="txt-ansible-date">Le: ' + date + '</p>\n'
            inDiv = False
            modification = False

        if not modification:
            newF += line

s = newF
open(dirname + name + '.html', 'w', encoding='utf8').write(s)
print(s)
