#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  encode_bin.py
#  
#  Copyright 2017 Unknown <atuser@Kronos>
#  
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#  
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#  
#  You should have received a copy of the GNU General Public License
#  along with this program; if not, write to the Free Software
#  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
#  MA 02110-1301, USA.
#  
#  


import os.path
import sys

def printf (_str, *args):
    sys.stdout.write (_str % args)

def main(args):
    if not os.path.isfile(args[1]):
        print ("File %s not found" % args[1])
        return 1
    with open(args[1], 'r') as fp:
        file_str = fp.read ()
        for x in file_str:
            printf("%s, ", ord(x))
    print ("")
    return 0

if __name__ == '__main__':
    import sys
    sys.exit(main(sys.argv))
