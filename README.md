## Website Performance Optimization portfolio project

The objective of this project is to optimize an online portfolio for speed by optimizing the critical rendering path to render the page as quickly as possible by applying the techniques presented in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

####Part 1: Optimize PageSpeed Insights score for [index.html](https://heyjane.github.io/frontend-nanodegree-mobile-portfolio/build/index.html).

The original PageSpeed Insights scores were 28/100 for mobile and 30/100 for desktop.
I edited the files to inline the css, and make the inlined css media-specific.  I also removed render-blocking code by running scripts async.  Then I optimized images.  I tested resizing, converting to Base64, and minimizing.  In the end, resizing and using Gulp to minimize the images were most effective.  I also used Gulp to minimize the html and javascript code.  Since I inlined all the CSS files, there were no CSS files to minimize.

You can view the source files (readable developer files) in the [src folder](https://github.com/heyjane/frontend-nanodegree-mobile-portfolio/tree/master/src) in this repository.

The optimized production files are in the [build folder](https://github.com/heyjane/frontend-nanodegree-mobile-portfolio/tree/master/build) in this repository.
You can access the [Git Hub pages site](https://heyjane.github.io/frontend-nanodegree-mobile-portfolio/build/index.html) for PageSpeed Insights testing:  https://heyjane.github.io/frontend-nanodegree-mobile-portfolio/build/index.html.

RESULTS: Target scores for mobile and desktop are 90/100.  After optimizations, my PageSpeed Insight scores were 95/100 Mobile Speed, 100/100 Moble User Experience, and 97/100 Desktop Speed.


####Part 2: Optimize Frames per Second in pizza.html

The second objective of this project is to optimize views/pizza.html, until the frames per second rate is 60 fps or higher and optimize pizza resizing computation efficiency times to under 5ms.

In addition to the resources suggested by Udacity for this project, I used the resources listed in the file P4Resources.txt to research, strategize, and implement a solution.
Most of the performance problems in this part of the project were related to inefficient for-loops that accessed the DOM unnecessarily.  I also resized and optimized images, and consolidated repetitive computations.  I replaced bootstrap-grid.css with bootstrap.min.css, and I used Gulp to optimize the js and html files.  I also used translate3d transformations to render the sliding pizza movements as suggested by research on using CSS3 layers to minimize background repainting.

You can view the source files for this part of the project under [src/views](https://github.com/heyjane/frontend-nanodegree-mobile-portfolio/tree/master/src/views) in this repository and the optimized production files under [build/views](https://github.com/heyjane/frontend-nanodegree-mobile-portfolio/tree/master/build/views).
You can access the [pizza.html site on GitHub pages](http://heyjane.github.io/frontend-nanodegree-mobile-portfolio/build/views/pizza.html) for testing at http://heyjane.github.io/frontend-nanodegree-mobile-portfolio/build/views/pizza.html
or by clicking on [build/views/pizza.html](https://github.com/heyjane/frontend-nanodegree-mobile-portfolio/blob/master/build/views/pizza.html) in this Github repository.

RESULTS: Target score for fps is 60 fps or higher.  After optimizations, Google DevTool timeline results were significantly higher than 60fps.

Target score for pizza resizing computation efficiency: 5 ms or less.  After optimizations, browser console times for resizing were consistently below 1.5 ms.

My tests and development were done on a MacBook Pro using Google Chrome Canary and Google Dev Tools.

