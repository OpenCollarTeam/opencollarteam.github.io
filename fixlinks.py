replacements = {
    'https://github.com/OpenCollarTeam/OpenCollar/wiki/OpenCollar-Distributors-and-Designers':
    '/OpenCollar-Distributors-and-Designers',

    'https://github.com/OpenCollarTeam/OpenCollar/wiki/OpenCollar-Social-Partner-Locations':
    '/OpenCollar-Social-Partner-Locations',

    'https://github.com/OpenCollarTeam/OpenCollar/wiki/Contributors':
    '/Contributors',

    'https://github.com/OpenCollarTeam/OpenCollar/wiki/': '/docs/',
}

def replace_links(txt):
    for k, v in replacements.items():
        txt = txt.replace(k, v)
    return txt
