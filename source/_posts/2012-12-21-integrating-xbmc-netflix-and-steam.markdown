---
layout: post
title: "Integrating XBMC, Netflix, and Steam"
date: 2012-12-21 21:35
comments: true
categories: htpc
---
With my [core gaming HTPC](/blog/2012/12/21/gaming-htpc-fundamentals/) in place and [wireless connectivity](/blog/2012/12/21/adding-wireless-everything-to-the-gaming-htpc/) and no trouble along the way, I found some interesting challenges with software integration. Ultimately, I found a way to almost seamlessly integrate XBMC, Steam, and Netflix using XBMC as the primary front-end. It took some hacking, but was well worth it, and best of all: no keyboard or mouse required.

<!-- more -->

## XBMC can do it all

I've been using XBMC since it debuted for the original XBox, and it has been the center of my home's entertainment setup ever since. With the new gaming HTPC setup, I was concerned XBMC would take a backseat, given the necessity to use Windows Media Center for Netflix and Steam for game launching.

I should have known there was already a plugin for that.

The XBMC [Advanced Launcher](http://wiki.xbmc.org/index.php?title=Add-on:Advanced_Launcher) add-on allows you to launch arbitrary executables from a menu. The launchers you create can be added to the XBMC favorites list, making them assignable to pretty much anywhere in the UI (provided you're using a nicely configurable skin such as [Aeon](http://xbmc.org/skins/aeon/)).

This provides the foundational support necessary to let us launch Steam and Windows Media Center. Of course, launching those particular applications is not as straightforward as I had hoped...

## AutoHotkey to the rescue

An amazing little open source tool called [AutoHotkey](http://www.autohotkey.com/) fills the gaping hole in Windows' automation capabilities, facilitating all manner of UI, window, and process scripting tasks. As icing on the cake, it includes a compiler which allows you to generate standalone executables from your scripts, easing the integration with launches such as the Advanced Launcher XBMC add-on.

This is an extremely useful tool in my HTPC setup, as merely launching executables such as Steam and Windows Media Center is not quite enough for the seamless integration I want. For example, although it's possible to launch Steam from the command line in Big Picture mode, exiting BPM will leave XBMC unfocused. This is a recurring theme when launching other fullscreen apps from XBMC in this manner.

Using AutoHotkey, it's possible not only to launch the target applications, but also restore focus to XBMC when they exit, as well as perform any other bits of UI automation which might be required to get the programs in a good working state without having to touch a keyboard or mouse.

Everything else in this article builds on AutoHotkey in some way.

## First, the easy one: Steam

Steam turned out to be pretty simple. It is well behaved, has a direct entry point, and has easy access to exit it and return to XBMC. The following is an example AutoHotkey script which will launch or focus Steam Big Picture, and re-focus XBMC upon closing BPM:

```
#NoEnv  
SendMode Input
SetWorkingDir %A_ScriptDir%
#Persistent
#SingleInstance

if WinExist("ahk_class CUIEngineWin32")
  WinActivate
else
  run, %A_ProgramFiles%\Steam\Steam.exe -silent steam://open/bigpicture

WinWait, ahk_class CUIEngineWin32
WinWaitClose, ahk_class CUIEngineWin32
WinActivate ahk_class XBMC
ExitApp
```

If Steam is installed somewhere other than `Program Files`, you'll need to edit the script (or introduce a parameter).

Compile the script, set up an XBMC Advanced Launcher entry to execute it, and you're all set.

## Jumping through hoops for Netflix

The only way I know of to use Netflix in a remote-compatible way in Windows is via the Netflix plugin within Windows Media Center. The arcane and opaque nature of WMC made figuring out how to launch the Netflix plugin directly from the command line a bit trickier. I lucked out with some Google searching, and was able to find a command to jump straight to Netflix. A little time spent with the AutoHotkey Window Spy utility revealed the Media Center window class for manipulation.

Here's the script:

```
#NoEnv
SendMode Input
SetWorkingDir %A_ScriptDir%
#Persistent
#SingleInstance

if WinExist("ahk_class eHome Render Window")
	WinActivate
else
	run, C:\Windows\ehome\ehshell.exe /url:windowsmediacenterapp:{e6f46126-f8a9-4a97-9159-b70b07890112}\{982ea9d3-915c-4713-a3c8-99a4688b7c59}?EntryPointParameters=

WinWait, ahk_class eHome Render Window
WinWaitClose, ahk_class eHome Render Window
WinActivate ahk_class XBMC
ExitApp
```

Caveats:

* There is a benign proxy error that appears during the Netflix loading which must be dismissed. It's possible to automatically dismiss it with AutoHotkey, but I haven't yet spent the time to do so.
* Exiting Windows Media Center with the remote takes some menu diving. There's probably a faster way to accomplish it, but I haven't cared enough to figure it out yet.

## What else?

At this point, I had accomplished every basic thing I had set out to do. I spent some time customizing my XBMC skin so that I could launch Netflix and Steam from the main menu directly, and called it a success.

Hopefully somebody else will find these articles to be useful shortcuts in their own HTPC adventures.
