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
      own band
      electronic synthesizers
    likes games
      maker of classic games like adventure quest III
  why does angular audio exist?
    originally a library to manage sounds that didnt use jquery
    jquery - the cause of, and solution to, all of life's problems.
    part of the new order of angular-based plugins (the old order is jquery)
    in other words, avoid the tyranny of jquery!
    why don't we like jquery?
      jQuery is awesome. I use jQuery whenever I use Angular.
      However, angular is MORE awesome. Neither are negligibly small.
      Using jQuery tends to promote hacks that reduce maintainability and increase size
      Using angular (properly) tends to promote best practices that enhance testability, usability and load speed
      OK, so is there ANYTHING wrong with Angular?
        Search engines are only now slowly starting to index these pages properly.
  what is angular audio?
    it is an angular module that has directives and services for playing sounds
      ngAudio service - injected into code to let you bind and play sounds
      ng-audio - written into the dom to let you roll loading a sound and playing it on click into one simple directive
    takes inaccessible and ill-supported figments of the audio API, fixes all their properties 
      #currentTime is 2-way bindable but doesn't work out of the box in all browsers
        some browsers won't write current time unless the sound is stopped
          ng-audio abstracts this inconsistency away
      muting - a totally new property that is two way bindable
      volume - natively there's no way to read this.
        ng-audio turns it into a bindable interface
  

angular audio features and usage
  general features
    bindable properties
    no non-angular dependencies
  specific features (+ -> not available natively)
    sound volume:
      with angular-audio: bindable volume property
      natively: can be set, can't be read, because who would want that?
      
    restart sound:
      with angular-audio: native restart() method
      without: only takes four lines of code
      
    sound current time:
      with angular audio: bindable currentTime and progress properties
        currentTime - a number representing the number of seconds elapsed
        progress - a ratio from 0 to 1 indicating how complete the sound is
      natively: a variety of hacks allow you to set the current time of a sound in some browsers
    set sound current time
    read sound current time
    set sound progress (+)
    read sound progress (+)
    set sound loop (+ for JS)
    
    

a presentation demonstrating ng-audio as a directive
a presentation demonstrating its power in javascript

(?)
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
  
  (/?)
```


#Script

Hi, I'm Daniel. Thank you for taking the time to listen to my presentation. 
