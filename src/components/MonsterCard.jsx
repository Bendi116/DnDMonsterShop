import { useEffect, useState, useMemo } from 'react';
import styles from './../styles/Shop.module.css';

export function MonsterCard({ monster,addToChart }) {
    //conatin json data from the API query
    const [data, setData] = useState(null);
    let price = 0
    if (data) price = calcMonsterPrice()

    //Get the json response
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/monsters/${monster}`, {
            mode: 'cors'
        })
            .then((response) => response.json())
            .then((response) => setData(response))
            .catch((err) => console.log(err));
    }, []);

    //send to the cart the added monster
    function handleAddToChart(){
      const sendData = {
        name:data["name"],
        url:'https://www.dnd5eapi.co' + data['image'],
        count: 1,
        price:price
      }
      addToChart(sendData)
    }

    //calc monster price
    function calcMonsterPrice (){
      return data["armor_class"][0]["value"] * data["hit_points"] * data["challenge_rating"]

    }

    return (
        <>
            {data !== null
                ? data['image'] && (
                      <div
                          className={`monsterCard ${data['index']} ${styles.monsterCard}`}
                      >
                          <img
                              src={'https://www.dnd5eapi.co' + data['image']}
                          />
                          <div className={styles.cardLabel}>
                            <button onClick={()=>handleAddToChart()} className={styles.addToChartButton}>Add to chart</button>
                            {data['name']}
                            
                            
                          </div>
                          <div className={styles.price}>
                              {price}$
                            </div>
                            
                      </div>
                  )
                : 'Loading...'}
        </>
    );
}

/*
 style={{width: data["armor_class"][0].value?`${data["armor_class"][0].value*2.4}rem`:"0px"}}*/
/*
        <div className={`monsterCard ${data["index"]}`} style={{width: `${data["armor_class"]/5}rem`}}>
            
        Name:{data["name"]}
        {data["image"] && <img src={data["image"]}/>}


        </div>
        */
/*
{
  "index": "wolf",
  "name": "Wolf",
  "size": "Medium",
  "type": "beast",
  "alignment": "unaligned",
  "armor_class": [
    {
      "type": "natural",
      "value": 13
    }
  ],
  "hit_points": 11,
  "hit_dice": "2d8",
  "hit_points_roll": "2d8+2",
  "speed": {
    "walk": "40 ft."
  },
  "strength": 12,
  "dexterity": 15,
  "constitution": 12,
  "intelligence": 3,
  "wisdom": 12,
  "charisma": 6,
  "proficiencies": [
    {
      "value": 3,
      "proficiency": {
        "index": "skill-perception",
        "name": "Skill: Perception",
        "url": "/api/proficiencies/skill-perception"
      }
    },
    {
      "value": 4,
      "proficiency": {
        "index": "skill-stealth",
        "name": "Skill: Stealth",
        "url": "/api/proficiencies/skill-stealth"
      }
    }
  ],
  "damage_vulnerabilities": [],
  "damage_resistances": [],
  "damage_immunities": [],
  "condition_immunities": [],
  "senses": {
    "passive_perception": 13
  },
  "languages": "",
  "challenge_rating": 0.25,
  "proficiency_bonus": 2,
  "xp": 50,
  "special_abilities": [
    {
      "name": "Keen Hearing and Smell",
      "desc": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
    },
    {
      "name": "Pack Tactics",
      "desc": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
    }
  ],
  "actions": [
    {
      "name": "Bite",
      "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
      "attack_bonus": 4,
      "damage": [
        {
          "damage_type": {
            "index": "piercing",
            "name": "Piercing",
            "url": "/api/damage-types/piercing"
          },
          "damage_dice": "2d4+2"
        }
      ],
      "actions": []
    }
  ],
  "image": "/api/images/monsters/wolf.png",
  "url": "/api/monsters/wolf",
  "updated_at": "2025-01-21T19:56:03.523Z",
  "legendary_actions": []
}
*/
