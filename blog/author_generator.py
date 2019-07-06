#!/usr/bin/env python

'''
author_generator.py
Copyright 2017 Long Qian
Contact: lqian8@jhu.edu
This script creates authors for your Jekyll blog hosted by Github page.
No plugins required.
'''

import glob
import os

post_dir = '[_]*/'
author_dir = 'author/'

filenames = glob.glob(post_dir + '*md')

total_authors = []
for filename in filenames:
    f = open(filename, 'r')
    crawl = False
    for line in f:
        if crawl:
            current_authors = line.strip().split()
            if current_authors[0] == 'author:':
                total_authors.extend(current_authors[1:])
                crawl = False
                break
        if line.strip() == '---':
            if not crawl:
                crawl = True
            else:
                crawl = False
                break
    f.close()
total_authors = set(total_authors)

old_authors = glob.glob(author_dir + '*.md')
for author in old_authors:
    os.remove(author)
    
if not os.path.exists(author_dir):
    os.makedirs(author_dir)

for author in total_authors:
    author_filename = author_dir + author + '.md'
    f = open(author_filename, 'a')
    write_str = '---\nlayout: authorpage\ntitle: \"Author: ' + author + '\"\nauthor: ' + author + '\nrobots: noindex\n---\n'
    f.write(write_str)
    f.close()
print("Authors generated, count", total_authors.__len__())
