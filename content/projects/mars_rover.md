---
title: Mars Rover Prototype
image: robot.png
tags:
  - CAD
  - PID
  - STM32
color: eedadb
titleColor: d4a2a6
description: An automated robot that picks up six pop cans and deposits them vertically in a container.
year: 2021
---

For the ENPH 253 robot project at UBC, our team was tasked with designing and constructing a proof-of-concept prototype for a robot that would pick up canisters on the surface of Mars and then deposit them vertically in a return vehicle. See this [Youtube video](https://youtu.be/IoMADe1TEvY) for the robot in action.

The constraints were the following:

- Pick up 6 canisters in 1 minute on an 8" by 8" surface.
- Canisters must be deposited vertically in cardboard silos.
- The robot could not be greater than 24" in any direction at all times.

We started with some initial brainstorming and designs using CAD modelling and sketches, which led us to a few ideas. The first was a robot that had a humanoid arm to pick up cans and deposit them vertically in a storage location on the robot. This would allow the robot to quickly drop all the cans at once in the silos. Another idea was a robot that would sweep the cans onto a ramp, where a piston would then push the cans into a bent funnel to make the cans upright when they go into the silo.

Some of these ideas were discarded as the robot was either too big, would require too much power, or there were too many degrees of freedom, which increased the chances of unforeseen problems. Finally, we decided to create a robot with an arm that would sweep the cans onto a ramp that rotates upwards to put the cans in a vertical shaft on the robot. At the bottom of the shaft lies a rack-and-pinion piston, which ejects cans one at a time through a bent funnel. After each ejection, the robot would move to the next silo slot. Cans will be detected using an IR sensor beam.

![CAD Model of Prototype](/images/mars_rover/CADModel.png)
![CAD Model of Prototype - Ramp Up Position](images/mars_rover/CADModel_up.png)

## Mechanical Design
### CAD
We first designed this robot collaboratively in Onshape to check mechanical constraints. To build the physical model, chloroplast and cardboard were used with duct tape and hot glue. This allowed for easy modifications and a solid structure. Additionally, due to COVID, this course was taught virtually, so these tools were what served us best in this situation.
### Servo Placement
Securing the servos to the chloroplast was quite difficult and required some extra support to prevent rotation in the chloroplast. We also had multiple SG90 servos break. Removing the broken ones, which were secured in the chloroplast, took a lot of time. Looking back, have a 3D printed holder for each servo would have been better as the servo could be easily detached by removing two screws, whilst the 3D printed holder would always be securely attached to the chloroplast.
The method we used (creating a chloroplast sandwich and attaching the servo arms to the robot with strong copper wires threaded through the arm holes) is shown here for the ramp servo.
![Ramp Servo](images/mars_rover/ramp_servo.JPG)
### Rack and Pinion Piston
One servo was attached to a 3D printed holder as it was part of the piston. I designed the piston in Onshape. The pinion gear had the following dimensions:
- 20 teeth
- diameter: 8 cm
- module: 0.4 cm = diameter / number of teeth
- pressure angle: 20 degrees
- linear pitch: pi * module

which was created using a public FeatureScript in Onshape. I designed the rack based on the gear specifications, as shown in the following image.
![Rack Sketch](images/mars_rover/rack_sketch.png)
To ensure that the SG90 servo would fit in the servo holder, I downloaded a model of the servo in CAD and based all dimensions on this model.
![CAD of Piston](images/mars_rover/piston_CAD.png)

### Wheels
Another issue was the sagging of the two motorized wheels since chloroplast bends under large loads. To fix this issue, I cut a slab of wood using a handsaw and drill. The wheels screwed onto the wood, and then I used wide screws to screw the chloroplast to the wood. This worked very well.

Our initial design relied on the front of the robot sliding on the ground for support, but due to excess friction, we ended up adding a caster wheel in the front.

### Exit Slide
To make sure the cans would slide upright into the silos, I added light cardboard to guide the cans. The initial idea was to follow the CAD design, which was four walls to form a box that would match the top of the silo. However, after testing, I found that if the can became stuck midway in the silo and midway in the exit slide, the robot would not be able to move to the next silo. To prevent this problem, the new exit slide had fewer walls but was still able to guide the cans. I also added some plastic tabs at the bottom of the chute to prevent premature exiting of cans.
![Exit Slide](images/mars_rover/exit_slide.png)

### Ramp and Sweeping Arm
The ramp was quite easy to make. After finding the rotation point to connect it to the servo, I was able to trim it to size to reach the top of the chute for the cans to slide in and to nicely slide along the ground once lowered. The arm was more difficult. Due to the weight of the chloroplast, the end of the arm would sag down and drag along the ground, preventing it from rotating quickly. This was fixed by cutting out material. However, the arm was not able to collect all can orientations, and cans would frequently bounce off the arm and just miss the ramp. This only allowed the robot to collect about 2 out of 6 cans. So another arm on the other side was installed, this one make of pop sticks to reduce weight. The extra arm would first push the can into the chloroplast arm, so then the chloroplast arm would be able to always push the can onto the ramp.

Finally, the last major issue with the sweeping arm was that it would sometimes sweep the cans onto the ramp vertically. When the ramp lifted up, the can would then enter the chute vertically, so it was unable to be pushed out into the silo. I solved this by adding a sliding cardboard attachment. When the chloroplast arm was open, the cardboard would lie almost flat against the arm so that it wouldn't interfere with cans sliding in. When the chloroplast arm closed, the cardboard would slide against the ramp and push any vertical can into a horizontal position. It also served as a mechanism to push cans into the proper position so that they wouldn't miss the chute hole on top.
![Cardboard Sketch](images/mars_rover/cardboard_drawing.png)
![Cardboard Attachment](images/mars_rover/cardboard_attachment.JPG)

## Electrical and Software Design
### H-Bridges
To run the motors, we soldered custom h-bridges (not chips) to be able to run the wheels forward and backward. Soldering h-bridges on protoboards took a long time as it was my first soldering project, and many MOSFETs broke, meaning that I would have to desolder them to replace them with a new component. Testing the circuit first without soldering the MOSFETs (just making them contact the protoboard) was the best solution. I also discovered that components shouldn’t be pushed all the way in the protoboard since the heat from soldering could fry the component.
![H-Bridge](images/mars_rover/h-bridge.jpg)
### Blue Pill Circuitry
As a micro-controller, the STM32 Blue Pill was very powerful in running the robot. However, as it had a limited amount of pins, we had to plan out where each connection went. This involved minimizing the number of analog inputs as most analog pins were already occupied by the IR sensor array.
### Power Distribution
Another electrical circuit I soldered was a power divider circuit to supply 3.3V to the blue pill and 5V to the servos, as well as 12V to the batteries. There was quite a bit of noise as there were many wires close to each other, and all the circuits were powered off of one battery. To decrease the noise, we added capacitors in the power rails.
### IR Sensors
To increase the accuracy of tape following, I decided to create a linear array of five IR sensors. These values, either 1 or 0 depending on if there was black tape under the sensor, were stored in an array in C++. By identifying the situation using array values, we were able to use differential steering to keep the robot on the right course. Black tape was used to isolate the sensors from each other.
![IR Sensors](images/mars_rover/ir_array.jpg)
### PID Tuning
To tune the robot's PID values, I increased the P term until the robot approximately followed the tape path with some oscillations. Then I added a D term to dampen oscillations, with an initial guess of 10P. This worked quite well until I recharged the 12V battery, which ended up changing the power given to the wheels, thus changing the PID values. To avoid this problem for the competition, PID values were tuned a day before the competition.

## Crane
An additional component of the competition involved lowering the robot from a certain height using a crane. Our crane was created using a pulley system. The robot was attached to the pulley system using two copper hooks on each side, which would detach from the eyelets on the robot when the robot reached the floor. To power the pulley system, I used a continuous servo with a high torque rating. Initially, I had trouble with the servo due to the rotational power from the robot lowering that was getting fed back into the servo. This problem was fixed with more pulleys to reduce the load, as well as a diode to protect the blue pill from receiving high voltages.
![Crane Pulley System](images/mars_rover/pulley_system.png)

## Final Remarks
Throughout this project, I learned a lot about how to design a component properly for easier construction and assembly. There were many unexpected problems that came up, which taught me how to deal with uncertainty and find innovative solutions quickly. Finally, I gained many technical skills in electrical design and mechanical assembly.

I started out with zero knowledge of how to build a robot and finished with a deeper appreciation of all the work that goes into robotics.