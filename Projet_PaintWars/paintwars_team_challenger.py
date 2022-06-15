# Projet "robotique" IA&Jeux 2021
#
# Binome:
#  Prénom Nom: MBOURANGA Winn-Elie
#  Prénom Nom: MILLARD Maxime

import random

def get_team_name():
    return "[ team with no name ]" # à compléter (comme vous voulez)


def comportement_tout_droit():
    return 1,0

def comportement_virage_gauche():
    return 1, -0.2

def comportement_random():
    translation = (random.randrange(-10, 10, 1))/10
    rotation = (random.randrange(-10, 10, 1))/10
    return translation, rotation

def comportement_loveBot(sensors):
    translation = 1 * sensors["sensor_front"]["distance_to_robot"]
    rotation = (1) * sensors["sensor_front_left"]["distance_to_robot"] + (-1) * sensors["sensor_front_right"]["distance_to_robot"]
    return translation, rotation

def comportement_avoider(sensors):
    translation = 1 * sensors["sensor_front"]["distance"]
    rotation = (-1) * sensors["sensor_front_left"]["distance"] + (1) * sensors["sensor_front_right"]["distance"] + 0.1 * sensors["sensor_front"]["distance"]
    return translation, rotation

def comportement_loveWall(sensors):
    translation = 1 * sensors["sensor_front"]["distance_to_wall"]
    rotation = (-0.5) * sensors["sensor_front_left"]["distance_to_wall"] + (0.40) * sensors["sensor_front_right"]["distance_to_wall"]
    return translation, rotation

def get_extended_sensors(sensors):
    for key in sensors:
        sensors[key]["distance_to_robot"] = 1.0
        sensors[key]["distance_to_wall"] = 1.0
        if sensors[key]["isRobot"] == True:
            sensors[key]["distance_to_robot"] = sensors[key]["distance"]
        else:
            sensors[key]["distance_to_wall"] = sensors[key]["distance"]
    return sensors

def step(robotId, sensors):

    sensors = get_extended_sensors(sensors)
    
    if sensors["sensor_front"]["distance"] == 1.0 and sensors["sensor_front_left"]["distance"] == 1.0 and sensors["sensor_front_right"]["distance"] == 1.0 and sensors["sensor_back"]["distance"] == 1.0 and sensors["sensor_back_left"]["distance"] == 1.0 and sensors["sensor_back_right"]["distance"] == 1.0 and sensors["sensor_left"]["distance"] == 1.0 and sensors["sensor_right"]["distance"] == 1.0:
        if robotId == 0:
            res = comportement_virage_gauche()
        else:
            res = comportement_tout_droit()
    else:
        if robotId < 1:
            res  = comportement_loveWall(sensors)
        elif (robotId % 2) == 1:
            if random.randint(1,10) == 1:
                res = comportement_random()
            else:
                res = comportement_avoider(sensors)
        else :        
            if (sensors["sensor_front"]["isRobot"] == True and sensors["sensor_front"]["isSameTeam"] == False) or (sensors["sensor_front_left"]["isRobot"] == True and sensors["sensor_front_left"]["isSameTeam"] == False) or (sensors["sensor_front_right"]["isRobot"] == True and sensors["sensor_front_right"]["isSameTeam"] == False) or (sensors["sensor_back"]["isRobot"] == True and sensors["sensor_back"]["isSameTeam"] == False) or (sensors["sensor_back_left"]["isRobot"] == True and sensors["sensor_back_left"]["isSameTeam"] == False) or (sensors["sensor_back_right"]["isRobot"] == True and sensors["sensor_back_right"]["isSameTeam"] == False) or (sensors["sensor_right"]["isRobot"] == True and sensors["sensor_right"]["isSameTeam"] == False) or (sensors["sensor_left"]["isRobot"] == True and sensors["sensor_left"]["isSameTeam"] == False) : 
                res = comportement_loveBot(sensors)
            else:
                res = comportement_avoider(sensors)
    translation = res[0]
    rotation = res[1]

    return translation, rotation

