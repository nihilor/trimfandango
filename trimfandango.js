#!/usr/bin/env node

module.exports = function trimFandango (text, charlist = ["\0", "\t", "\n", "\x0B", "\r", " "]) {
    //  charlist == string: find full set and subsets left and right and remove them
    //  charlist == array: every element of the list left and right will be removed
    //  it always starts left, then right
    //  TODO: how to handle empty arrays?
    //  TODO: how to handle empty strings?

    //  it's an array. create the regular expressions to find a group of matched characters
    let reTrimLeft = null,
        reTrimRight = null
    if (Array.isArray(charlist)) {
        let reCharlist  = `[${charlist.join()}]+`
        reTrimLeft      = new RegExp('^' + reCharlist, 'iu')
        reTrimRight     = new RegExp(reCharlist + '$', 'iu')
    } else {
        //  it's not an array, so force the value of charlist to String.
        let subsetLeft  = [],
        subsetRight     = []
        charlist        = String(charlist)
        
        for (let i = charlist.length; i > 0; i--) {
            subsetLeft.push(charlist.substring(0, i))
        }
        reTrimLeft      = new RegExp(`^(?:${subsetLeft.join('|')})`)
        
        for (let i = 0; i < charlist.length; i++) {
            subsetRight.push(charlist.substring(i))
        }
        reTrimRight     = new RegExp(`(?:${subsetRight.join('|')})$`)
    }    

    //  trim the text, first from the start (left), second from the end (right)
    return text.replace(reTrimLeft,'').replace(reTrimRight,'')
}