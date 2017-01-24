> Director.js: The Youtube video sequence editor.
  Create rules and play/loop Youtube videos.

### Usage

All units are in seconds by default

1. create a range between 10. second and 22. second, boundaries are included.

  var range1 = new Director.Range({
    start: new Director.Point(10),
    end: new Director.Point(22)
  });

2. Operations with range
  `Rule` class:
  
  range1.Repeat -> return a Rule object

  a. Repeat range

    Get default scenario.

    var sc = Director.getSharedScenario();
    // add ranges
    sc.addRange(range1);

    // add rules
    sc.addRule(range1.Repeat());
    
    
3. Go to point at some point


### Example #1
```
  Director.config({
    videoId: "youtube-video-id",
    container: document.getElementById("video-container-div")
  });

  // get scenario 
  var sc = Director.scenario();

    // define some ranges
    var part1 = new Director.Range({
      title: "Part #1",
      text: "lyrics here....",
      start: new Director.Point(62),
      end: new Director.Point(82)
    });

    var part2 = new Director.Range({
      speed: 0.25,  // set video speed for range
      start: new Director.Point(320),
      end: new Director.Point(340)
    });
    sc.ranges.push(part1);
    sc.ranges.push(part2);

    // add rules
      // repeating ranges with repeat-count
      sc.rules.push(sc.rules.repeat(range1, 2));
      sc.rules.push(sc.rules.repeat(range2, 3));
      
      // set cursor to 5 seconds ago
      sc.rules.push(sc.rules.goto(5));
  
  // start scenario
  sc.play();
```

# Applying Rules

data rules -> Rule Classses -> Run


# Web App

## Player
- Display range title, text content such as lyrics in ranges
- Default site lands on the player. Discover and play videos in full-screen.
- Go to edit mode

## Editor
- Create scenarios with visual interface, no coding.
- Undo/redo with redux
- Play preview -> Player
- Share full-screen -> Player



- Bookmarklet : edit this youtube video in director editor
- Host on the github-pages?, yortuc.com/director

