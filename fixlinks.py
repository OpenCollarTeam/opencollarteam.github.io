#!/usr/bin/env python

import os

replacements = (
    ('https://github.com/OpenCollarTeam/OpenCollar/wiki/OpenCollar-Distributors-and-Designers',
        '/OpenCollar-Distributors-and-Designers'),

    ('https://github.com/OpenCollarTeam/OpenCollar/wiki/OpenCollar-Social-Partner-Locations',
        '/OpenCollar-Social-Partner-Locations'),

    ('https://github.com/OpenCollarTeam/OpenCollar/wiki/Contributors',
        '/Contributors'),

    ('https://github.com/OpenCollarTeam/OpenCollar/wiki/', '/docs/'),
)

def replace_links(txt):
    for old, new in replacements:
        txt = txt.replace(old, new)
    return txt

def replace_links_in_dir(dirname):
    for a in os.listdir(dirname):
        path = os.path.join(dirname, a)
        print('\n\n######Doing %s######\n\n' % path)
        if path.endswith('.md'):
            with open(path) as f:
                content = f.read()
            content = replace_links(content)
            #print(content)
            with open(path, 'w') as f:
                f.write(content)


def main():
    replace_links_in_dir('.')
    replace_links_in_dir('docs/')

if __name__ == '__main__':
    main()
