---
layout: post
title: "Adding wireless everything to the gaming HTPC"
date: 2012-12-21 20:42
comments: true
categories: htpc
---
My [gaming HTPC](/blog/2012/12/21/gaming-htpc-fundamentals/) needed lots of wireless stuff to control it: a universal IR remote, XBox 360 controllers, a keyboard, mouse, and headset. In this article I'll talk about the components I used to get everything I wanted with zero fuss.

<!-- more -->

## The bare minimum: ye olde keyboard and mouse

The first order of business was to get a wireless keyboard and mouse combo. To start, I already had a [Microsoft Arc](http://www.amazon.com/Microsoft-Arc-Wireless-Keyboard-Xbox/dp/B002VR6A9K/ref=sr_1_1?ie=UTF8&qid=1356142492&sr=8-1&keywords=microsoft+arc+keyboard) wireless keyboard. It's cheap, tiny, the keys feel good, has a tiny receiver, and the battery lasts forever. Good enough for all basic purposes.

I also happened to have a [Microsoft Wireless Mobile mouse](http://www.amazon.com/Microsoft-Wireless-Mobile-Mouse-3500/dp/B003PBZNF8/ref=sr_1_4?s=electronics&ie=UTF8&qid=1356142560&sr=1-4&keywords=microsoft+wireless+travel+mouse), which fits thematically with the Arc.

All supported out of the box in Windows 7.

Since gaming is a top priority in this setup, I may revisit these components in the future. There are a few low-latency wireless mice out there from Logitech and Razer which may be better suited for FPS gaming with the keyboard/mouse. For now, I'm content to stick to my XBox controllers and the parts I have.

## An HTPC your mom can use has an IR receiver

The primary function of my HTPC is to serve as a human friendly media center using XBMC. This *requires* compatibility with my [Vizio XRU100 remote](http://store.vizio.com/review/product/list/id/625/category/74/). The remote is a real sleeper hit: it was about $10 USD at a local Wal-Mart and controls my TV, my [Sony HT-CT150 receiver](http://www.amazon.com/Sony-HT-CT150-Sound-Bar-System/dp/B003C1AO2I), and my HTPC. Incredibly, it's also Windows MCE compatible. Between that and the unlikelyhood that it would work with my famously proprietary Sony product makes it an incredible value.

The world of USB IR receivers is not very well documented. Finding a standlone receiver with true MCE compatibility seems to be a real crapshoot. This [ancient guide](http://www.techpowerup.com/forums/showthread.php?t=98630) got me started on the basics of MCE comaptibility and IR receiver challenges. From there, it was a matter of reading a ton of Amazon customer comments for various IR receiver/remote combos to find one which was actually MCE conformant and was relatively cheap.

I got lucky. The [Azend GP-IR01BK](http://www.amazon.com/gp/product/B0028N6XDA/ref=oh_details_o02_s00_i02) was cheap, and came with a receiver which:

* Was plug-n-play out of the box with Windows 7 Ultimate 64-bit
* Had true MCE compatibility and so worked with the Vizio remote using the MCE code
* Integrated flawlessly out of the box with XBMC and Windows Media Center

Of course, the remote that came with the package is completely useless to me, but $25 for a perfectly functional receiver was a great deal.

## Recycle those XBox controllers

I have an XBox 360 collecting dust in a box and a couple of controllers. Valve is pushing XBox 360 controller support as part of their Big Picture rollout. Microsoft produces a USB receiver for the XBox controllers. Adding support for these seemed like a no-brainer.

Beware!

There are *numerous* knockoff XBox 360 USB receivers on Amazon, eBay and the like. Many of them are even fraudulently branded with Microsoft holograms and packaging. My understanding is that at some point in the past Microsoft did actually sell the receiver separately, but does so no longer. Read the customer comments and purchase these standalone receivers at your own risk. Many of the knockoffs are reported to have varying degrees of driver issues

I wanted to expand my controller collection to three, and also wanted a genuine Microsoft product. It turns out there was a way to kill two birds with one stone. Microsoft sells a [Wireless Controller for Windows](http://www.amazon.com/gp/product/B004QRKWKQ/ref=oh_details_o02_s00_i00) which is just a typical XBox 360 controller *with the official receiver* included.

Like everything else, it was completely plug-n-play: The receiver's drivers were automatically installed, and I was able to sync all three of my controllers and use them in Trine 2 within a minute.

No fuss.

## On to the software

With all of my hardware in place, I moved on to the chore of integrating three necessary but disparate front-ends: XBMC, Steam, and Netflix (via Windows Media Center). Check out my followup articles for more.
