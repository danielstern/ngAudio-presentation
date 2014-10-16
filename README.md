ngAudio-presentation
====================

A presentation on Angular Audio

```yaml
Outline
--------
introduction
  about me
    computer developer
      maker of magic circles
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

demonstrate this in a game? (improve adventure quest)
```
