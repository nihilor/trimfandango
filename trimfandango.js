#!/usr/bin/env node

module.exports = function trimFandango (text, charlist = ["\0", "\t", "\n", "\x0B", "\xA0", "\r", " "]) {
    text = text || ''
    
    //  charlist == array: every element of the list left and right will be removed
    let reTrimLeft = null,
    reTrimRight = null
    if (Array.isArray(charlist)) {
        let reCharlist  = `[${charlist.join('|')}]+`
        reTrimLeft      = new RegExp('^' + reCharlist, 'iu')
        reTrimRight     = new RegExp(reCharlist + '$', 'iu')
    } else {
        //  charlist == string: find full set and subsets left and right and remove them
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