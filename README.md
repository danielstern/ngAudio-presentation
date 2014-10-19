ngAudio-presentation
====================

A presentation on Angular Audio

```yaml
Outline
--------
introduction
=========
  about me
    computer developer
      maker of magic circles
      choose your own adventure
      ball agent
      lorien ipsum
    likes music
    likes games
  why does angular audio exist?
    originally a library to manage sounds that didnt use jquery
    jquery - the cause of, and solution to, all of life's problems.
  what is angular audio?
    it is an angular module that has directives and services for playing sounds
      ngAudio service - injected into code
      ng-audio - written into the dom
    turns html5 audio properties into bindable properties
      currentTime is 2-way bindable but doesn't work out of the box in all browsers
        some browsers won't write current time unless the sound is stopped
          ng-audio abstracts this inconsistency away
      muting - a totally new property that is two way bindable
      volume - natively there's no way to read this.
        ng-audio turns it into a bindable interface
  

angular audio features and usage
  organic features
    bindable properties
  api features
    set loop, muting

a presentation demonstrating ng-audio as a directive
a presentation demonstrating its power in javascript

live demonstration
  use ediotr
    ace editor
    brackets
      brackets is very nice. all html needs to be within a tag to update
    http://en.wikipedia.org/wiki/Comparison_of_JavaScript-based_source_code_editors

demonstrate this in a game? (improve adventure quest)

live code example
/root
  index.html
  bootstrap.css (maybe with a theme)
  angular.js
  angular.audio.js
```

#Script

Hi, I'm Daniel. Thank you for taking the time to listen to my presentation. 
