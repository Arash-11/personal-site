---
author: arash-11
pubDatetime: 2024-05-11
title: Learnings from 'The UNIX Time-Sharing System' paper
postSlug: unix-paper-learnings
featured: false
description: What I learned from reading The UNIX Time-Sharing System paper.
---

I went in to read the 1974 paper on UNIX, titled <a href="https://dsf.berkeley.edu/cs262/unix.pdf" target="_blank" rel="noopener noreferrer">The UNIX Time-Sharing System</a>, with expectations to learn about the technical decisions made (which I certainly did) but I ended up finishing the paper with more lessons on broader design philosophy.

The technical aspects such as how the filesystem is designed and why everything in UNIX is a file <sup><a href="#footnote-1" id="footnote-ref-1">1</a></sup> is already described in the paper and many other resources so I'll skip talking about that stuff and instead note my takeaways regarding the design decisions that were made.

<br />

The paper's introduction ends with the following:

> It is hoped, however, the users of UNIX will find that the most important characteristics of the system are its simplicity, elegance, and ease of use.
> [...] There is also a host of maintenance, utility, recreation, and novelty programs. All of these programs were written locally. It is worth noting that the system is totally self-supporting. All UNIX software is maintained under UNIX

This here gives you an idea of what UNIX was aiming to be but let's jump to the end of the paper for more _perspective_.

> Perhaps paradoxically, the success of UNIX is largely due to the fact that it was not designed to meet any pre-defined objectives. […] Our goals throughout the effort, when articulated at all, have always concerned themselves with building a comfortable relationship with the machine and with exploring ideas and inventions in operating systems. We have not been faced with the need to satisfy someone else’s requirements, and for this freedom we are grateful.

UNIX wasn't designed out of a business need or with any grand goals -- Ken Thompson was dissatisfied with the available machines at the time and so he "set out to create a more hospitable environment", as the paper mentions (initially for the PDP-7), mostly for himself. For a system like this to get so successful, paradoxical indeed!

Starting with this, UNIX morphed into a platform that provided you not only a foundation to build things upon, but one that allowed you to improve the platform itself and provided you with Lego-like building blocks to help you build as you wished.

<br />

Continuing with the paper, it then goes on to list the "Three considerations which influenced the design of UNIX":

1. > First, since we are programmers, we naturally designed the system to make it easy to write, test, and run programs.

My takeaway is that, simply put, _know thy audience_. It probably took a few iterations to get to this point, but UNIX knew what it wanted to be and for whom.

2. > Second there have always been fairly severe size constraints on the system and its software. [...] the size constraint has encouraged not only economy but a certain elegance of design.

Constraints can force you to innovate and create something of more elegance; embrace it.

3. > Third, nearly from the start, the system was able to, and did, maintain itself. [...] Since all source programs were always available and easily modified on-line, we were willing to revise and rewrite the system and its software when new ideas were invented, discovered, or suggested by others.

The system can be molded over and over again as time goes on, continuously evolving. This is probably one of the reasons why UNIX has had such a long-lasting impact to this day (remember, the paper was written in 1974!).

<br />

The paper goes on to mention that UNIX did have the Berkeley time-sharing system and Multics as influences, so the above points may not all be UNIX-original. But UNIX was the one that popularized them. It's not a perfect system by any means but it's been interesting to see its impact and legacy to this day. And although most people might not think of UNIX as "<a href="https://museapp.com/podcast/27-playful-software/" target="_blank" rel="noopener noreferrer">playful software</a>", its philosophy does embody the concept to some degree in my opinion. Looking at the present and toward the future, I'm excited about many OS projects -- including <a href="https://www.serenityos.org/" target="_blank" rel="noopener noreferrer">SerenityOS</a>, <a href="https://100r.co/site/uxn.html" target="_blank" rel="noopener noreferrer">uxn</a>, and <a href="https://playb.it/" target="_blank" rel="noopener noreferrer">playbit</a> -- that embody aspects of the UNIX philosophy that I personally like, perhaps to varying degrees.

---

<p id="footnote-1">
<a href="#footnote-ref-1">1</a> This may not be technically accurate, at least not anymore, as mentioned in <a href="https://unix.stackexchange.com/a/141020" target="_blank" rel="noopener noreferrer">this unix.stackexchange post</a>.
</p>
