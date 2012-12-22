---
layout: post
title: "Gaming HTPC Fundamentals"
date: 2012-12-21 18:58
comments: true
categories: htpc
---
After years of success with media-only HTPC solutions, I decided to take things a step further and set up a machine capable of doing it all: XBMC, Netflix, and high performance modern gaming with Steam. This is the first in a small series of articles on my experience creating a silent gaming HTPC.

<!-- more -->

To preface, I have a pretty small but meaty set of requirements:

* XBMC front-end
* Netflix support
* Modern gaming capabilities via Steam (via Big Picture mode)
* Full support for universal IR remotes and XBox 360 controllers
* Silent operation (not to be confused with quiet operation)

Here's what it took.

## The computer under the stairs

The desire for both silence and gaming support poses an especially difficult challenge, and forces some important compromises. The new AMD Trinity APUs are promising, but not quite powerful enough for my gaming needs (modern titles, high detail settings, 720p resolution). A recent [Verge article](http://www.theverge.com/2012/11/30/3706718/forget-the-ps4-and-the-xbox-720-build-your-own-steambox-on-the-cheap) and [Hackernews member guide](http://gist.io/4199804) provide some details on Trinity based "Steambox" setups. At their low wattage, they can be run in a very quiet configuration, but the performance compromise is too much for me.

I opted to take an approach which completely sidesteps these issues: Place my beefy mid-tower gaming rig in the basement directly beneath the entertainment center, and use some strategic cable runs and outboard USB equipment to provide all the required connectivity.

If you can possibly manage this physical isolation, it seems like the best of all worlds. No compromises on performance, expandibility, or noise.

## On the mapping of pixels

An important consideration with any HTPC setup is determining how to connect your PC to an LCD TV. Read up on [pixel mapping](http://pixelmapping.wikispaces.com/Pixel+mapping+explained), and determine if and how your TV supports 1:1 mapping. In the case of my Vizio 42" LCD display, 1:1 mapping can only be achieved via the analog VGA connection. Attempts to output video from my PC to the TV via an HDMI connection results in frustration and failure as a significant number of pixels are clipped. This is not correctable via my TV's settings or by video driver configuration.

## Speaking of VGA and HDMI...

Once I understood the limitations of my setup in terms of video connectivity, I was concerned I'd be stuck with inferior quality video due to the VGA output requirement. My concerns turned out to be baseless: 720p output to my TV via the analog connection looks just as crisp and vibrant as the HDMI-based video I'd been using with the AppleTV. If you find yourself in a similar situation, give it a try. You might be pleasantly surprised.

## Laying the foundation

There isn't much to say here. I started with an existing tower rig, and used the following base components to get things wired up and set the stage for the connectivity I wanted:

* 10ft DVI to VGA cable for video
* 10ft S/PDIF cable for audio
* 10ft USB cable
* 10ft ethernet cable
* A powered, 7-port [USB hub](http://www.amazon.com/gp/product/B00008VFAF/ref=oh_details_o01_s00_i00)

The powered USB hub was very important to my configuration. As the computer is in a different room, I need as many ports and as much juice as possible. The D-Link works perfectly and is tiny, although the casing and connectors feel a bit flimsy. Overall, a great value.

## Getting to work

In the following articles, I'll talk about how I introduced a ton of convenient wireless input methods, some tricks to integrate the software, and anything else along the way.
