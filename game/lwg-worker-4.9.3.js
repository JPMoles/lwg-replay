(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        function assert(bool) {
          if (!bool) {
            throw `Assertion failed\n${Error().stack}`;
          }
        }
        var emotes =
          /*emotesstart*/
          [
            {
              name: "Kappa",
              img: "kappa.png",
              free: true,
              text: "Kappa",
              type: "emotes",
            },

            {
              name: "Apple",
              img: "apple.png",
              free: true,
              text: "Apple",
              type: "emotes",
            },

            {
              name: "GG",
              img: "gg.png",
              free: true,
              text: "GG",
              type: "emotes",
            },

            {
              name: "Nr. 1",
              img: "nr1.png",
              playerLvl: 2,
              text: "#1",
              type: "emotes",
              dbPos: 1,
              artNr: "e0001",
            },

            {
              name: "OP",
              img: "op.png",
              playerLvl: 6,
              text: "OP",
              type: "emotes",
              dbPos: 2,
              artNr: "e0002",
            },

            {
              name: "Jbs pls fix",
              img: "jbsplsfix.png",
              price: 0.79,
              text: "JbsPlsFix",
              type: "emotes",
              dbPos: 3,
              artNr: "e0003",
            },

            {
              name: "Doge",
              img: "doge.png",
              gold: 800,
              text: "Doge",
              type: "emotes",
              dbPos: 4,
              artNr: "e0004",
            },

            {
              name: "Nyan Cat",
              img: "nyancat.png",
              gold: 800,
              text: "Nyancat",
              type: "emotes",
              dbPos: 5,
              artNr: "e0005",
            },

            {
              name: "WTF?",
              img: "wtf.png",
              gold: 1000,
              text: "WTF",
              type: "emotes",
              dbPos: 6,
              artNr: "e0006",
            },

            {
              name: "You Dont Say",
              img: "youdontsay.png",
              price: 0.79,
              text: "YouDontSay",
              type: "emotes",
              dbPos: 8,
              artNr: "e0008",
            },

            {
              name: "Fuuuuuuu",
              img: "fuu.png",
              gold: 1500,
              text: "FU",
              type: "emotes",
              dbPos: 9,
              artNr: "e0009",
            },

            {
              name: "Pie",
              img: "pie.png",
              free: true,
              text: "pielons",
              type: "emotes",
            },

            {
              name: "Soldier",
              img: "soldier.png",
              free: true,
              text: "Soldier",
              type: "emotes",
            },

            {
              name: "Skeleton",
              img: "skeleton.png",
              playerLvl: 9,
              text: "Skeleton",
              type: "emotes",
              dbPos: 10,
              artNr: "e0010",
            },

            {
              name: "Priest",
              img: "priest.gif",
              price: 0.79,
              text: "Priest",
              type: "emotes",
              dbPos: 11,
              artNr: "e0011",
            },

            {
              name: "Wolf",
              img: "wolf.png",
              free: true,
              text: "Wolf",
              type: "emotes",
            },

            {
              name: "ItanoCircus",
              img: "itano.png",
              text: "ItanoCircus",
              dbPos: 12,
              price: 0.79,
              artNr: "e0012",
              type: "emotes",
            },

            {
              name: "Dirty Itano Money",
              img: "dirtyitanomoney.png",
              text: "DirtyItanoMoney",
              price: 1.09,
              type: "emotes",
              dbPos: 13,
              artNr: "e0013",
            },

            {
              name: "Worker",
              img: "worker.gif",
              text: "Worker",
              playerLvl: 13,
              artNr: "e0014",
              type: "emotes",
              dbPos: 14,
            },

            {
              name: "Ballista",
              img: "ballista.png",
              text: "Ballista",
              gold: 1500,
              artNr: "e0015",
              type: "emotes",
              dbPos: 15,
            },

            {
              name: "Archer",
              img: "archer.gif",
              text: "Archer",
              gold: 1000,
              artNr: "e0016",
              type: "emotes",
              dbPos: 16,
            },

            {
              name: "Rifleman",
              img: "rifleman.gif",
              text: "Rifleman",
              gold: 1500,
              artNr: "e0017",
              type: "emotes",
              dbPos: 17,
            },

            {
              name: "Catapult",
              img: "catapult.png",
              text: "Catapult",
              price: 0.79,
              artNr: "e0018",
              type: "emotes",
              dbPos: 18,
            },

            {
              name: "Mage",
              img: "mage.gif",
              text: "Mage",
              price: 0.89,
              artNr: "e0019",
              type: "emotes",
              dbPos: 19,
            },

            {
              name: "Airship",
              img: "airship.gif",
              text: "Airship",
              playerLvl: 17,
              artNr: "e0020",
              type: "emotes",
              dbPos: 20,
            },

            {
              name: "Dragon",
              img: "dragon.gif",
              text: "Dragon",
              playerLvl: 20,
              artNr: "e0021",
              type: "emotes",
              dbPos: 21,
            },

            {
              name: "Werewolf",
              img: "werewolf.gif",
              text: "Werewolf",
              gold: 2000,
              artNr: "e0022",
              type: "emotes",
              dbPos: 22,
            },

            {
              name: "5th Division",
              img: "div5.png",
              text: "Div5",
              div: 1,
              type: "emotes",
              dbPos: 23,
              artNr: "e0023",
            },

            {
              name: "4th Division",
              img: "div4.png",
              text: "Div4",
              div: 2,
              type: "emotes",
              dbPos: 24,
              artNr: "e0024",
            },

            {
              name: "3rd Division",
              img: "div3.png",
              text: "Div3",
              div: 3,
              type: "emotes",
              dbPos: 25,
              artNr: "e0025",
            },

            {
              name: "2nd Division",
              img: "div2.png",
              text: "Div2",
              div: 4,
              type: "emotes",
              dbPos: 26,
              artNr: "e0026",
            },

            {
              name: "1st Division",
              img: "div1.png",
              text: "Div1",
              div: 5,
              type: "emotes",
              dbPos: 27,
              artNr: "e0027",
            },

            {
              name: "Gamma Division",
              img: "divgamma.png",
              text: "DivGamma",
              div: 6,
              type: "emotes",
              dbPos: 30,
              artNr: "e0030",
            },

            {
              name: "Beta Division",
              img: "divbeta.png",
              text: "DivBeta",
              div: 7,
              type: "emotes",
              dbPos: 29,
              artNr: "e0029",
            },

            {
              name: "Alpha Division",
              img: "divalpha.png",
              text: "DivAlpha",
              div: 8,
              type: "emotes",
              dbPos: 28,
              artNr: "e0028",
            },

            {
              name: "O RLY ?",
              img: "orly.jpg",
              text: "Orly",
              price: 0.79,
              type: "emotes",
              dbPos: 31,
              artNr: "e0031",
            },

            {
              name: "#REKT",
              img: "rekt.png",
              text: "#REKT",
              price: 0.79,
              type: "emotes",
              dbPos: 32,
              artNr: "e0032",
            },

            {
              name: "Star",
              img: "premium.png",
              text: "Star",
              type: "emotes",
              special: "requires_premium",
              requirementText: "Requires premium account",
              requirementTitle: "Get a premium account to unlock this emote",
              dbPos: 33,
              artNr: "e0033",
            },

            {
              name: "Not Bad",
              img: "not-bad.png",
              text: "notbad",
              playerLvl: 8,
              type: "emotes",
              dbPos: 34,
              artNr: "e0034",
            },

            {
              name: "XZibit",
              img: "xzibit.png",
              text: "xzibit",
              gold: 800,
              type: "emotes",
              dbPos: 35,
              artNr: "e0035",
            },

            {
              name: "Castle",
              img: "castle.png",
              text: "Castle",
              gold: 1500,
              type: "emotes",
              dbPos: 36,
              artNr: "e0036",
            },

            {
              name: "Barracks",
              img: "rax.png",
              text: "Barracks",
              gold: 1100,
              type: "emotes",
              dbPos: 37,
              artNr: "e0037",
            },

            {
              name: "Tower",
              img: "tower.png",
              text: "Tower",
              gold: 1000,
              type: "emotes",
              dbPos: 38,
              artNr: "e0038",
            },

            {
              name: "House",
              img: "house.png",
              text: "House",
              gold: 900,
              type: "emotes",
              dbPos: 39,
              artNr: "e0039",
            },

            {
              name: "Goldmine",
              img: "mine.png",
              text: "Goldmine",
              gold: 1100,
              type: "emotes",
              dbPos: 40,
              artNr: "e0040",
            },

            {
              name: "Magesguild",
              img: "guild.png",
              text: "Guild",
              gold: 1400,
              type: "emotes",
              dbPos: 41,
              artNr: "e0041",
            },

            {
              name: "Workshop",
              img: "workshop.png",
              text: "Workshop",
              gold: 1400,
              type: "emotes",
              dbPos: 42,
              artNr: "e0042",
            },

            {
              name: "Forge",
              img: "forge.png",
              text: "Forge",
              gold: 1200,
              type: "emotes",
              dbPos: 43,
              artNr: "e0043",
            },

            {
              name: "Fortress",
              img: "fort.png",
              text: "Fortress",
              gold: 1600,
              type: "emotes",
              dbPos: 44,
              artNr: "e0044",
            },

            {
              name: "Dragonslair",
              img: "dragonslair.png",
              text: "Lair",
              gold: 1400,
              type: "emotes",
              dbPos: 45,
              artNr: "e0045",
            },

            {
              name: "Wolvesden",
              img: "wolfden.png",
              text: "Wolvesden",
              gold: 1100,
              type: "emotes",
              dbPos: 46,
              artNr: "e0046",
            },

            {
              name: "Animal Testing Lab",
              img: "lab.png",
              text: "Animaltestinglab",
              gold: 1200,
              type: "emotes",
              dbPos: 47,
              artNr: "e0047",
            },

            {
              name: "Advanced Workshop",
              img: "adv-workshop.png",
              text: "Advancedworkshop",
              gold: 1400,
              type: "emotes",
              dbPos: 48,
              artNr: "e0048",
            },

            {
              name: "Werewolves Den",
              img: "wwden.png",
              text: "Werewolvesden",
              gold: 1800,
              type: "emotes",
              dbPos: 49,
              artNr: "e0049",
            },

            {
              name: "Church",
              img: "church.png",
              text: "Church",
              gold: 1400,
              type: "emotes",
              dbPos: 50,
              artNr: "e0050",
            },

            {
              name: "Basketball",
              img: "basketball.png",
              gold: 1500,
              text: "Basketball",
              type: "emotes",
              dbPos: 51,
              artNr: "e0051",
            },

            {
              name: "Frog",
              img: "frog.png",
              playerLvl: 26,
              text: "Frog",
              type: "emotes",
              dbPos: 52,
              artNr: "e0052",
            },

            {
              name: "Machinegun",
              img: "machinegun.png",
              special: "requires_premium",
              requirementText: "Requires premium account",
              requirementTitle: "Get a premium account to unlock this emote",
              text: "Machinegun",
              type: "emotes",
              dbPos: 53,
              artNr: "e0053",
            },

            {
              name: "Cookie",
              img: "cookie.png",
              special: "requires_premium",
              requirementText: "Requires premium account",
              requirementTitle: "Get a premium account to unlock this emote",
              text: "Cookie",
              type: "emotes",
              dbPos: 54,
              artNr: "e0054",
            },

            {
              name: "Gatling Gun",
              img: "gatlinggun.gif",
              gold: 1000,
              text: "Gatlinggun",
              type: "emotes",
              dbPos: 55,
              artNr: "e0055",
            },

            {
              name: "Snake",
              img: "snake.gif",
              gold: 1000,
              text: "Snake",
              type: "emotes",
              dbPos: 56,
              artNr: "e0056",
            },

            {
              name: "Raider",
              img: "raider.gif",
              gold: 1000,
              text: "Raider",
              type: "emotes",
              dbPos: 57,
              artNr: "e0057",
            },

            {
              name: "Gyrocraft",
              img: "gyro.gif",
              gold: 1000,
              text: "Gyrocraft",
              type: "emotes",
              dbPos: 58,
              artNr: "e0058",
            },

            // {
            // 	"name": "pumpkin",
            // 	"img": "pumpkin.png",
            // 	"free": true,
            // 	"text": "pumpkin",
            // 	"type": "emotes"
            // },

            // {
            // 	"name": "spookyhead",
            // 	"img": "pumpkin_soldier.png",
            // 	"free": true,
            // 	"text": "spookyhead",
            // 	"type": "emotes"
            // },

            // {
            // 	"name": "skeleton",
            // 	"img": "skeleton.png",
            // 	"free": true,
            // 	"text": "skeleton",
            // 	"type": "emotes"
            // }
          ]; /*emotesend*/

        var skins =
          /*skinsstart*/
          [
            {
              name: "Redhead Worker",
              img: "workerS1",
              unit_id_string: "worker",
              dbPos: 1,
              gold: 2000,
              artNr: "s0001",
              type: "skins",
            },

            {
              name: "Blonde Worker",
              img: "workerS2",
              unit_id_string: "worker",
              dbPos: 2,
              gold: 2000,
              artNr: "s0002",
              type: "skins",
            },

            {
              name: "Soldier 2",
              img: "soldierS1",
              unit_id_string: "soldier",
              dbPos: 3,
              price: 1.39,
              artNr: "s0003",
              type: "skins",
            },

            {
              name: "Viking Archer",
              img: "archerS1",
              unit_id_string: "archer",
              dbPos: 4,
              playerLvl: 14,
              artNr: "s0004",
              type: "skins",
            },

            {
              name: "Soldier 3",
              img: "soldierS2",
              unit_id_string: "soldier",
              dbPos: 5,
              price: 1.39,
              artNr: "s0005",
              type: "skins",
            },

            {
              name: "British Mage",
              img: "mageS1",
              unit_id_string: "mage",
              dbPos: 6,
              price: 1.19,
              artNr: "s0006",
              type: "skins",
            },

            {
              name: "Christmas Worker",
              img: "worker_christmas",
              unit_id_string: "worker",
              // "dbPos": 7,
              free: true,
              artNr: "s0007",
              type: "skins",
            },
          ]; /*skinsend*/

        var dances =
          /*dancesstart*/
          [
            {
              name: "Worker 01",
              unit_id_string: "worker",
              dbPos: 1,
              artNr: "d0001",
              animName: "dance1",
              price: 0.99,
              type: "dances",
              chat_str: "/dance",
              img: "worker",
            },

            {
              name: "Soldier 01",
              unit_id_string: "soldier",
              dbPos: 2,
              gold: 1500,
              artNr: "d0002",
              animName: "dance1",
              type: "dances",
              chat_str: "/dance",
              img: "soldier",
            },

            {
              name: "Soldier 02",
              unit_id_string: "soldier",
              dbPos: 3,
              price: 0.99,
              artNr: "d0003",
              animName: "dance2",
              type: "dances",
              chat_str: "/dance2",
              img: "soldier",
            },
          ]; /*dancesend*/

        var achivements =
          /*achivementsstart*/
          [
            {
              name: "The First Step",
              a_type: "ladderwins",
              type: "achivements",
              text: "Win 1 ladder game",
              count: 1,
              dbPos: 1,
              reward: 10,
              img: "ladderwins1.png",
            },

            {
              name: "Ranked Up!",
              a_type: "ladderwins",
              type: "achivements",
              text: "Win 5 ladder games",
              count: 5,
              dbPos: 2,
              reward: 20,
              img: "ladderwins5.png",
            },

            {
              name: "Ladder Hiker",
              a_type: "ladderwins",
              type: "achivements",
              text: "Win 10 ladder games",
              count: 10,
              dbPos: 3,
              reward: 35,
              img: "ladderwins10.png",
            },

            {
              name: "Matchmaking Battler",
              a_type: "ladderwins",
              type: "achivements",
              text: "Win 20 ladder games",
              count: 20,
              dbPos: 4,
              reward: 70,
              img: "ladderwins20.png",
            },

            {
              name: "The Steep Climb",
              a_type: "ladderwins",
              type: "achivements",
              text: "Win 50 ladder games",
              count: 50,
              dbPos: 5,
              reward: 150,
              img: "ladderwins50.png",
            },

            {
              name: "Contender",
              a_type: "ladderwins",
              type: "achivements",
              text: "Win 100 ladder games",
              count: 100,
              dbPos: 6,
              reward: 250,
              img: "ladderwins100.png",
            },

            {
              name: "Matchmaking Maestro",
              a_type: "ladderwins",
              type: "achivements",
              text: "Win 200 ladder games",
              count: 200,
              dbPos: 7,
              reward: 450,
              img: "ladderwins200.png",
            },

            {
              name: "Ladder Hero",
              a_type: "ladderwins",
              type: "achivements",
              text: "Win 500 ladder games",
              count: 500,
              dbPos: 8,
              reward: 1000,
              img: "ladderwins500.png",
            },

            {
              name: "Chief Of Ladder",
              a_type: "ladderwins",
              type: "achivements",
              text: "Win 1000 ladder games",
              count: 1000,
              dbPos: 9,
              reward: 1700,
              img: "ladderwins1000.png",
            },

            {
              name: "Ladder King",
              a_type: "ladderwins",
              type: "achivements",
              text: "Win 2000 ladder games",
              count: 2000,
              dbPos: 10,
              reward: 3000,
              img: "ladderwins2000.png",
            },

            {
              name: "Ladder Boss",
              a_type: "ladderwins",
              type: "achivements",
              text: "Win 5000 ladder games",
              count: 5000,
              dbPos: 11,
              reward: 5000,
              img: "ladderwins5000.png",
            },

            {
              name: "Ladder God",
              a_type: "ladderwins",
              type: "achivements",
              text: "Win 10000 ladder games",
              count: 10000,
              dbPos: 12,
              reward: 10000,
              img: "ladderwins10000.png",
            },

            // laddergames

            {
              name: "Ladder Player",
              a_type: "laddergames",
              type: "achivements",
              text: "Play 5 ladder games",
              count: 5,
              dbPos: 13,
              reward: 25,
              img: "laddergames5.png",
            },

            {
              name: "Ladder Rookie",
              a_type: "laddergames",
              type: "achivements",
              text: "Play 10 ladder games",
              count: 10,
              dbPos: 14,
              reward: 40,
              img: "laddergames10.png",
            },

            {
              name: "Better Ladder Player",
              a_type: "laddergames",
              type: "achivements",
              text: "Play 20 ladder games",
              count: 20,
              dbPos: 15,
              reward: 70,
              img: "laddergames20.png",
            },

            {
              name: "Experienced Matchmaker",
              a_type: "laddergames",
              type: "achivements",
              text: "Play 50 ladder games",
              count: 50,
              dbPos: 16,
              reward: 150,
              img: "laddergames50.png",
            },

            {
              name: "Ladder Champ",
              a_type: "laddergames",
              type: "achivements",
              text: "Play 100 ladder games",
              count: 100,
              dbPos: 17,
              reward: 250,
              img: "laddergames100.png",
            },

            {
              name: "Durable Fighter",
              a_type: "laddergames",
              type: "achivements",
              text: "Play 200 ladder games",
              count: 200,
              dbPos: 18,
              reward: 450,
              img: "laddergames200.png",
            },

            {
              name: "Competitive Spirit",
              a_type: "laddergames",
              type: "achivements",
              text: "Play 500 ladder games",
              count: 500,
              dbPos: 19,
              reward: 1000,
              img: "laddergames500.png",
            },

            {
              name: "One Grand",
              a_type: "laddergames",
              type: "achivements",
              text: "Play 1000 ladder games",
              count: 1000,
              dbPos: 20,
              reward: 1750,
              img: "laddergames1000.png",
            },

            {
              name: "Unstoppable",
              a_type: "laddergames",
              type: "achivements",
              text: "Play 2000 ladder games",
              count: 2000,
              dbPos: 21,
              reward: 3000,
              img: "laddergames2000.png",
            },

            {
              name: "Matchmaking Specialist",
              a_type: "laddergames",
              type: "achivements",
              text: "Play 5000 ladder games",
              count: 5000,
              dbPos: 22,
              reward: 5000,
              img: "laddergames5000.png",
            },

            {
              name: "Ladder Warrior",
              a_type: "laddergames",
              type: "achivements",
              text: "Play 10000 ladder games",
              count: 10000,
              dbPos: 23,
              reward: 10000,
              img: "laddergames10000.png",
            },

            // games

            {
              name: "Beginner",
              a_type: "games",
              type: "achivements",
              text: "Play 5 multiplayer games",
              count: 5,
              dbPos: 24,
              reward: 25,
              img: "games5.png",
            },

            {
              name: "One Step Further",
              a_type: "games",
              type: "achivements",
              text: "Play 10 multiplayer games",
              count: 10,
              dbPos: 25,
              reward: 40,
              img: "games10.png",
            },

            {
              name: "Fighter",
              a_type: "games",
              type: "achivements",
              text: "Play 20 multiplayer games",
              count: 20,
              dbPos: 26,
              reward: 70,
              img: "games20.png",
            },

            {
              name: "Soldier",
              a_type: "games",
              type: "achivements",
              text: "Play 50 multiplayer games",
              count: 50,
              dbPos: 27,
              reward: 150,
              img: "games50.png",
            },

            {
              name: "Experienced Player",
              a_type: "games",
              type: "achivements",
              text: "Play 100 multiplayer games",
              count: 100,
              dbPos: 28,
              reward: 250,
              img: "games100.png",
            },

            {
              name: "Littlewargame Expert",
              a_type: "games",
              type: "achivements",
              text: "Play 200 multiplayer games",
              count: 200,
              dbPos: 29,
              reward: 450,
              img: "games200.png",
            },

            {
              name: "Littlewargame Specialist",
              a_type: "games",
              type: "achivements",
              text: "Play 500 multiplayer games",
              count: 500,
              dbPos: 30,
              reward: 1000,
              img: "games500.png",
            },

            {
              name: "Master Of Littlewargame",
              a_type: "games",
              type: "achivements",
              text: "Play 1000 multiplayer games",
              count: 1000,
              dbPos: 31,
              reward: 1750,
              img: "games1000.png",
            },

            {
              name: "Living Legend",
              a_type: "games",
              type: "achivements",
              text: "Play 2000 multiplayer games",
              count: 2000,
              dbPos: 32,
              reward: 3000,
              img: "games2000.png",
            },

            {
              name: "Based God",
              a_type: "games",
              type: "achivements",
              text: "Play 5000 multiplayer games",
              count: 5000,
              dbPos: 33,
              reward: 5000,
              img: "games5000.png",
            },

            {
              name: "It's Over 9000!!!",
              a_type: "games",
              type: "achivements",
              text: "Play over 9000 multiplayer games",
              count: 9001,
              dbPos: 34,
              reward: 10000,
              img: "games9001.png",
            },

            {
              name: "Holiday Spirit",
              a_type: "games",
              type: "achivements",
              text: "Play a game during the christmas event",
              expires: 1580564544072, // New year's day
              count: 1,
              dbPos: 35,
              img: "christmas.png",
            },
          ]; /*achivementsend*/

        var goldPacks =
          /*goldstart*/
          [
            {
              name: "Gold Pack 1000",
              artNr: "g0001",
              type: "gold",
              price: 0.99,
              reward: 1000,
            },

            {
              name: "Gold Pack 2000",
              artNr: "g0002",
              type: "gold",
              price: 1.89,
              reward: 2000,
            },

            {
              name: "Gold Pack 5000",
              artNr: "g0003",
              type: "gold",
              price: 3.99,
              reward: 5000,
            },

            {
              name: "Gold Pack 10000",
              artNr: "g0004",
              type: "gold",
              price: 7.49,
              reward: 10000,
            },
          ]; /*goldend*/

        var specials =
          /*specialsstart*/
          [
            {
              name: "Premium Account",
              artNr: "x0001",
              type: "special",
              type_2: "premium",
              dbPos: 1,
              gold: 3500,
              img: "premium.png",
            },

            {
              name: "Treasure Chest",
              artNr: "x0002",
              type: "special",
              type_2: "treasure",
              dbPos: 2,
              gold: 1000,
              img: "chest.png",
            },
          ]; /*specialsend*/

        if (typeof exports !== "undefined") {
          exports.emotes = emotes;
          exports.skins = skins;
          exports.dances = dances;
          exports.achivements = achivements;
          exports.goldPacks = goldPacks;
          exports.specials = specials;
        }

        var browserWindow;
        try {
          browserWindow = window;
        } catch (e) {} // In worker thread before window load
        var KEY = Object.freeze({
          UP: 38,
          DOWN: 40,
          LEFT: 37,
          RIGHT: 39,
          A: 65,
          B: 66,
          C: 67,
          D: 68,
          E: 69,
          F: 70,
          G: 71,
          H: 72,
          I: 73,
          J: 74,
          K: 75,
          L: 76,
          M: 77,
          N: 78,
          O: 79,
          P: 80,
          Q: 81,
          R: 82,
          S: 83,
          T: 84,
          U: 85,
          V: 86,
          W: 87,
          X: 88,
          Y: 89,
          Z: 90,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          NUM1: 49,
          NUM2: 50,
          NUM3: 51,
          NUM4: 52,
          NUM5: 53,
          NUM6: 54,
          NUM7: 55,
          NUM8: 56,
          NUM9: 57,
          NUM0: 48,
          CIRCUMFLEX: browserWindow && browserWindow.chrome ? 220 : 160,
          ENTER: 13,
          BACKSPACE: 8,
          DELETE: 46,
          PAUSE: 19,
          F1: 112,
          F2: 113,
          F3: 114,
          F4: 115,
          F5: 116,
          F6: 117,
          F7: 118,
          F8: 119,
          F9: 120,
          F10: 121,
          ESC: 27,
          TAB: 9,
          PLUS: 107,
          MINUS: 109,
          SPACE: 32,
          CAPSLOCK: 20,
          BACKTICK: 192,
        });

        const Cursors = Object.freeze({
          DEFAULT: 0,
          BLANK: 1,
          HEAL: 2,
          ATTACK: 3,
        });

        const CursorFiles = Object.freeze({
          [Cursors.DEFAULT]: "imgs/cursor.cur",
          [Cursors.BLANK]: "imgs/blank-pixel.cur",
          [Cursors.HEAL]: "imgs/cursor-heal.cur",
          [Cursors.ATTACK]: "imgs/cursor-attack.cur",
        });

        var lists = {
          types: {},
          imgs: {},
          upgrades: { none: null },
          unitTypes: { none: null },
          buildingTypes: { none: null },
          buildingsUpgrades: {},
          modifiers: {},
          commands: {},
        };

        var game = null;
        var message = "";
        var goldmineUpdate = {};
        var changeFog = "";
        var networkPlayerName = "";
        var game_paused = false;
        var incomingOrders = {};
        var playerLefts = {};
        var ticksCounter = 0;
        var network_game = false;
        var game_state = null;
        var customAIFunctions = [];
        var PLAYING_PLAYER = null;
        var fieldOfLastTilePlacement = null;
        var aiRndInc = 0;

        var IS_LOGIC = true;
        var DEBUG_MODE = true;
        // $( document ).ready(function() {
        // 	var urlParams = new URLSearchParams(window.location.search);
        // 	DEBUG_MODE = urlParams.has("debug") && urlParams.get("debug") == "true";
        // });

        // TODO: Move to Utils
        function log(str) {
          if (DEBUG_MODE) {
            console.log(str);
          }
        }
        // TODO: Remove duplication
        TileType.prototype = new MapObjectType();
        function TileType(data) {
          this.repairRate = 0;

          _.extend(this, data);

          this.isTile = true;
        }
        // class TileType extends MapObjectType
        // {
        // 	constructor(data)
        // 	{
        // 		super(data)
        // 		this.isTile = true;
        // 		this.repairRate = 0;
        // 	}
        // }
        var CLIFF_HEIGHT = 1.5;
        var MIN_MAP_SIZE = 24;
        var MAX_MAP_SIZE = 256;
        var MAX_CLIFF_LEVEL = 2;
        var MAX_PLAYERS = 6;
        var BUILDING_QUEUE_LEN = 5;
        var BUILDING_START_HP_PERCENTAGE = 0.2;
        var MAX_SUPPLY = 150;
        var MINE_DIST = 7;
        var START_GOLD = 50;
        var TICK_TIME = 50;

        var customImgs = {};
        var possibleAngleCounts = { None: 0, 1: 1, 4: 4, 8: 8 };

        function toInt(i) {
          var i2 = parseInt(i);
          return isNaN(i2) ? 0 : i2;
        }

        function checkField(field, val, unscaled) {
          if (field.type == "selection") return val;

          if (field.type == "bool") {
            if (val) return true;
            return false;
          }

          if (field.type == "integer") {
            val = parseInt(val);

            if (isNaN(val)) val = 0;

            if (val > field.max_val) val = field.max_val;
            else if (val < field.min_val) val = field.min_val;

            return val;
          }

          if (field.type == "float") {
            val = parseFloat(val);

            if (isNaN(val)) val = 0;

            var max_val = field.max_val;
            var min_val = field.min_val;

            if (unscaled && field.displayScale) {
              max_val /= field.displayScale;
              min_val /= field.displayScale;
            }

            if (val > max_val) val = max_val;
            else if (val < min_val) val = min_val;

            return val;
          }

          if (field.type == "string") {
            if (!val) val = "";

            if (val.length > field.max_len) val = val.slice(0, field.max_len);
            else if (val.length < field.min_len)
              for (var i = 0; i < field.min_len - val.length; i++) val += "_";

            return val;
          }
        }

        function getRampTypeFromCode(code) {
          var ramps = game.theme && game.theme.ramps ? game.theme.ramps : ramps;

          for (var i = 0; i < ramps.length; i++) if (ramps[i].code == code) return ramps[i];

          return ramps[0];
        }

        function getThemeByName(name) {
          for (var i = 0; i < mapThemes.length; i++)
            if (mapThemes[i].name == name) return mapThemes[i];
        }

        // TODO: move all data structure extensions / definitions elsewhere
        Array.prototype.contains = function (value) {
          for (var i = 0; i < this.length; i++) if (this[i] == value) return true;
          return false;
        };

        Array.prototype.erease = function (element) {
          for (var i = 0; i < this.length; i++)
            if (this[i] == element) {
              this.splice(i, 1);
              return true;
            }
          return false;
        };

        Array.prototype.remove = function (predicate) {
          for (let i = 0; i < this.length; i++) {
            if (predicate(this[i])) {
              this.splice(i, 1);
              return true;
            }
          }
          return false;
        };

        Array.prototype.last = function () {
          if (this.length == 0) return undefined;
          return this[this.length - 1];
        };

        Array.prototype.count = function (predicate) {
          let n = 0;
          for (let i = 0; i < this.length; i++) {
            if (predicate(this[i], i)) n++;
          }
          return n;
        };

        const tryGet = function (obj, key, defaultValue = undefined) {
          if (!(key in obj) && defaultValue) obj[key] = defaultValue;
          return obj[key];
        };

        String.prototype.toUnitType = function () {
          var types_ = game
            ? game.unitTypes.concat(
                game.buildingTypes,
                tileTypes,
                cliffs,
                cliffs_winter,
                egypt_cliffs,
                grave_cliffs,
                ramp_tiles,
                ramp_tiles_egypt,
                ramp_tiles_grave,
                game.upgrades
              )
            : basicUnitTypes.concat(
                basicBuildingTypes,
                tileTypes,
                cliffs,
                cliffs_winter,
                ramp_tiles,
                basicUpgrades
              );

          for (var i = 0; i < types_.length; i++) if (this == types_[i].name) return types_[i];

          return null;
        };

        function Multiset(arr) {
          this.data = {};
          if (arr) {
            arr.forEach((i) => this.add(i));
          }
        }

        Multiset.prototype.count = function (i) {
          return this.data[i] || 0;
        };

        Multiset.prototype.add = function (i) {
          this.data[i] = this.count(i) + 1;
        };

        Multiset.prototype.forEach = function (callback) {
          for (let i in this.data) {
            callback(i);
          }
        };

        var COMMAND = Object.freeze({
          MAKEUNIT: 1,
          UNIVERSAL: 2,
          MAKEBUILDING: 3,
          IDLE: 7,
          HOLDPOSITION: 8,
          ATTACK: 9,
          CANCEL: 10,
          MOVE: 11,
          MOVETO: 12,
          MINE: 13,
          REPAIR: 14,
          AMOVE: 15,
          SWITCH_CC: 22,
          UPGRADE: 23,
          BUILDING_UPGRADE: 25,
          LOAD: 26,
          UNLOAD: 27,
          UNLOAD2: 28,
          ATTACK_GROUND: 29,
          TELEPORT: 30,
          DAMAGING_PROJECTILE: 31,
          DANCE: 32,
        });

        var EDITOR_COMMANDS = Object.freeze({
          MAKEUNIT: 1,
          MAKEBUILDING: 3,
          IDLE: 7,
          HOLDPOSITION: 8,
          ATTACK: 9,
          CANCEL: 10,
          MOVE: 11,
          REPAIR: 14,
          UNIVERSAL: 2,
          SWITCH_CC: 22,
          UPGRADE: 23,
          BUILDING_UPGRADE: 25,
          ATTACK_GROUND: 29,
          TELEPORT: 30,
        });

        var ability_type_fields = {};

        ability_type_fields[COMMAND.MAKEUNIT] = [
          "name",
          "type",
          "unitType",
          "hotkey",
          "commandCard",
          "interfacePosX",
          "interfacePosY",
          "image",
          "description",
          "requirementType",
          "requirementLevel",
          "requirementText",
          "manaCost",
          "hasAutocast",
          "autocastDefault",
          "requiredLevels",
          "learnCommandCard",
          "learnInterfacePosX",
          "learnInterfacePosY",
          "learnHotkey",
        ];

        ability_type_fields[COMMAND.MAKEBUILDING] = [
          "name",
          "type",
          "unitType",
          "hotkey",
          "commandCard",
          "interfacePosX",
          "interfacePosY",
          "image",
          "description",
          "requirementType",
          "requirementLevel",
          "requirementText",
          "manaCost",
          "range",
          "requiredLevels",
          "learnCommandCard",
          "learnInterfacePosX",
          "learnInterfacePosY",
          "learnHotkey",
        ];

        ability_type_fields[COMMAND.IDLE] = [
          "name",
          "type",
          "hotkey",
          "commandCard",
          "interfacePosX",
          "interfacePosY",
          "image",
          "description",
          "requirementType",
          "requirementLevel",
          "requirementText",
          "manaCost",
        ];

        ability_type_fields[COMMAND.REPAIR] = [
          "name",
          "type",
          "hotkey",
          "commandCard",
          "interfacePosX",
          "interfacePosY",
          "image",
          "description",
          "targetRequirements1",
          "targetRequirements2",
          "targetRequirements3",
          "requirementType",
          "requirementLevel",
          "requirementText",
          "manaCost",
          "range",
          "hasAutocast",
          "autocastConditions",
          "cursor",
        ];

        ability_type_fields[COMMAND.HOLDPOSITION] = [
          "name",
          "type",
          "hotkey",
          "commandCard",
          "interfacePosX",
          "interfacePosY",
          "image",
          "description",
          "requirementType",
          "requirementLevel",
          "requirementText",
          "manaCost",
        ];

        ability_type_fields[COMMAND.ATTACK] = [
          "name",
          "type",
          "hotkey",
          "commandCard",
          "interfacePosX",
          "interfacePosY",
          "image",
          "description",
          "requirementType",
          "requirementLevel",
          "requirementText",
          "manaCost",
          "cursor",
        ];

        ability_type_fields[COMMAND.CANCEL] = [
          "name",
          "type",
          "hotkey",
          "commandCard",
          "interfacePosX",
          "interfacePosY",
          "image",
          "description",
          "requirementType",
          "requirementLevel",
          "requirementText",
        ];

        ability_type_fields[COMMAND.MOVE] = [
          "name",
          "type",
          "hotkey",
          "commandCard",
          "interfacePosX",
          "interfacePosY",
          "image",
          "description",
          "requirementType",
          "requirementLevel",
          "requirementText",
        ];

        ability_type_fields[COMMAND.TELEPORT] = [
          "name",
          "type",
          "hotkey",
          "commandCard",
          "interfacePosX",
          "interfacePosY",
          "image",
          "attackEffect",
          "description",
          "requirementType",
          "requirementLevel",
          "requirementText",
          "launchSound",
          "manaCost",
          "goldCost",
          "effectScale",
          "castingDelay",
          "cooldown",
          "cooldown2",
          "range",
          "minRange",
          "animationName",
          "requiresVision",
          "requiredLevels",
          "modifiersSelf",
          "learnInterfacePosX",
          "learnInterfacePosY",
          "learnCommandCard",
          "learnHotkey",
          "attackEffectInit",
          "cursor",
        ];

        ability_type_fields[COMMAND.UNIVERSAL] = [
          "name",
          "type",
          "hotkey",
          "targetIsPoint",
          "targetIsUnit",
          "isInstant",
          "isChanneled",
          "playLaunchSoundOnce",
          "useAoeCursor",
          "commandCard",
          "interfacePosX",
          "interfacePosY",
          "image",
          "attackEffect",
          "description",
          "requirementType",
          "requirementLevel",
          "requirementText",
          "targetRequirements1",
          "targetRequirements2",
          "targetRequirements3",
          "launchSound",
          "manaCost",
          "goldCost",
          "aoeRadius",
          "damage",
          "projectileDamage",
          "projectileAoeRadius",
          "maximizeRangeWhenCasting",
          "hitsFriendly",
          "hitsEnemy",
          "hitsSelf",
          "targetFilters",
          "targetFiltersExclude",
          "effectScale",
          "projectileSpeed",
          "duration",
          "castingDelay",
          "cooldown",
          "cooldown2",
          "range",
          "minRange",
          "bounceDistMin",
          "bounceDistMax",
          "bouncePower",
          "animationName",
          "causesFlameDeath",
          "modifiers",
          "summonedUnits",
          "summonsUseWaypoint",
          "summonsWaypointAMove",
          "ignoreSupplyCheck",
          "requiresVision",
          "requiredLevels",
          "modifiersSelf",
          "learnInterfacePosX",
          "learnInterfacePosY",
          "learnCommandCard",
          "learnHotkey",
          "hasAutocast",
          "autocastDefault",
          "autocastConditions",
          "attackEffectInit",
          "cursor",
        ];

        ability_type_fields[COMMAND.SWITCH_CC] = [
          "name",
          "type",
          "hotkey",
          "commandCard",
          "interfacePosX",
          "interfacePosY",
          "image",
          "description",
          "requirementType",
          "requirementLevel",
          "requirementText",
          "targetCC",
        ];

        ability_type_fields[COMMAND.UPGRADE] = [
          "name",
          "type",
          "hotkey",
          "commandCard",
          "interfacePosX",
          "interfacePosY",
          "image",
          "description",
          "requirementType",
          "requirementLevel",
          "requirementText",
          "upgrade",
          "manaCost",
          "hasAutocast",
          "autocastDefault",
        ];

        ability_type_fields[COMMAND.BUILDING_UPGRADE] = [
          "name",
          "type",
          "hotkey",
          "commandCard",
          "interfacePosX",
          "interfacePosY",
          "image",
          "description",
          "requirementType",
          "requirementLevel",
          "requirementText",
          "improvedBuilding",
          "manaCost",
        ];

        ability_type_fields[COMMAND.ATTACK_GROUND] = [
          "name",
          "type",
          "hotkey",
          "useAoeCursor",
          "commandCard",
          "interfacePosX",
          "interfacePosY",
          "image",
          "description",
          "requirementType",
          "requirementLevel",
          "requirementText",
          "manaCost",
          "cursor",
        ];

        var commandTypeDescriptions = {
          MAKEUNIT:
            "This command will produce / train a unit. Set a unit type to determine which unit will be produced.",
          MAKEBUILDING:
            "This command will construct a building. Set a unit type to determine which building will be constructed",
          UNIVERSAL:
            "This is a universal type that you want to pick for most spells (damagespells, heal, ...). It uses most of the fields like dmg, aoeRadius, range, ...",
          SWITCH_CC:
            "This command will switch the command menu. This is used for example to go to the submenu for making buildings. Set the targetCC field to determine which command menu to go.",
          UPGRADE: "This command will research an upgrade.",
          BUILDING_UPGRADE:
            "This command will upgrade this building / unit to another one set the improvedBuilding field to determine which building / unit it will be morphed into.",
          ATTACK_GROUND: "This command will order the unit to attack the target position.",
        };

        var graphic_type_fields = {};

        var BUILDING_STATE = Object.freeze({
          NORMAL: 1,
          UNDER_CONSTRUCTION: 2,
          BUSY: 3,
          BUSY_DAMAGED: 4,
          DAMAGED: 5,
          UPGRADING: 6,
          UPGRADING_DAMAGED: 7,
          EMPTY: 8,
          DEAD: 0,
        });

        var CONTROLLER = Object.freeze({
          HUMAN: 0,
          COMPUTER: 1,
          NONE: 2,
          REMOTE: 3,
          SPECTATOR: 4,
        });

        var SOUND = Object.freeze({
          NONE: 0,
          PAIN: 1,
          DEATH: 2,
          SWING: 3,
          PLACE: 4,
          POSITIVE: 5,
          NEGATIVE: 6,
          CLICK: 7,
          CLICK2: 8,
          GUN: 9,
          SWORD: 10,
          BUILD: 11,
          BUILDING_DEATH: 12,
          READY: 13,
          YES: 14,
          INGAMECLICK: 15,
          BUILDING_FINISHED: 16,
          UNDER_ATTACK: 17,
          VICTORY: 18,
          DEFEAT: 19,
          FLAMESTRIKE_LAUNCH: 20,
          FLAMESTRIKE_IMPACT: 21,
          MAGE_ATTACK: 22,
          MAGE_IMPACT: 23,
          CATA_HIT: 24,
          CATA_LAUNCH: 25,
          CATA_IMPACT: 26,
          BUILDING_PAIN: 27,
          REPAIR: 28,
          CATA_DEATH: 29,
          GAME_START: 30,
          HEAL: 31,
          BING: 32,
          SWITCH: 33,
          ZIP: 34,
          ZIP3: 35,
          SPELL: 36,
          DRAGON_YES: 37,
          DRAGON_SPAWN: 38,
          DRAGON_DEATH: 39,
          FALL: 40,
          DRAGON_FIRE: 41,
          MINE: 42,
          WOLF_YES: 43,
          WOLF_READY: 44,
          WOLF_DEATH: 45,
          WOLF_HIT: 46,
          WOLF_PAIN: 47,
          LADDER_START: 48,
          ROUNDHOUSE: 49,
          BIGHIT: 50,
          STRONG_HIT: 51,
          BEAST_DIE: 52,
          BEAST_YES: 53,
          BEAST_READY: 54,
          FLESH: 55,
          FLAK: 56,
          SHOCKWAVE: 57,
          FIREBALL: 58,
          SKELETON_SPAWN: 59,
          SKELETON_YES: 60,
          SKELETON_PAIN: 61,
          BING2: 62,
          ARCHIVEMENT: 63,
          ARCHIVEMENT2: 64,
          ARCHIVEMENT3: 65,
          AURA_HEAL: 66,
          PLASMA_SHIELD: 67,
          WARP: 68,
          BIRD_SPAWN: 69,
          BIRD_YES: 70,
          BIRD_DEATH: 71,
          BIRD_SLAM: 72,
          BATTLE_FANFARE: 73,
          A_WS: 74,
          CC: 75,
          CHURCH: 76,
          DRAGONS_LAIR: 77,
          FORGE: 78,
          HOUSE: 79,
          LAB: 80,
          MAGES_GUILD: 81,
          RAX: 82,
          WW_DEN: 83,
          W_DEN: 84,
          WORKSHOP: 85,
        });

        var checkAngles = [
          [1, 0],
          [3, 1],
          [1, 1],
          [1, 3],
          [0, 1],
          [-1, 3],
          [-1, 1],
          [-3, 1],
          [-1, 0],
          [-3, -1],
          [-1, -1],
          [-1, -3],
          [0, -1],
          [1, -3],
          [1, -1],
          [3, -1],
        ];
        var angleOffsets = [
          [0.5, 0.86],
          [0.86, 0.5],
          [1, 0],
          [0.86, -0.5],
          [0.5, -0.86],
          [0, -1],
          [-0.5, -0.86],
          [-0.86, -0.5],
          [-1, 0],
          [-0.86, 0.5],
          [-0.5, 0.86],
          [0, 1],
        ];

        var targetRequirements = {
          isHuman: {
            func: (target) => target.type.isHuman,
            text: "Target needs to be a human unit.",
            isTargetRequirement: true,
            funcName: "isHuman",
          },

          isBiological: {
            func: (target) => target.type.isBiological,
            text: "Target needs to be a biological unit.",
            isTargetRequirement: true,
            funcName: "isBiological",
          },

          isMechanical: {
            func: (target) => target.type.isMechanical,
            text: "Target needs to be a mechanical unit.",
            isTargetRequirement: true,
            funcName: "isMechanical",
          },

          isUndead: {
            func: (target) => target.type.isUndead,
            text: "Target needs to be an undead unit.",
            isTargetRequirement: true,
            funcName: "isUndead",
          },

          isBuilding: {
            func: (target) => target.type.isBuilding,
            text: "Target needs to be a building.",
            isTargetRequirement: true,
            funcName: "isBuilding",
          },

          isUnit: {
            func: (target) => target.type.isUnit,
            text: "Target needs to be a unit.",
            isTargetRequirement: true,
            funcName: "isUnit",
          },

          isFlying: {
            func: (target) => target.type.flying,
            text: "Target needs to be flying.",
            isTargetRequirement: true,
            funcName: "isFlying",
          },

          isGround: {
            func: (target) => !target.type.flying,
            text: "Target needs to be on the ground.",
            isTargetRequirement: true,
            funcName: "isGround",
          },

          notFullHp: {
            func: (target) => target.hp < target.type.hp,
            text: "Target has full life.",
            isTargetRequirement: true,
            funcName: "notFullHp",
          },
        };

        var targetFilters1 = {
          flying: "flying",
          isBiological: "isBiological",
          isMechanical: "isMechanical",
          isUndead: "isUndead",
          uniqueAndHeroic: "uniqueAndHeroic",
          isBeast: "isBeast",
          isHuman: "isHuman",
          isInvisible: "isInvisible",
        };

        var buildingData = [
          {
            name: "Castle",
            id_string: "castle",
            hp: 2250,
            supplyProvided: 10,
            size: 4,
            weaponCooldown: 1 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 1,
            range: 0,
            vision: 10,
            circleSize: 2.65,
            circleOffset: 0.625,
            commands: {
              trainworker: "trainworker",
              upgradetofortress: "upgradetofortress",
              trainbird: "trainbird",
              bird_detection_cmd: "bird_detection_cmd",
            },
            buildTime: 54 * 20,
            cost: 350,
            healthbarOffset: 3.25,
            healthbarWidth: 2.5,
            img: "castle",
            description:
              "The Castle is your main building. It can train Workers and is used to return gathered gold.",
            timeToMine: 2, // how many ticks workers stay to get / deliver gold
            projectileLen: 0.22,
            tabPriority: 10,
            takesGold: true,
            preventsReveal: true,
            goldPerDelivery: 0,
            clickSound: SOUND.CC,
            clickSoundVolume: 1,
            canHaveWaypoint: true,
          },
          {
            name: "Barracks",
            id_string: "barracks",
            hp: 1200,
            size: 3,
            weaponCooldown: 1 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 1,
            range: 0,
            vision: 8,
            circleSize: 2.4,
            circleOffset: 0.25,
            commands: {
              trainsoldier: "trainsoldier",
              trainarcher: "trainarcher",
              train_raider: "train_raider",
              trainmage: "trainmage",
            },
            buildTime: 40 * 20,
            cost: 125,
            healthbarOffset: 3.7,
            healthbarWidth: 2.0,
            img: "barracks",
            description: "The Barracks can train Soldiers, Archers, Mages and Raiders.",
            tabPriority: 7,
            preventsReveal: false,
            clickSound: SOUND.RAX,
            clickSoundVolume: 0.8,
            canHaveWaypoint: true,
          },
          {
            name: "Watchtower",
            id_string: "watchtower",
            hp: 550,
            size: 2,
            weaponCooldown: 1.6 * 20,
            weaponDelay: 0.3 * 20,
            dmg: 30,
            armor: 1,
            range: 7,
            vision: 12,
            projectileSpeed: 14,
            projectileStartHeight: 1.75,
            attackLaunchSound: SOUND.SWING,
            circleSize: 1.45,
            circleOffset: 0.312,
            commands: {
              stop: "stop",
              attack: "attack",
              researchdetection: "researchdetection",
            },
            buildTime: 40 * 20,
            cost: 130,
            costIncrease: 0,
            costIncreaseGroup: [],
            healthbarOffset: 3.69,
            healthbarWidth: 1.56,
            img: "watchtower",
            description:
              "The Watchtower is a defensive structure, which shoots arrows at enemy units in range.",
            projectileLen: 0.22,
            tabPriority: 2,
            attackEffect: "arrow",
            canAttackFlying: true,
            hasDetection: false,
            preventsReveal: false,
            attackPrio: 10,
          },
          {
            name: "Watchtower (detection)",
            id_string: "watchtower2",
            hp: 550,
            size: 2,
            weaponCooldown: 1.6 * 20,
            weaponDelay: 0.3 * 20,
            dmg: 30,
            armor: 1,
            range: 7,
            vision: 12,
            projectileSpeed: 14,
            projectileStartHeight: 1.75,
            attackLaunchSound: SOUND.SWING,
            circleSize: 1.45,
            circleOffset: 0.312,
            commands: {
              stop: "stop",
              attack: "attack",
            },
            buildTime: 30 * 20,
            cost: 50,
            healthbarOffset: 3.69,
            healthbarWidth: 1.56,
            img: "watchtower",
            description:
              "The Watchtower is a defensive structure, which shoots arrows at enemy units in range. Watchtowers get more expensive the more you have. Watchtowers have detection, that means they can see enemy invisible units.",
            projectileLen: 0.22,
            tabPriority: 2,
            attackEffect: "arrow",
            canAttackFlying: true,
            hasDetection: true,
            preventsReveal: false,
            attackPrio: 10,
          },
          {
            name: "House",
            id_string: "house",
            hp: 900,
            supplyProvided: 10,
            size: 3,
            weaponCooldown: 1.8 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 1,
            range: 0,
            vision: 8,
            circleSize: 2.4,
            circleOffset: 0.25,
            commands: {},
            buildTime: 25 * 20,
            cost: 100,
            healthbarOffset: 3.4,
            healthbarWidth: 2.1,
            img: "house",
            description:
              "A House increases your maximum population by 10. You require a house to construct Barracks, Wolf Dens, and Workshops",
            tabPriority: 1,
            preventsReveal: false,
            clickSound: SOUND.HOUSE,
            clickSoundVolume: 1,
          },
          {
            name: "Goldmine",
            id_string: "goldmine",
            hp: 40000,
            size: 3,
            weaponCooldown: 1 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 10,
            range: 0,
            vision: 0,
            circleSize: 2.12,
            circleOffset: 0.17,
            commands: {},
            buildTime: 30 * 20,
            cost: 250,
            healthbarOffset: 2.15,
            healthbarWidth: 2.03,
            img: "mine",
            description:
              "The Goldmine contains gold for players to gather using Workers. Too many Workers on one mine leads to inefficient mining.",
            isInvincible: true,
            startGold: 6000,
            maxWorkers: 7,
            miningEfficiencyCoefficient: 0.5,
            minMiningRate: 0.25,
            timeToMine: 32,
            alwaysNeutral: true,
            goldPerDelivery: 5,
            preventsReveal: false,
          },
          {
            name: "Mages Guild",
            id_string: "magesguild",
            hp: 950,
            size: 3,
            weaponCooldown: 1 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 1,
            range: 0,
            vision: 8,
            circleSize: 2.1,
            circleOffset: 0.2,
            commands: {
              researchfireball: "researchfireball",
            },
            buildTime: 54 * 20,
            cost: 150,
            healthbarOffset: 3.45,
            healthbarWidth: 2.04,
            img: "mages_guild",
            description:
              "The Mages Guild allows you to train Mages from the barracks and research fireball. Mages are strong, but vulnerable units.",
            tabPriority: 6,
            preventsReveal: false,
            clickSound: SOUND.MAGES_GUILD,
            clickSoundVolume: 0.9,
            canHaveWaypoint: true,
          },
          {
            name: "Workshop",
            id_string: "workshop",
            hp: 1300,
            size: 4,
            weaponCooldown: 1 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 1,
            range: 0,
            vision: 8,
            circleSize: 3,
            circleOffset: 0.4,
            commands: {
              constructcatapult: "constructcatapult",
              construct_gatling: "construct_gatling",
              spokedwheel_cmd: "spokedwheel_cmd",
            },
            buildTime: 55 * 20,
            cost: 125,
            healthbarOffset: 3.6,
            healthbarWidth: 2.7,
            img: "workshop",
            busySmokeEffectLocationX: 0.5,
            busySmokeEffectLocationY: 3,
            busySmokeEffectLocationZ: 5.7,
            description:
              "The Workshop allows you to build Catapults, Gatling Guns and research upgrades.",
            tabPriority: 5,
            preventsReveal: false,
            clickSound: SOUND.WORKSHOP,
            clickSoundVolume: 1,
            canHaveWaypoint: true,
          },
          {
            name: "Forge",
            id_string: "forge",
            hp: 800,
            size: 4,
            weaponCooldown: 1 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 1,
            range: 0,
            vision: 8,
            circleSize: 3,
            circleOffset: 0.2,
            commands: {
              attackupgrade: "attackupgrade",
              armorupgrade: "armorupgrade",
              mechattackupgrade: "mechattackupgrade",
              mecharmorupgrade: "mecharmorupgrade",
            },
            buildTime: 50 * 20,
            cost: 150,
            healthbarOffset: 3,
            healthbarWidth: 2.7,
            img: "forge",
            busySmokeEffectLocationX: -1.3,
            busySmokeEffectLocationY: 3,
            busySmokeEffectLocationZ: 5.0,
            description:
              "The Forge provides you with the ability to research armor and damage upgrades for human or mechanical units",
            tabPriority: 3,
            preventsReveal: false,
            clickSound: SOUND.FORGE,
            clickSoundVolume: 0.75,
          },
          {
            name: "Start Location",
            id_string: "startlocation",
            hp: 400,
            size: 4,
            weaponCooldown: 1 * 20,
            supplyProvided: 10,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 1,
            range: 0,
            vision: 8,
            circleSize: 3,
            circleOffset: 0.2,
            commands: {},
            buildTime: 55 * 20,
            cost: 150,
            healthbarOffset: 3,
            healthbarWidth: 2.7,
            img: "start_location",
            description:
              "The Start Location marks where a player starts. When the game begins, a Castle and 6 Workers will be created at this position.",
            tabPriority: 3,
            isInvincible: true,
            limit: 1,
            takesGold: true,
            preventsReveal: true,
          },
          {
            name: "Fortress",
            id_string: "fortress",
            hp: 2900,
            supplyProvided: 10,
            size: 4,
            weaponCooldown: 2 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 2,
            range: 0,
            projectileSpeed: 14,
            projectileStartHeight: 1.75,
            attackLaunchSound: SOUND.SWING,
            vision: 10,
            circleSize: 2.65,
            circleOffset: 0.625,
            commands: {
              trainworker: "trainworker",
              trainbird: "trainbird",
              bird_detection_cmd: "bird_detection_cmd",
            },
            buildTime: 72 * 20,
            cost: 100,
            healthbarOffset: 4.25,
            healthbarWidth: 2.5,
            img: "fortress",
            description:
              "The Fortress is an advanced version of the Castle. It allows you to build a Dragons Lair.",
            timeToMine: 2, // how many ticks workers stay to get / deliver gold
            projectileLen: 0.22,
            tabPriority: 10,
            attackEffect: "arrow",
            takesGold: true,
            preventsReveal: true,
            clickSound: SOUND.CC,
            clickSoundVolume: 1,
            canHaveWaypoint: true,
          },
          {
            name: "Dragons Lair",
            id_string: "dragonslair",
            hp: 950,
            size: 3,
            weaponCooldown: 1 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 1,
            range: 0,
            vision: 8,
            circleSize: 2.5,
            circleOffset: 0.15,
            commands: {
              traindragon: "traindragon",
            },
            buildTime: 72 * 20,
            cost: 200,
            healthbarOffset: 4.65,
            healthbarWidth: 2.5,
            img: "dragons_lair",
            description: "The Dragons Lair allows you to train Dragons.",
            tabPriority: 10,
            preventsReveal: false,
            clickSound: SOUND.DRAGONS_LAIR,
            clickSoundVolume: 0.85,
            canHaveWaypoint: true,
          },
          {
            name: "Wolves Den",
            id_string: "wolvesden",
            hp: 950,
            size: 3,
            weaponCooldown: 1 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 1,
            range: 0,
            vision: 8,
            circleSize: 2.3,
            circleOffset: 0.125,
            commands: {
              trainwolf: "trainwolf",
              train_snake: "train_snake",
              upgradetowerewolvesden: "upgradetowerewolvesden",
            },
            buildTime: 40 * 20,
            cost: 100,
            healthbarOffset: 2.95,
            healthbarWidth: 2.5,
            img: "wolves_den",
            description: "The Wolves Den allows you to train Wolves and Snakes.",
            tabPriority: 12,
            preventsReveal: false,
            clickSound: SOUND.W_DEN,
            clickSoundVolume: 1,
            canHaveWaypoint: true,
          },
          {
            name: "Animal Testing Lab",
            id_string: "animaltestinglab",
            hp: 900,
            size: 4,
            weaponCooldown: 1 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 1,
            range: 0,
            vision: 8,
            circleSize: 3.4,
            circleOffset: 0.125,
            commands: {
              beastattackupgrade: "beastattackupgrade",
              beastdefenseupgrade: "beastdefenseupgrade",
            },
            buildTime: 54 * 20,
            cost: 150,
            healthbarOffset: 3.75,
            healthbarWidth: 3.1,
            img: "animal_testing_lab",
            description: "The Animal Testing Lab allows you to research upgrades for your beasts.",
            tabPriority: 11,
            preventsReveal: false,
            clickSound: SOUND.LAB,
            clickSoundVolume: 1,
          },
          {
            name: "Advanced Workshop",
            id_string: "advancedworkshop",
            hp: 1050,
            size: 4,
            weaponCooldown: 1 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 1,
            range: 0,
            vision: 8,
            circleSize: 3.4,
            circleOffset: 0.125,
            commands: {
              constructballista: "constructballista",
              constructairship: "constructairship",
              ballistaexplosives: "ballistaexplosives",
              researchtelescope: "researchtelescope",
            },
            buildTime: 63 * 20,
            cost: 140,
            healthbarOffset: 3.75,
            healthbarWidth: 3.1,
            img: "adv_workshop",
            description: "The Advanced Workshop allows you to build Airships and Ballistas.",
            tabPriority: 12,
            preventsReveal: false,
            clickSound: SOUND.A_WS,
            clickSoundVolume: 1,
            canHaveWaypoint: true,
          },
          {
            name: "Werewolves Den",
            id_string: "werewolvesden",
            hp: 1200,
            size: 3,
            weaponCooldown: 1 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 2,
            range: 0,
            vision: 8,
            circleSize: 2.3,
            circleOffset: 0.125,
            commands: {
              trainwolf: "trainwolf",
              train_snake: "train_snake",
              trainwerewolf: "trainwerewolf",
            },
            buildTime: 65 * 20,
            cost: 225,
            healthbarOffset: 3.95,
            healthbarWidth: 2.5,
            img: "werewolves_den",
            description: "The Werewolves Den allows you to train Wolves, Snakes and Werewolves.",
            tabPriority: 13,
            preventsReveal: false,
            clickSound: SOUND.WW_DEN,
            clickSoundVolume: 1,
            canHaveWaypoint: true,
          },
          {
            name: "Church",
            id_string: "church",
            hp: 1100,
            size: 4,
            weaponCooldown: 1 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 1,
            range: 0,
            vision: 8,
            circleSize: 3.3,
            circleOffset: 0.125,
            commands: {
              researchinvisibility: "researchinvisibility",
              trainpriest: "trainpriest",
            },
            buildTime: 54 * 20,
            cost: 200,
            healthbarOffset: 4.7,
            healthbarWidth: 2.5,
            img: "church",
            description:
              "The Church allows you to train Priests and research spells. Priests are strong, but vulnerable units.",
            tabPriority: 12,
            preventsReveal: false,
            clickSound: SOUND.CHURCH,
            clickSoundVolume: 1,
            canHaveWaypoint: true,
          },
          {
            name: "Snake Charmer",
            id_string: "snakecharmer",
            hp: 880,
            supplyProvided: 0,
            size: 2,
            weaponCooldown: 1 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            armor: 1,
            range: 0,
            vision: 8,
            circleSize: 1.5,
            imageScale: 0.7,
            circleOffset: 0.1,
            buildTime: 40 * 20,
            commands: {
              research_sprint: "research_sprint",
            },
            cost: 100,
            healthbarOffset: 1.9,
            healthbarWidth: 1.4,
            selectionOffsetY: 0,
            img: "buildings_snake",
            description:
              "Construction of this building allows you to build Snakes in the Wolf Den and unlock Wolf Sprint.",
            timeToMine: 2, // how many ticks workers stay to get / deliver gold
            projectileLen: 0.22,
            tabPriority: 10,
            takesGold: false,
            preventsReveal: false,
            clickSound: SOUND.CC,
            clickSoundVolume: 1,
            canHaveWaypoint: false,
          },
          {
            name: "Mill",
            id_string: "mill",
            hp: 1050,
            mana: 0,
            startMana: 0,
            hpRegenerationRate: 0 / 20,
            manaRegenerationRate: 0 / 20,
            armor: 1,
            supply: 0,
            supplyProvided: 0,
            weaponCooldown: 1 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            dmgModifierAttributes: [],
            dmgModifierAddition: [],
            dmgModifierMultiplier: [],
            lifesteal: 0,
            armorPenetration: 0,
            percDmg: 0,
            dmgCap: 1,
            range: 0,
            minRange: -999,
            aoeRadius: 0,
            bouncePower: 0,
            bounceDistMin: 0,
            bounceDistMax: 0,
            attackPrio: 5,
            vision: 8,
            projectileSpeed: 8,
            projectileLen: 0.2,
            attackLaunchSound: 0,
            attackEffect: null,
            projectileStartHeight: 0,
            circleSize: 3.4,
            imageScale: 1,
            circleOffset: 0.125,
            buildTime: 63 * 20,
            cost: 140,
            costIncrease: 150,
            costIncreaseGroup: [],
            healthbarOffset: 3.3,
            healthbarWidth: 3.1,
            selectionOffsetY: 0,
            img: "mill",
            description: "The Mill allows you to build Gyrocrafts.",
            tabPriority: 12,
            drawOffsetY: 6,
            size: 4,
            repairRate: 0 / 20,
            startGold: 0,
            timeToMine: 20,
            miningEfficiencyCoefficient: 0.5,
            minMiningRate: 0.1,
            maxWorkers: 6,
            limit: 0,
            visionHeightBonus: 0,
            commands: {
              construct_gyrocraft: "construct_gyrocraft",
            },
            lifetime: 0,
            goldReward: 0,
            maxUnitsToRepair: 1,
            modifiers: [],
            modifiersSelf: [],
            spawnModifiers: [],
            deathSound: 12,
            clickSound: 74,
            clickSoundVolume: 1,
            hoverText: "",
            canHaveWaypoint: true,
            causesFlameDeath: false,
            hitscan: false,
            maximizeRangeWhenShooting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            canAttackGround: true,
            canAttackFlying: false,
            isHeatSeeking: true,
            ignoreEnemyHitscan: false,
            controllable: true,
            hasDetection: false,
            expOnlyFromOwnKills: false,
            alliesGetExperience: false,
            alliesGetGold: false,
            isReflectingProjectiles: false,
            isBlockingProjectiles: false,
            takeDamageOnBlock: false,
            isInvincible: false,
            isInvisible: false,
            alwaysNeutral: false,
            takesGold: false,
            spawnWithAMove: false,
            preventsReveal: false,
            preventsLoss: true,
            isMechanical: false,
            isUndead: false,
            isBiological: false,
            isBeast: false,
            isHuman: false,
            noShow: false,
          },
          {
            name: "Armory",
            id_string: "armory",
            hp: 880,
            mana: 0,
            startMana: 0,
            hpRegenerationRate: 0 / 20,
            manaRegenerationRate: 0 / 20,
            armor: 1,
            supply: 0,
            supplyProvided: 0,
            weaponCooldown: 1.8 * 20,
            weaponDelay: 1 * 20,
            dmg: 0,
            dmgModifierAttributes: [],
            dmgModifierAddition: [],
            dmgModifierMultiplier: [],
            lifesteal: 0,
            armorPenetration: 0,
            percDmg: 0,
            dmgCap: 1,
            range: 0.2,
            minRange: -999,
            aoeRadius: 0,
            bouncePower: 0,
            bounceDistMin: 0,
            bounceDistMax: 0,
            attackPrio: 5,
            vision: 8,
            projectileSpeed: 8,
            projectileLen: 0.2,
            attackLaunchSound: 0,
            attackEffect: null,
            projectileStartHeight: 0,
            circleSize: 2.2,
            imageScale: 1,
            circleOffset: 0.35,
            buildTime: 50 * 20,
            cost: 150,
            costIncrease: 150,
            costIncreaseGroup: [],
            healthbarOffset: 2.8,
            healthbarWidth: 2.1,
            selectionOffsetY: 0,
            img: "armory",
            description: "The Armory researches abilities for your Barracks units.",
            tabPriority: 1,
            drawOffsetY: 6,
            size: 3,
            repairRate: 0 / 20,
            startGold: 0,
            timeToMine: 20,
            miningEfficiencyCoefficient: 0.5,
            minMiningRate: 0.1,
            maxWorkers: 6,
            limit: 0,
            visionHeightBonus: 0,
            commands: {
              rangeupgrade: "rangeupgrade",
              researchraidershroudupgrade: "researchraidershroudupgrade",
            },
            lifetime: 0,
            goldReward: 0,
            maxUnitsToRepair: 1,
            modifiers: [],
            modifiersSelf: [],
            spawnModifiers: [],
            deathSound: 12,
            clickSound: 79,
            clickSoundVolume: 1,
            hoverText: "",
            canHaveWaypoint: false,
            causesFlameDeath: false,
            hitscan: false,
            maximizeRangeWhenShooting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            canAttackGround: true,
            canAttackFlying: false,
            isHeatSeeking: true,
            ignoreEnemyHitscan: false,
            controllable: true,
            hasDetection: false,
            expOnlyFromOwnKills: false,
            alliesGetExperience: false,
            alliesGetGold: false,
            isReflectingProjectiles: false,
            isBlockingProjectiles: false,
            takeDamageOnBlock: false,
            isInvincible: false,
            isInvisible: false,
            alwaysNeutral: false,
            takesGold: false,
            spawnWithAMove: false,
            preventsReveal: false,
            preventsLoss: true,
            isMechanical: false,
            isUndead: false,
            isBiological: false,
            isBeast: false,
            isHuman: false,
            noShow: false,
          },
        ];

        var CliffsData = [
          new TileType({
            name: "North",
            img: { x: 2, y: 418, w: 22, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "West",
            img: { x: 24, y: 418, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "East",
            img: { x: 44, y: 418, w: 16, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "South",
            img: { x: 62, y: 418, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(88, 80, 68)",
          }),

          new TileType({
            name: "SW",
            img: { x: 85, y: 416, w: 22, h: 42 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "SE",
            img: { x: 110, y: 416, w: 22, h: 42 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "NW",
            img: { x: 135, y: 418, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "NE",
            img: { x: 157, y: 418, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "SW2",
            img: { x: 2, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "SE2",
            img: { x: 25, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "NW2",
            img: { x: 53, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "NE2",
            img: { x: 75, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "Universal",
            img: { x: 372, y: 168, w: 22, h: 46 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),
        ];
        var CliffsEgyptData = [
          new TileType({
            name: "North",
            img: { x: 390, y: 418, w: 22, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "West",
            img: { x: 411, y: 413, w: 22, h: 47 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "East",
            img: { x: 433, y: 413, w: 16, h: 47 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "South",
            img: { x: 450, y: 418, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(88, 80, 68)",
          }),

          new TileType({
            name: "SW",
            img: { x: 473, y: 416, w: 22, h: 42 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "SE",
            img: { x: 498, y: 416, w: 22, h: 42 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "NW",
            img: { x: 523, y: 418, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "NE",
            img: { x: 544, y: 418, w: 22, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "SW2",
            img: { x: 390, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "SE2",
            img: { x: 413, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "NW2",
            img: { x: 439, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "NE2",
            img: { x: 463, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "Universal",
            img: { x: 397, y: 168, w: 22, h: 46 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),
        ];
        var CliffsWinterData = [
          new TileType({
            name: "North",
            img: { x: 2, y: 418, w: 22, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
          }),

          new TileType({
            name: "West",
            img: { x: 24, y: 418, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
          }),

          new TileType({
            name: "East",
            img: { x: 44, y: 418, w: 16, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
          }),

          new TileType({
            name: "South",
            img: { x: 98, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
          }),

          new TileType({
            name: "SW",
            img: { x: 85, y: 416, w: 22, h: 42 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
          }),

          new TileType({
            name: "SE",
            img: { x: 110, y: 416, w: 22, h: 42 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
          }),

          new TileType({
            name: "NW",
            img: { x: 162, y: 456, w: 16, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
          }),

          new TileType({
            name: "NE",
            img: { x: 180, y: 456, w: 16, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
          }),

          new TileType({
            name: "SW2",
            img: { x: 2, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
          }),

          new TileType({
            name: "SE2",
            img: { x: 25, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
          }),

          new TileType({
            name: "NW2",
            img: { x: 120, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
          }),

          new TileType({
            name: "NE2",
            img: { x: 142, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
          }),

          new TileType({
            name: "Universal",
            img: { x: 347, y: 168, w: 22, h: 46 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
          }),
        ];
        var commands = [
          {
            type: COMMAND.MAKEUNIT,
            unitType: "worker",
            isInstant: true,
            image: "worker",
            hotkey: KEY.Q,
            name: "Train Worker",
            id_string: "trainworker",
            description:
              "Cost: getField(worker.cost) Gold#BRSupply: getField(worker.supply)#BRDuration: getField(worker.buildTime) sec#BRgetField(worker.description)",
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.MAKEUNIT,
            unitType: "soldier",
            isInstant: true,
            image: "soldier",
            hotkey: KEY.Q,
            name: "Train Soldier",
            id_string: "trainsoldier",
            description:
              "Cost: getField(soldier.cost) Gold#BRSupply: getField(soldier.supply)#BRDuration: getField(soldier.buildTime) sec#BRgetField(soldier.description)",
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.MAKEUNIT,
            unitType: "archer",
            isInstant: true,
            image: "archer",
            hotkey: KEY.W,
            name: "Train Archer",
            id_string: "trainarcher",
            description:
              "Cost: getField(archer.cost) Gold#BRSupply: getField(archer.supply)#BRDuration: getField(archer.buildTime) sec#BRgetField(archer.description)",
            interfacePosX: 1,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.MAKEBUILDING,
            unitType: "castle",
            image: "castle",
            hotkey: KEY.A,
            name: "Build Castle",
            id_string: "buildcastle",
            description:
              "Cost: getField(castle.cost) Gold#BRDuration: getField(castle.buildTime) sec#BRgetField(castle.description)",
            targetIsPoint: true,
            commandCard: 1,
            interfacePosX: 0,
            interfacePosY: 1,
          },

          {
            type: COMMAND.MAKEBUILDING,
            unitType: "barracks",
            image: "barracks",
            hotkey: KEY.Q,
            name: "Build Barracks",
            id_string: "buildbarracks",
            requirementType: ["house"],
            requirementLevel: [1],
            requirementText: ["Requires a House"],
            description:
              "Cost: getField(barracks.cost) Gold#BRDuration: getField(barracks.buildTime) sec#BRgetField(barracks.description)",
            targetIsPoint: true,
            commandCard: 2,
            interfacePosX: 0,
            interfacePosY: 0,
          },

          {
            type: COMMAND.MAKEBUILDING,
            unitType: "watchtower",
            image: "watchtower",
            hotkey: KEY.W,
            name: "Build Watchtower",
            id_string: "buildwatchtower",
            description:
              "Cost: getField(watchtower.cost) Gold#BRDuration: getField(watchtower.buildTime) sec#BRgetField(watchtower.description)",
            targetIsPoint: true,
            commandCard: 1,
            interfacePosX: 1,
            interfacePosY: 0,
          },

          {
            type: COMMAND.MAKEBUILDING,
            unitType: "house",
            image: "house",
            hotkey: KEY.E,
            name: "Build House",
            id_string: "buildhouse",
            description:
              "Cost: getField(house.cost) Gold#BRDuration: getField(house.buildTime) sec#BRgetField(house.description)",
            targetIsPoint: true,
            commandCard: 1,
            interfacePosX: 2,
            interfacePosY: 0,
          },

          {
            type: COMMAND.IDLE,
            isInstant: true,
            image: "stop",
            hotkey: KEY.S,
            name: "Stop",
            id_string: "stop",
            description: "Stop and cancel any existing orders.",
            interfacePosX: 1,
            interfacePosY: 1,
            commandCard: 0,
          },

          {
            type: COMMAND.HOLDPOSITION,
            isInstant: true,
            image: "holdposition",
            hotkey: KEY.D,
            name: "Hold Position",
            id_string: "holdposition",
            description: "The unit will stop and not move whatsoever.",
            interfacePosX: 2,
            interfacePosY: 1,
            commandCard: 0,
          },

          {
            type: COMMAND.ATTACK,
            image: "attack",
            hotkey: KEY.A,
            name: "Attack",
            id_string: "attack",
            description:
              "Order attack an enemy unit to attack it directly or order attack at a point to order your unit(s) to move there and attacking any enemies on its way.",
            targetIsUnit: true,
            interfacePosX: 0,
            interfacePosY: 1,
            commandCard: 0,
            cursor: Cursors.ATTACK,
          },

          {
            type: COMMAND.CANCEL,
            isInstant: true,
            image: "cancel",
            hotkey: KEY.R,
            name: "Cancel",
            id_string: "cancel",
            description: "Cancel the current order.",
            interfacePosX: 4,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.MOVE,
            name: "Move",
            id_string: "move",
            targetIsPoint: true,
          },

          {
            type: COMMAND.MOVETO,
            name: "Moveto",
            id_string: "moveto",
            targetIsUnit: true,
            range: [0.2],
          },

          {
            type: COMMAND.MINE,
            name: "Mine",
            id_string: "mine",
            targetIsUnit: true,
            range: [0.2],
          },

          {
            type: COMMAND.REPAIR,
            name: "Repair",
            id_string: "repair",
            image: "repair",
            description: "Repair a building or a mechanical unit.",
            targetIsUnit: true,
            range: [0],
            hotkey: KEY.F,
            interfacePosX: 3,
            interfacePosY: 1,
            commandCard: 0,
            targetRequirements1: [targetRequirements.isBuilding, targetRequirements.isMechanical],
            hasAutocast: true,
            autocastConditions:
              "hp < type.hp - 1 && owner == this.owner && isUnderConstruction != 1",
          },

          {
            type: COMMAND.AMOVE,
            name: "AMove",
            id_string: "amove",
            targetIsPoint: true,
          },

          {
            type: COMMAND.MAKEBUILDING,
            name: "Makebuilding",
            id_string: "makebuilding",
          },

          {
            type: COMMAND.MAKEUNIT,
            unitType: "mage",
            isInstant: true,
            image: "mage",
            hotkey: KEY.A,
            name: "Train Mage",
            id_string: "trainmage",
            description:
              "Cost: getField(mage.cost) Gold#BRSupply: getField(mage.supply)#BRDuration: getField(mage.buildTime) sec#BRgetField(mage.description) Train a mage, requires a mage's guild.",
            requirementText: ["Requires a Mages Guild"],
            requirementType: ["magesguild"],
            requirementLevel: [1],
            interfacePosX: 0,
            interfacePosY: 1,
            commandCard: 0,
          },

          {
            type: COMMAND.MAKEUNIT,
            unitType: "priest",
            id_string: "trainpriest",
            isInstant: true,
            image: "priest",
            hotkey: KEY.A,
            name: "Train Priest",
            id_string: "trainpriest",
            description:
              "Cost: getField(priest.cost) Gold#BRSupply: getField(priest.supply)#BRDuration: getField(priest.buildTime) sec#BRgetField(priest.description)",
            interfacePosX: 0,
            interfacePosY: 1,
            commandCard: 0,
          },

          {
            type: COMMAND.MAKEBUILDING,
            unitType: "magesguild",
            image: "mages_guild",
            hotkey: KEY.E,
            name: "Build Mages Guild",
            id_string: "buildmagesguild",
            description:
              "Cost: getField(magesguild.cost) Gold#BRDuration: getField(magesguild.buildTime) sec#BRgetField(magesguild.description)",
            requirementText: ["Requires a Barracks"],
            requirementType: ["barracks"],
            requirementLevel: [1],
            targetIsPoint: true,
            commandCard: 2,
            interfacePosX: 2,
            interfacePosY: 0,
          },

          {
            type: COMMAND.UNIVERSAL,
            image: "flamestrike",
            hotkey: KEY.Q,
            name: "Flamestrike",
            id_string: "flamestrike",
            targetIsPoint: true,
            manaCost: [50],
            aoeRadius: [1.75],
            damage: [40],
            projectileSpeed: [6],
            duration: 0,
            range: [6],
            description:
              "Casts a flamestrike at a target location, dealing getField(shockwave.damage) damage to nearby units and throwing them back.",
            interfacePosX: 2,
            interfacePosY: 1,
            commandCard: 0,
            cursor: Cursors.BLANK,
            useAoeCursor: true,
            castingDelay: 0.05 * 20,
            cooldown: 0.3 * 20,
            launchSound: SOUND.FLAMESTRIKE_LAUNCH,
            attackEffect: "flamestrike",
            bounceDistMax: 6,
            bounceDistMin: 3,
            bouncePower: 1.5,
          },

          {
            type: COMMAND.MAKEUNIT,
            unitType: "catapult",
            isInstant: true,
            image: "catapult",
            hotkey: KEY.Q,
            name: "Construct Catapult",
            id_string: "constructcatapult",
            description:
              "Cost: getField(catapult.cost) Gold#BRSupply: getField(catapult.supply)#BRDuration: getField(catapult.buildTime) sec#BRgetField(catapult.description)",
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.MAKEBUILDING,
            unitType: "workshop",
            image: "workshop",
            hotkey: KEY.Q,
            name: "Build Workshop",
            id_string: "buildworkshop",
            description:
              "Cost: getField(workshop.cost) Gold#BRDuration: getField(workshop.buildTime) sec#BRgetField(workshop.description)",
            requirementText: ["Requires a House"],
            requirementType: ["house"],
            requirementLevel: [1],
            targetIsPoint: true,
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 4,
          },

          {
            type: COMMAND.MAKEBUILDING,
            unitType: "forge",
            image: "forge",
            hotkey: KEY.R,
            name: "Build Forge",
            id_string: "buildforge",
            description:
              "Cost: getField(forge.cost) Gold#BRDuration: getField(forge.buildTime) sec#BRgetField(forge.description)",
            targetIsPoint: true,
            interfacePosX: 3,
            interfacePosY: 0,
            commandCard: 1,
          },

          {
            type: COMMAND.SWITCH_CC,
            image: "hammer",
            hotkey: KEY.Q,
            name: "Basic Buildings",
            id_string: "basic_buildings",
            description: "Construct basic buildings",
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
            targetCC: 1,
          },

          {
            type: COMMAND.SWITCH_CC,
            image: "soldier",
            hotkey: KEY.W,
            name: "Human Buildings",
            id_string: "human_buildings",
            description: "Construct buildings to train and upgrade human units",
            interfacePosX: 1,
            interfacePosY: 0,
            commandCard: 0,
            targetCC: 2,
          },

          {
            type: COMMAND.SWITCH_CC,
            image: "wolf",
            hotkey: KEY.E,
            name: "Beast Buildings",
            id_string: "beast_buildings",
            description: "Construct buildings to train and upgrade beast units",
            interfacePosX: 2,
            interfacePosY: 0,
            commandCard: 0,
            targetCC: 3,
          },

          {
            type: COMMAND.SWITCH_CC,
            image: "catapult",
            hotkey: KEY.R,
            name: "Mechancial Buildings",
            id_string: "mech_buildings",
            description: "Construct buildings to train and upgrade mechanical units",
            interfacePosX: 3,
            interfacePosY: 0,
            commandCard: 0,
            targetCC: 4,
          },
          // No longer used in the base game but needed for backwards compatability for mods
          {
            type: COMMAND.SWITCH_CC,
            image: "hammer",
            hotkey: KEY.Q,
            name: "Buildings",
            id_string: "buildings",
            description: "Construct Buildings",
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
            targetCC: 1,
          },
          // No longer used in the base game but needed for backwards compatability for mods
          {
            type: COMMAND.SWITCH_CC,
            image: "hammer",
            hotkey: KEY.W,
            name: "Buildings",
            id_string: "buildings2",
            description: "Construct additional Buildings",
            interfacePosX: 1,
            interfacePosY: 0,
            commandCard: 0,
            targetCC: 2,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgattack",
            isInstant: true,
            image: "attackUpg",
            hotkey: KEY.Q,
            name: "Attack Upgrade",
            id_string: "attackupgrade",
            description:
              "Level add(getUpgradeLevel(upgattack), upgradeCountInResearch(upgattack), 1)#BRCost: getField(upgattack.cost) Gold#BRDuration: getField(upgattack.buildTime) sec#BRgetField(upgattack.description)",
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgarmor",
            isInstant: true,
            image: "armorUpg",
            hotkey: KEY.W,
            name: "Armor Upgrade",
            id_string: "armorupgrade",
            description:
              "Level add(getUpgradeLevel(upgarmor), upgradeCountInResearch(upgarmor), 1)#BRCost: getField(upgarmor.cost) Gold#BRDuration: getField(upgarmor.buildTime) sec#BRgetField(upgarmor.description)",
            interfacePosX: 1,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.UNIVERSAL,
            image: "heal",
            hotkey: KEY.W,
            name: "Heal",
            id_string: "heal",
            targetRequirements1: [targetRequirements.isBiological],
            targetIsUnit: true,
            attackEffect: "heal",
            manaCost: [25],
            range: [8],
            projectileSpeed: [0],
            damage: [-150],
            description: "Heals a target unit by mul(getField(heal.damage), -1) HP",
            interfacePosX: 1,
            interfacePosY: 1,
            commandCard: 0,
            castingDelay: 0.05 * 20,
            cooldown: 0.4 * 20,
            launchSound: SOUND.HEAL,
            cursor: Cursors.HEAL,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgfireball",
            isInstant: true,
            image: "flamestrike",
            hotkey: KEY.Q,
            name: "Research Fireball",
            id_string: "researchfireball",
            description:
              "Cost: getField(upgfireball.cost) Gold#BRDuration: getField(upgfireball.buildTime) sec#BRgetField(upgfireball.description)",
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgslowfield",
            isInstant: true,
            image: "slowfield",
            hotkey: KEY.W,
            name: "Research Slow Field",
            id_string: "researchslowfield",
            description:
              "Cost: getField(upgslowfield.cost) Gold#BRDuration: getField(upgslowfield.buildTime) sec#BRgetField(upgslowfield.description)",
            interfacePosX: 1,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgheal",
            isInstant: true,
            image: "heal",
            hotkey: KEY.W,
            name: "Research Heal",
            id_string: "researchheal",
            description:
              "Cost: getField(upgheal.cost) Gold#BRDuration: getField(upgheal.buildTime) sec#BRgetField(upgheal.description)",
            interfacePosX: 1,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.BUILDING_UPGRADE,
            isInstant: true,
            image: "fortress",
            hotkey: KEY.A,
            improvedBuilding: "fortress",
            name: "Upgrade To Fortress",
            id_string: "upgradetofortress",
            description:
              "Cost: getField(fortress.cost) Gold#BRDuration: getField(fortress.buildTime) sec#BRgetField(fortress.description)",
            interfacePosX: 0,
            interfacePosY: 1,
            commandCard: 0,
          },

          {
            type: COMMAND.BUILDING_UPGRADE,
            isInstant: true,
            image: "eye",
            hotkey: KEY.Q,
            improvedBuilding: "watchtower2",
            name: "Research Detection",
            id_string: "researchdetection",
            description:
              "Cost: getField(watchtower2.cost) Gold#BRDuration: getField(watchtower2.buildTime) sec#BRgetField(watchtower2.description)",
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.MAKEBUILDING,
            unitType: "dragonslair",
            image: "dragons_lair",
            hotkey: KEY.W,
            name: "Build Dragons Lair",
            id_string: "builddragonslair",
            description:
              "Cost: getField(dragonslair.cost) Gold#BRDuration: getField(dragonslair.buildTime) sec#BRgetField(dragonslair.description)",
            requirementText: ["Requires a Fortress"],
            requirementType: ["fortress"],
            requirementLevel: [1, 1],
            targetIsPoint: true,
            commandCard: 3,
            interfacePosX: 1,
            interfacePosY: 0,
          },

          {
            type: COMMAND.MAKEUNIT,
            unitType: "dragon",
            isInstant: true,
            image: "dragon",
            hotkey: KEY.Q,
            name: "Train Dragon",
            id_string: "traindragon",
            description:
              "Cost: getField(dragon.cost) Gold#BRSupply: getField(dragon.supply)#BRDuration: getField(dragon.buildTime) sec#BRgetField(dragon.description)",
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgbeastattack",
            isInstant: true,
            image: "dragonAttUpg",
            hotkey: KEY.Q,
            name: "Beast Attack Upgrade",
            id_string: "beastattackupgrade",
            description:
              "Level add(getUpgradeLevel(upgbeastattack), upgradeCountInResearch(upgbeastattack), 1)#BRCost: getField(upgbeastattack.cost) Gold#BRDuration: getField(upgbeastattack.buildTime) sec#BRgetField(upgbeastattack.description)",
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgbeastdefense",
            isInstant: true,
            image: "dragonDefUpg",
            hotkey: KEY.W,
            name: "Beast Defense Upgrade",
            id_string: "beastdefenseupgrade",
            description:
              "Level add(getUpgradeLevel(upgbeastdefense), upgradeCountInResearch(upgbeastdefense), 1)#BRCost: getField(upgbeastdefense.cost) Gold#BRDuration: getField(upgbeastdefense.buildTime) sec#BRgetField(upgbeastdefense.description)",
            interfacePosX: 1,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.MAKEUNIT,
            unitType: "wolf",
            isInstant: true,
            image: "wolf",
            hotkey: KEY.Q,
            name: "Train Wolf",
            id_string: "trainwolf",
            description:
              "Cost: getField(wolf.cost) Gold#BRSupply: getField(wolf.supply)#BRDuration: getField(wolf.buildTime) sec#BRgetField(wolf.description)",
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.MAKEBUILDING,
            unitType: "wolvesden",
            image: "wolves_den",
            hotkey: KEY.Q,
            name: "Build Wolves Den",
            id_string: "buildwolvesden",
            description:
              "Cost: getField(wolvesden.cost) Gold#BRDuration: getField(wolvesden.buildTime) sec#BRgetField(wolvesden.description)",
            requirementText: ["Requires a House"],
            requirementType: ["house"],
            requirementLevel: [1],
            targetIsPoint: true,
            commandCard: 3,
            interfacePosX: 0,
            interfacePosY: 0,
          },

          {
            type: COMMAND.MAKEBUILDING,
            unitType: "animaltestinglab",
            image: "animal_testing_lab",
            hotkey: KEY.R,
            name: "Build Animal Testing Lab",
            id_string: "buildanimaltestinglab",
            description:
              "Cost: getField(animaltestinglab.cost) Gold#BRDuration: getField(animaltestinglab.buildTime) sec#BRgetField(animaltestinglab.description)",
            targetIsPoint: true,
            commandCard: 3,
            interfacePosX: 3,
            interfacePosY: 0,
          },

          {
            type: COMMAND.LOAD,
            image: "load",
            hotkey: KEY.Q,
            name: "Load in",
            id_string: "loadin",
            description: "Load units in",
            targetIsUnit: true,
            commandCard: 0,
            interfacePosX: 0,
            interfacePosY: 0,
          },

          {
            type: COMMAND.UNLOAD,
            image: "unload",
            hotkey: KEY.W,
            name: "Unload",
            id_string: "unload",
            description: "Unload units",
            targetIsPoint: true,
            commandCard: 0,
            interfacePosX: 1,
            interfacePosY: 0,
          },

          {
            type: COMMAND.MAKEBUILDING,
            unitType: "advancedworkshop",
            image: "adv_workshop",
            hotkey: KEY.W,
            name: "Build Advanced Workshop",
            id_string: "buildadvancedworkshop",
            description:
              "Cost: getField(advancedworkshop.cost) Gold#BRDuration: getField(advancedworkshop.buildTime) sec#BRgetField(advancedworkshop.description)",
            targetIsPoint: true,
            commandCard: 4,
            interfacePosX: 1,
            interfacePosY: 0,
          },

          {
            type: COMMAND.MAKEBUILDING,
            unitType: "advancedworkshop",
            image: "adv_workshop",
            hotkey: KEY.S,
            name: "Test building",
            id_string: "buildadvancedworkshop2",
            description:
              "Cost: getField(advancedworkshop.cost) Gold#BRDuration: getField(advancedworkshop.buildTime) sec#BRgetField(advancedworkshop.description)",
            targetIsPoint: true,
            commandCard: 4,
            interfacePosX: 1,
            interfacePosY: 1,
          },

          {
            type: COMMAND.MAKEUNIT,
            unitType: "airship",
            isInstant: true,
            image: "airship",
            hotkey: KEY.Q,
            name: "Construct Airship",
            id_string: "constructairship",
            description:
              "Cost: getField(airship.cost) Gold#BRSupply: getField(airship.supply)#BRDuration: getField(airship.buildTime) sec#BRgetField(airship.description)",
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgtower",
            isInstant: true,
            image: "towerUpg",
            hotkey: KEY.W,
            name: "Tower Upgrade",
            id_string: "towerupgrade",
            description:
              "Cost: getField(upgtower.cost) Gold#BRDuration: getField(upgtower.buildTime) sec#BRgetField(upgtower.description)",
            interfacePosX: 1,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.UNLOAD2,
            name: "Direct Unload",
            id_string: "directunload",
            targetIsInt: true,
          },

          {
            type: COMMAND.ATTACK_GROUND,
            hotkey: KEY.Q,
            name: "Attack Ground",
            id_string: "attackground",
            targetIsPoint: true,
            image: "groundAttack",
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
            description: "Fire at a certain point",
            cursor: Cursors.BLANK,
            useAoeCursor: true,
            aoeRadius: [0.45],
          },

          {
            type: COMMAND.UNIVERSAL,
            name: "Smash",
            id_string: "smash",
            image: "smash",
            hotkey: KEY.Q,
            isInstant: true,
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
            description:
              "Perform a round house hit, dealing damage and smashing back small nearby units (only hits enemy units)",
            aoeRadius: [3.5],
            damage: [40],
            hitsFriendly: false,
            cooldown2: 15 * 20,
            animationName: "special1",
            castingDelay: 0.75 * 20,
            cooldown: 1.8 * 20,
            hitsSelf: false,
            launchSound: SOUND.ROUNDHOUSE,
            soundPerHit: SOUND.BIGHIT,
            bounceDistMax: 6.5,
            bounceDistMin: 4,
            bouncePower: 1.5,
            attackEffect: "smoke",
            targetFiltersExclude: ["flying"],
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgspeed",
            isInstant: true,
            image: "speedUpg",
            hotkey: KEY.E,
            name: "Speed Upgrade",
            id_string: "speedupgrade",
            description:
              "Level add(getUpgradeLevel(upgspeed), upgradeCountInResearch(upgspeed), 1)#BRCost: getField(upgspeed.cost) Gold#BRDuration: getField(upgspeed.buildTime) sec#BRgetField(upgspeed.description)",
            interfacePosX: 2,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgbeastspeed",
            isInstant: true,
            image: "beastSpeedUpg",
            hotkey: KEY.E,
            name: "Beast Speed Upgrade",
            id_string: "beastspeedupgrade",
            description:
              "Level add(getUpgradeLevel(upgbeastspeed), upgradeCountInResearch(upgbeastspeed), 1)#BRCost: getField(upgbeastspeed.cost) Gold#BRDuration: getField(upgbeastspeed.buildTime) sec#BRgetField(upgbeastspeed.description)",
            interfacePosX: 2,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.BUILDING_UPGRADE,
            isInstant: true,
            image: "werewolves_den",
            hotkey: KEY.A,
            improvedBuilding: "werewolvesden",
            name: "Upgrade To Werewolves Den",
            id_string: "upgradetowerewolvesden",
            description:
              "Cost: getField(werewolvesden.cost) Gold#BRDuration: getField(werewolvesden.buildTime) sec#BRgetField(werewolvesden.description)",
            interfacePosX: 0,
            interfacePosY: 1,
            commandCard: 0,
          },

          {
            type: COMMAND.MAKEUNIT,
            unitType: "werewolf",
            isInstant: true,
            image: "werewolf",
            hotkey: KEY.E,
            name: "Train Werewolf",
            id_string: "trainwerewolf",
            description:
              "Cost: getField(werewolf.cost) Gold#BRSupply: getField(werewolf.supply)#BRDuration: getField(werewolf.buildTime) sec#BRgetField(werewolf.description)",
            interfacePosX: 2,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.MAKEUNIT,
            unitType: "ballista",
            isInstant: true,
            image: "ballista",
            hotkey: KEY.W,
            name: "Construct Ballista",
            id_string: "constructballista",
            description:
              "Cost: getField(ballista.cost) Gold#BRSupply: getField(ballista.supply)#BRDuration: getField(ballista.buildTime) sec#BRgetField(ballista.description)",
            interfacePosX: 1,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgmechattack",
            isInstant: true,
            image: "mechAttUpg",
            hotkey: KEY.A,
            name: "Mech Attack Upgrade",
            id_string: "mechattackupgrade",
            description:
              "Level add(getUpgradeLevel(upgmechattack), upgradeCountInResearch(upgmechattack), 1)#BRCost: getField(upgmechattack.cost) Gold#BRDuration: getField(upgmechattack.buildTime) sec#BRgetField(upgmechattack.description)",
            interfacePosX: 0,
            interfacePosY: 1,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgmechdefense",
            isInstant: true,
            image: "mechDefUpg",
            hotkey: KEY.S,
            name: "Mech Armor Upgrade",
            id_string: "mecharmorupgrade",
            description:
              "Level add(getUpgradeLevel(upgmechdefense), upgradeCountInResearch(upgmechdefense), 1)#BRCost: getField(upgmechdefense.cost) Gold#BRDuration: getField(upgmechdefense.buildTime) sec#BRgetField(upgmechdefense.description)",
            interfacePosX: 1,
            interfacePosY: 1,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgmechspeed",
            isInstant: true,
            image: "mechSpeedUpg",
            hotkey: KEY.D,
            name: "Mech Speed Upgrade",
            id_string: "mechspeedupgrade",
            description:
              "Level add(getUpgradeLevel(upgmechspeed), upgradeCountInResearch(upgmechspeed), 1)#BRCost: getField(upgmechspeed.cost) Gold#BRDuration: getField(upgmechspeed.buildTime) sec#BRgetField(upgmechspeed.description)",
            interfacePosX: 2,
            interfacePosY: 1,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgballistaexplosives",
            isInstant: true,
            image: "flakUpg",
            hotkey: KEY.S,
            name: "Ballista Black Powder",
            id_string: "ballistaexplosives",
            description:
              "Cost: getField(upgballistaexplosives.cost) Gold#BRDuration: getField(upgballistaexplosives.buildTime) sec#BRgetField(upgballistaexplosives.description) Allows ballistas to use AOE shot and adds splash damage to ballistas attacks.",
            interfacePosX: 1,
            interfacePosY: 1,
            commandCard: 0,
          },

          {
            type: COMMAND.UNIVERSAL,
            name: "Fireball",
            id_string: "fireball",
            requirementText: ["This spell needs to be researched first"],
            requirementType: ["upgfireball"],
            requirementLevel: [1],
            description:
              "Casts a fireball at a target location, dealing damage to all enemy units in the way.",
            targetIsPoint: true,
            manaCost: [50],
            image: "flamestrike",
            attackEffect: "flamestrike",
            hotkey: KEY.Q,
            projectileAoeRadius: [1.0],
            projectileDamage: [5],
            projectileSpeed: [6.6],
            maximizeRangeWhenCasting: true,
            hitsFriendly: false,
            hitsSelf: false,
            range: [13],
            effectScale: 2,
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
            castingDelay: 0.05 * 20,
            cooldown: 0.3 * 20,
            cooldown2: 3 * 20,
            launchSound: SOUND.FLAMESTRIKE_LAUNCH,
            causesFlameDeath: true,
            cursor: Cursors.ATTACK,
            targetFiltersExclude: ["flying"],
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgshockwave",
            isInstant: true,
            image: "shockwave",
            hotkey: KEY.E,
            name: "Research Shockwave",
            id_string: "researchshockwave",
            description:
              "Cost: getField(upgshockwave.cost) Gold#BRDuration: getField(upgshockwave.buildTime) sec#BRgetField(upgshockwave.description)",
            interfacePosX: 2,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.SWITCH_CC,
            image: "cancel",
            hotkey: KEY.G,
            name: "Back",
            id_string: "back_basic",
            description: "Back to main menu",
            interfacePosX: 4,
            interfacePosY: 1,
            commandCard: 1,
            targetCC: 0,
          },

          {
            type: COMMAND.SWITCH_CC,
            image: "cancel",
            hotkey: KEY.G,
            name: "Back",
            id_string: "back_humans",
            description: "Back to main menu",
            interfacePosX: 4,
            interfacePosY: 1,
            commandCard: 2,
            targetCC: 0,
          },

          {
            type: COMMAND.SWITCH_CC,
            image: "cancel",
            hotkey: KEY.G,
            name: "Back",
            id_string: "back_beast",
            description: "Back to main menu",
            interfacePosX: 4,
            interfacePosY: 1,
            commandCard: 3,
            targetCC: 0,
          },

          {
            type: COMMAND.SWITCH_CC,
            image: "cancel",
            hotkey: KEY.G,
            name: "Back",
            id_string: "back_mech",
            description: "Back to main menu",
            interfacePosX: 4,
            interfacePosY: 1,
            commandCard: 4,
            targetCC: 0,
          },

          // No longer used in the base game but needed for backwards compatability for mods
          {
            type: COMMAND.SWITCH_CC,
            image: "cancel",
            hotkey: KEY.G,
            name: "Back",
            id_string: "back",
            description: "Back to main menu",
            interfacePosX: 4,
            interfacePosY: 1,
            commandCard: 1,
            targetCC: 0,
          },

          // No longer used in the base game but needed for backwards compatability for mods
          {
            type: COMMAND.SWITCH_CC,
            image: "cancel",
            hotkey: KEY.G,
            name: "Back",
            id_string: "back2",
            description: "Back to main menu",
            interfacePosX: 4,
            interfacePosY: 1,
            commandCard: 2,
            targetCC: 0,
          },
          {
            type: COMMAND.SWITCH_CC,
            image: "cancel",
            hotkey: KEY.G,
            name: "Back",
            id_string: "back3",
            description: "Back to main menu",
            interfacePosX: 4,
            interfacePosY: 1,
            commandCard: 3,
            targetCC: 0,
          },

          {
            type: COMMAND.SWITCH_CC,
            image: "cancel",
            hotkey: KEY.G,
            name: "Back",
            id_string: "back4",
            description: "Back to main menu",
            interfacePosX: 4,
            interfacePosY: 1,
            commandCard: 4,
            targetCC: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgrange",
            isInstant: true,
            image: "rangeUpg",
            hotkey: KEY.W,
            name: "Research Archer Range",
            id_string: "rangeupgrade",
            description:
              "Level add(getUpgradeLevel(upgrange), upgradeCountInResearch(upgrange), 1)#BRCost: getField(upgrange.cost) Gold#BRDuration: getField(upgrange.buildTime) sec#BRgetField(upgrange.description)",
            interfacePosX: 1,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgbeastrange",
            isInstant: true,
            image: "beastRangeUpg",
            hotkey: KEY.T,
            name: "Beast Range Upgrade",
            id_string: "beastrangeupgrade",
            description:
              "Level add(getUpgradeLevel(upgbeastrange), upgradeCountInResearch(upgbeastrange), 1)#BRCost: getField(upgbeastrange.cost) Gold#BRDuration: getField(upgbeastrange.buildTime) sec#BRgetField(upgbeastrange.description)",
            interfacePosX: 3,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgmechrange",
            isInstant: true,
            image: "mechRangeUpg",
            hotkey: KEY.F,
            name: "Mech Range Upgrade",
            id_string: "mechrangeupgrade",
            description:
              "Level add(getUpgradeLevel(upgmechrange), upgradeCountInResearch(upgmechrange), 1)#BRCost: getField(upgmechrange.cost) Gold#BRDuration: getField(upgmechrange.buildTime) sec#BRgetField(upgmechrange.description)",
            interfacePosX: 3,
            interfacePosY: 1,
            commandCard: 0,
          },

          {
            type: COMMAND.UNIVERSAL,
            name: "Dmg Buff",
            id_string: "dmgbuffability",
            image: "worker",
            hotkey: KEY.Q,
            targetIsPoint: true,
            interfacePosX: 0,
            interfacePosY: 1,
            commandCard: 0,
            range: [8],
            description: "Gives a dmg buff",
            aoeRadius: [3.5],
            cooldown2: 10 * 20,
            castingDelay: 1 * 20,
            cooldown: 1.8 * 20,
            launchSound: SOUND.ROUNDHOUSE,
            modifiers: ["dmgbuff"],
          },

          {
            type: COMMAND.UNIVERSAL,
            name: "Invisibility",
            id_string: "invisibilityspell",
            image: "invisibility",
            hotkey: KEY.Q,
            targetIsUnit: true,
            hitsEnemy: false,
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
            range: [9],
            description: "Makes target unit or building invisible and gives a small damage buff",
            castingDelay: 0.05 * 20,
            cooldown: 0.5 * 20,
            manaCost: [50],
            requirementText: ["This spell needs to be researched first"],
            requirementType: ["upginvis"],
            requirementLevel: [1],
            launchSound: SOUND.ROUNDHOUSE,
            modifiers: ["invisibility"],
            attackEffect: "smoke",
          },

          {
            type: COMMAND.UNIVERSAL,
            name: "Summon Skeleton",
            id_string: "summonskeleton",
            image: "skeleton",
            hotkey: KEY.W,
            targetIsPoint: true,
            interfacePosX: 1,
            interfacePosY: 1,
            commandCard: 0,
            range: [6],
            description: "Summons a skeleton that has a limited lifetime",
            castingDelay: 0.05 * 20,
            cooldown: 0.5 * 20,
            manaCost: [50],
            requirementText: ["This spell needs to be researched first"],
            requirementType: ["upgskeleton"],
            requirementLevel: [1],
            launchSound: SOUND.ROUNDHOUSE,
            summonedUnits: ["skeleton"],
            attackEffect: "smoke",
            requiresVision: true,
          },

          {
            type: COMMAND.MAKEBUILDING,
            unitType: "church",
            image: "church",
            hotkey: KEY.A,
            name: "Build Church",
            id_string: "buildchurch",
            description:
              "Cost: getField(church.cost) Gold#BRDuration: getField(church.buildTime) sec#BRgetField(church.description)",
            targetIsPoint: true,
            commandCard: 2,
            interfacePosX: 0,
            interfacePosY: 1,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upginvis",
            id_string: "researchinvisibility",
            isInstant: true,
            image: "invisibility",
            hotkey: KEY.Q,
            name: "Research Invisibility",
            id_string: "researchinvisibility",
            description:
              "Cost: getField(upginvis.cost) Gold#BRDuration: getField(upginvis.buildTime) sec#BRgetField(upginvis.description)",
            interfacePosX: 0,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgskeleton",
            isInstant: true,
            image: "skeleton",
            hotkey: KEY.W,
            name: "Research Summon Skeleton",
            id_string: "researchsummonskeleton",
            description:
              "Cost: getField(upgskeleton.cost) Gold#BRDuration: getField(upgskeleton.buildTime) sec#BRgetField(upgskeleton.description)",
            interfacePosX: 1,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upghealingward",
            id_string: "researchsummonhealingward",
            isInstant: true,
            image: "heal",
            hotkey: KEY.W,
            name: "Research Summon Healing Ward",
            id_string: "researchsummonhealingward",
            description:
              "Cooldown: getField(summonhealingward.cooldown2)#BRSummons a healing ward that heals nearby allied units.",
            interfacePosX: 1,
            interfacePosY: 0,
            cooldown2: 0.5 * 20,
            commandCard: 0,
          },

          {
            type: COMMAND.UPGRADE,
            upgrade: "upgtelescope",
            isInstant: true,
            image: "telescope",
            hotkey: KEY.A,
            name: "Airship Telescope Extension",
            id_string: "researchtelescope",
            description:
              "Cost: getField(upgtelescope.cost) Gold#BRDuration: getField(upgtelescope.buildTime) sec#BRgetField(upgtelescope.description)",
            interfacePosX: 0,
            interfacePosY: 1,
            commandCard: 0,
          },

          {
            type: COMMAND.DANCE,
            isInstant: true,
            name: "Dance",
            id_string: "dance",
            dance_img: "dance1",
            chat_str: "/dance",
            hide: true,
          },

          {
            type: COMMAND.DANCE,
            isInstant: true,
            name: "Dance2",
            id_string: "dance2",
            dance_img: "dance2",
            chat_str: "/dance2",
            hide: true,
          },

          {
            type: COMMAND.UNIVERSAL,
            name: "Summon Healing Ward",
            id_string: "summonhealingward",
            image: "heal",
            hotkey: KEY.W,
            targetIsPoint: true,
            interfacePosX: 1,
            interfacePosY: 0,
            commandCard: 0,
            range: [6],
            description:
              "Summons a healing ward that heals nearby allied non-undead units and damages enemy undead units",
            castingDelay: 0.05 * 20,
            cooldown: 0.5 * 20,
            cooldown2: 10 * 20,
            manaCost: [25],
            requirementText: [],
            requirementType: [],
            requirementLevel: [1],
            launchSound: SOUND.WARP,
            summonedUnits: ["healingward"],
            attackEffect: "smoke",
            aoeRadius: [2.75],
            useAoeCursor: true,
            requiresVision: true,
          },

          {
            type: COMMAND.UNIVERSAL,
            name: "Slow Field",
            id_string: "summonslowfield",
            image: "slowfield",
            hotkey: KEY.W,
            targetIsPoint: true,
            interfacePosX: 1,
            interfacePosY: 0,
            commandCard: 0,
            range: [7],
            description: "Summons a slow field that slows nearby ground units.",
            castingDelay: 0.05 * 20,
            cooldown: 0.5 * 2,
            manaCost: [75],
            launchSound: SOUND.WARP,
            summonedUnits: ["slowingfield"],
            attackEffect: "smoke",
            useAoeCursor: true,
            aoeRadius: [3.5],
            requiresVision: true,
          },

          {
            type: COMMAND.MAKEUNIT,
            unitType: "bird",
            isInstant: true,
            image: "bird",
            hotkey: KEY.W,
            name: "Train Bird",
            id_string: "trainbird",
            description:
              "Cost: getField(bird.cost) Gold#BRSupply: getField(bird.supply)#BRDuration: getField(bird.buildTime) sec#BRgetField(bird.description)",
            requirementText: ["Requires a House"],
            requirementType: ["house"],
            requirementLevel: [1],
            interfacePosX: 1,
            interfacePosY: 0,
            commandCard: 0,
          },

          {
            type: COMMAND.UNIVERSAL,
            name: "Fire",
            id_string: "fire",
            image: "heal",
            hotkey: KEY.Q,
            learnHotkey: KEY.W,
            targetIsUnit: true,
            interfacePosX: 0,
            interfacePosY: 1,
            commandCard: 0,
            learnCommandCard: 0,
            learnInterfacePosX: 1,
            learnInterfacePosY: 1,
            requiredLevels: [1, 3, 5],
            range: [2, 6, 10],
            damage: [20, 100, 800],
            description:
              "Summons a healing ward that heals nearby allied non-undead units and damages enemy undead units",
            castingDelay: 0.05 * 20,
            cooldown: 0.5 * 20,
            manaCost: [10, 20, 30],
            launchSound: SOUND.WARP,
            attackEffect: "smoke",
            requiresVision: true,
          },

          {
            type: COMMAND.TELEPORT,
            name: "Teleport",
            id_string: "teleport",
            image: "teleport",
            hotkey: KEY.Q,
            interfacePosX: 0,
            interfacePosY: 1,
            commandCard: 0,
            range: [7],
            description: "Teleports this unit over a short distance",
            castingDelay: 0.05 * 20,
            cooldown: 0.5 * 20,
            manaCost: [0],
            launchSound: SOUND.WARP,
            attackEffect: "smoke",
            requiresVision: true,
          },
          {
            type: COMMAND.MAKEUNIT,
            name: "Train Snake",
            id_string: "train_snake",
            isCommand: true,
            unitType: "snake",
            hotkey: KEY.W,
            targetIsPoint: false,
            targetIsUnit: false,
            isInstant: true,
            isChanneled: false,
            playLaunchSoundOnce: false,
            useAoeCursor: false,
            commandCard: 0,
            interfacePosX: 1,
            interfacePosY: 0,
            requiredLevels: [],
            learnCommandCard: 0,
            learnInterfacePosX: 0,
            learnInterfacePosY: 0,
            learnHotkey: 81,
            image: "snake",
            attackEffectInit: "spell",
            description:
              "Cost: getField(snake.cost) Gold#BRSupply: getField(snake.supply)#BRDuration: getField(snake.buildTime) sec#BRgetField(snake.description)",
            requirementType: ["snakecharmer"],
            requirementLevel: [1],
            requirementText: ["Requires a Snake Charmer"],
            targetRequirements1: [],
            targetRequirements2: [],
            targetRequirements3: [],
            manaCost: [0],
            goldCost: 0,
            aoeRadius: [0],
            damage: [0],
            projectileDamage: [0],
            projectileAoeRadius: [0],
            maximizeRangeWhenCasting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            hitsSelf: true,
            targetFilters: [],
            targetFiltersExclude: [],
            effectScale: 1,
            hasAutocast: false,
            autocastDefault: false,
            autocastConditions: "",
            projectileSpeed: [8],
            duration: 0,
            castingDelay: 0 * 20,
            cooldown: 0 * 20,
            cooldown2: 0 * 20,
            range: [0],
            minRange: [-999],
            bounceDistMin: 0,
            bounceDistMax: 0,
            bouncePower: 0,
            targetCC: 0,
            animationName: "",
            causesFlameDeath: false,
            modifiers: [],
            modifiersSelf: [],
            summonedUnits: [],
            summonsUseWaypoint: false,
            summonsWaypointAMove: false,
            ignoreSupplyCheck: false,
            requiresVision: false,
          },

          {
            type: COMMAND.TELEPORT,
            isCommand: true,
            name: "Flash",
            id_string: "Flash",
            hotkey: 81,
            targetIsPoint: false,
            targetIsUnit: false,
            isInstant: false,
            isChanneled: false,
            playLaunchSoundOnce: false,
            useAoeCursor: false,
            commandCard: 0,
            interfacePosX: 0,
            interfacePosY: 0,
            requiredLevels: [],
            learnCommandCard: 0,
            learnInterfacePosX: 0,
            learnInterfacePosY: 0,
            learnHotkey: 81,
            image: "teleport",
            attackEffectInit: "spell",
            attackEffect: "smoke",
            description: "Teleports the Raider over a short distance (4)",
            requirementType: [],
            requirementLevel: [],
            requirementText: [],
            targetRequirements1: [],
            targetRequirements2: [],
            targetRequirements3: [],
            launchSound: 68,
            manaCost: [25],
            goldCost: 0,
            aoeRadius: [0],
            damage: [0],
            projectileDamage: [0],
            projectileAoeRadius: [0],
            maximizeRangeWhenCasting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            hitsSelf: true,
            targetFilters: [],
            targetFiltersExclude: [],
            effectScale: 1,
            hasAutocast: false,
            autocastDefault: false,
            autocastConditions: "",
            projectileSpeed: [8],
            duration: 0,
            castingDelay: 0 * 20,
            cooldown: 0 * 20,
            cooldown2: 0 * 20,
            range: [4],
            minRange: [-999],
            bounceDistMin: 0,
            bounceDistMax: 0,
            bouncePower: 0,
            targetCC: 0,
            animationName: "",
            causesFlameDeath: false,
            modifiers: [],
            modifiersSelf: ["raiderflashmana"],
            summonedUnits: [],
            summonsUseWaypoint: false,
            summonsWaypointAMove: false,
            ignoreSupplyCheck: false,
            requiresVision: true,
          },
          {
            type: COMMAND.UPGRADE,
            name: "Research Shroud",
            id_string: "researchraidershroudupgrade",
            isCommand: true,
            hotkey: KEY.Q,
            targetIsPoint: false,
            targetIsUnit: false,
            isInstant: true,
            isChanneled: false,
            playLaunchSoundOnce: false,
            useAoeCursor: false,
            commandCard: 0,
            interfacePosX: 0,
            interfacePosY: 0,
            requiredLevels: [],
            learnCommandCard: 0,
            learnInterfacePosX: 0,
            learnInterfacePosY: 0,
            image: "shroud",
            attackEffectInit: "spell",
            description:
              "Cost: getField(raidershroudupgrade.cost) Gold#BRDuration: getField(raidershroudupgrade.buildTime) sec#BRgetField(raidershroudupgrade.description)",
            requirementType: [],
            requirementLevel: [],
            requirementText: [],
            targetRequirements1: [],
            targetRequirements2: [],
            targetRequirements3: [],
            upgrade: "raidershroudupgrade",
            manaCost: [0],
            goldCost: 0,
            aoeRadius: [0],
            damage: [0],
            projectileDamage: [0],
            projectileAoeRadius: [0],
            maximizeRangeWhenCasting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            hitsSelf: true,
            targetFilters: [],
            targetFiltersExclude: ["flying"],
            effectScale: 1,
            hasAutocast: false,
            autocastDefault: false,
            autocastConditions: "",
            projectileSpeed: [8],
            duration: 0,
            castingDelay: 0 * 20,
            cooldown: 0 * 20,
            cooldown2: 0 * 20,
            range: [0],
            minRange: [-999],
            bounceDistMin: 0,
            bounceDistMax: 0,
            bouncePower: 0,
            targetCC: 0,
            animationName: "",
            causesFlameDeath: false,
            modifiers: [],
            modifiersSelf: [],
            summonedUnits: [],
            summonsUseWaypoint: false,
            summonsWaypointAMove: false,
            ignoreSupplyCheck: false,
            requiresVision: false,
          },
          {
            type: COMMAND.UNIVERSAL,
            name: "Shroud",
            id_string: "Shroud",
            isCommand: true,
            hotkey: 87,
            targetIsPoint: true,
            targetIsUnit: false,
            isInstant: false,
            isChanneled: false,
            playLaunchSoundOnce: false,
            useAoeCursor: true,
            commandCard: 0,
            interfacePosX: 1,
            interfacePosY: 0,
            requiredLevels: [],
            learnCommandCard: 0,
            learnInterfacePosX: 0,
            learnInterfacePosY: 0,
            learnHotkey: 81,
            image: "shroud",
            attackEffectInit: "spell",
            attackEffect: "smoke",
            description:
              "Creates a shroud that reduces the range of all units under it to melee for 15 seconds.",
            requirementType: ["raidershroudupgrade"],
            requirementLevel: [1],
            requirementText: ["Shroud must be researched."],
            targetRequirements1: [],
            targetRequirements2: [],
            targetRequirements3: [],
            launchSound: 68,
            manaCost: [30],
            goldCost: 0,
            aoeRadius: [2.7],
            damage: [0],
            projectileDamage: [0],
            projectileAoeRadius: [0],
            maximizeRangeWhenCasting: false,
            hitsFriendly: false,
            hitsEnemy: true,
            hitsSelf: true,
            targetFilters: [],
            targetFiltersExclude: [],
            effectScale: 1,
            hasAutocast: false,
            autocastDefault: false,
            autocastConditions: "",
            projectileSpeed: [8],
            duration: 0,
            castingDelay: 0.05 * 20,
            cooldown: 0.05 * 20,
            cooldown2: 0 * 20,
            range: [6],
            minRange: [-999],
            bounceDistMin: 0,
            bounceDistMax: 0,
            bouncePower: 0,
            targetCC: 0,
            animationName: "",
            causesFlameDeath: false,
            modifiers: [],
            modifiersSelf: [],
            summonedUnits: ["shroudfield"],
            summonsUseWaypoint: false,
            summonsWaypointAMove: false,
            ignoreSupplyCheck: false,
            requiresVision: true,
          },
          {
            type: COMMAND.MAKEUNIT,
            name: "Train Raider",
            id_string: "train_raider",
            isCommand: true,
            image: "raider",
            unitType: "raider",
            hotkey: 69,
            targetIsPoint: false,
            targetIsUnit: false,
            isInstant: true,
            isChanneled: false,
            playLaunchSoundOnce: false,
            useAoeCursor: false,
            commandCard: 0,
            interfacePosX: 2,
            interfacePosY: 0,
            requiredLevels: [],
            learnCommandCard: 0,
            learnInterfacePosX: 0,
            learnInterfacePosY: 0,
            learnHotkey: 81,
            attackEffectInit: "spell",
            description:
              "Cost: getField(raider.cost) Gold#BRSupply: getField(raider.supply)#BRDuration: getField(raider.buildTime) sec#BRgetField(raider.description)",
            requirementType: [],
            requirementLevel: [],
            requirementText: [],
            targetRequirements1: [],
            targetRequirements2: [],
            targetRequirements3: [],
            manaCost: [0],
            goldCost: 0,
            aoeRadius: [0],
            damage: [0],
            projectileDamage: [0],
            projectileAoeRadius: [0],
            maximizeRangeWhenCasting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            hitsSelf: true,
            targetFilters: [],
            targetFiltersExclude: [],
            effectScale: 1,
            hasAutocast: false,
            autocastDefault: false,
            autocastConditions: "",
            projectileSpeed: [8],
            duration: 0,
            castingDelay: 0 * 20,
            cooldown: 0 * 20,
            cooldown2: 0 * 20,
            range: [0],
            minRange: [-999],
            bounceDistMin: 0,
            bounceDistMax: 0,
            bouncePower: 0,
            targetCC: 0,
            animationName: "",
            causesFlameDeath: false,
            modifiers: [],
            modifiersSelf: [],
            summonedUnits: [],
            summonsUseWaypoint: false,
            summonsWaypointAMove: false,
            ignoreSupplyCheck: false,
            requiresVision: false,
          },

          {
            type: COMMAND.MAKEBUILDING,
            unitType: "snakecharmer",
            image: "buildings_snake",
            hotkey: KEY.A,
            name: "Build Snake Charmer",
            id_string: "buildsnakecharmer",
            description:
              "Cost: getField(snakecharmer.cost) Gold#BRDuration: getField(snakecharmer.buildTime) sec#BRgetField(snakecharmer.description)",
            requirementText: ["Requires a Wolves Den"],
            requirementType: ["wolvesden"],
            requirementLevel: [1],
            targetIsPoint: true,
            commandCard: 3,
            interfacePosX: 0,
            interfacePosY: 1,
          },

          {
            type: COMMAND.MAKEBUILDING,
            name: "Build Armory",
            id_string: "buildarmory",
            isCommand: true,
            unitType: "armory",
            hotkey: KEY.R,
            targetIsPoint: true,
            targetIsUnit: false,
            isInstant: false,
            isChanneled: false,
            playLaunchSoundOnce: false,
            useAoeCursor: false,
            commandCard: 2,
            interfacePosX: 3,
            interfacePosY: 0,
            requiredLevels: [],
            learnCommandCard: 0,
            learnInterfacePosX: 0,
            learnInterfacePosY: 0,
            learnHotkey: 81,
            image: "armory",
            attackEffectInit: "spell",
            description:
              "Cost: getField(armory.cost) Gold#BRDuration: getField(armory.buildTime) sec#BRgetField(armory.description)",
            requirementType: ["barracks"],
            requirementLevel: [1],
            requirementText: ["Requires a Barracks"],
            targetRequirements1: [],
            targetRequirements2: [],
            targetRequirements3: [],
            manaCost: [0],
            goldCost: 0,
            aoeRadius: [0],
            damage: [0],
            projectileDamage: [0],
            projectileAoeRadius: [0],
            maximizeRangeWhenCasting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            hitsSelf: true,
            targetFilters: [],
            targetFiltersExclude: [],
            effectScale: 1,
            hasAutocast: false,
            autocastDefault: false,
            autocastConditions: "",
            projectileSpeed: [8],
            duration: 0,
            castingDelay: 0 * 20,
            cooldown: 0 * 20,
            cooldown2: 0 * 20,
            range: [0],
            minRange: [-999],
            bounceDistMin: 0,
            bounceDistMax: 0,
            bouncePower: 0,
            targetCC: 0,
            animationName: "",
            causesFlameDeath: false,
            modifiers: [],
            modifiersSelf: [],
            summonedUnits: [],
            summonsUseWaypoint: false,
            summonsWaypointAMove: false,
            ignoreSupplyCheck: false,
            requiresVision: false,
          },
          {
            type: COMMAND.MAKEUNIT,
            name: "Construct Gatling Gun",
            id_string: "construct_gatling",
            isCommand: true,
            image: "gatling_gun",
            unitType: "gatlinggun",
            hotkey: 87,
            targetIsPoint: false,
            targetIsUnit: false,
            isInstant: true,
            isChanneled: false,
            playLaunchSoundOnce: false,
            useAoeCursor: false,
            commandCard: 0,
            interfacePosX: 1,
            interfacePosY: 0,
            requiredLevels: [],
            learnCommandCard: 0,
            learnInterfacePosX: 0,
            learnInterfacePosY: 0,
            learnHotkey: 81,
            attackEffectInit: "spell",
            description:
              "Cost: getField(gatlinggun.cost) Gold#BRSupply: getField(gatlinggun.supply)#BRDuration: getField(gatlinggun.buildTime) sec#BRgetField(gatlinggun.description)",
            requirementType: [],
            requirementLevel: [],
            requirementText: [],
            targetRequirements1: [],
            targetRequirements2: [],
            targetRequirements3: [],
            manaCost: [0],
            goldCost: 0,
            aoeRadius: [0],
            damage: [0],
            projectileDamage: [0],
            projectileAoeRadius: [0],
            maximizeRangeWhenCasting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            hitsSelf: true,
            targetFilters: [],
            targetFiltersExclude: [],
            effectScale: 1,
            hasAutocast: false,
            autocastDefault: false,
            autocastConditions: "",
            projectileSpeed: [8],
            duration: 0,
            castingDelay: 0 * 20,
            cooldown: 0 * 20,
            cooldown2: 0 * 20,
            range: [0],
            minRange: [-999],
            bounceDistMin: 0,
            bounceDistMax: 0,
            bouncePower: 0,
            targetCC: 0,
            animationName: "",
            causesFlameDeath: false,
            modifiers: [],
            modifiersSelf: [],
            summonedUnits: [],
            summonsUseWaypoint: false,
            summonsWaypointAMove: false,
            ignoreSupplyCheck: false,
            requiresVision: false,
          },
          {
            type: COMMAND.UNIVERSAL,
            name: "Drop Caltrops",
            id_string: "dropcaltrops",
            isCommand: true,
            unitType: "worker",
            hotkey: 81,
            targetIsPoint: false,
            targetIsUnit: false,
            isInstant: true,
            isChanneled: false,
            playLaunchSoundOnce: false,
            useAoeCursor: false,
            commandCard: 0,
            interfacePosX: 0,
            interfacePosY: 0,
            requiredLevels: [],
            learnCommandCard: 0,
            learnInterfacePosX: 0,
            learnInterfacePosY: 0,
            learnHotkey: 81,
            image: "caltropg",
            attackEffectInit: "spell",
            attackEffect: null,
            description:
              "Cost: getField(dropcaltrops.goldCost)#BRCooldown: getField(dropcaltrops.cooldown2)#BRDrops a caltrop on the ground.",
            requirementType: ["advancedworkshop"],
            requirementLevel: [1],
            requirementText: ["Requires an Advanced Workshop"],
            targetRequirements1: [],
            targetRequirements2: [],
            targetRequirements3: [],
            launchSound: 0,
            manaCost: [10],
            goldCost: 5,
            aoeRadius: [0],
            damage: [0],
            projectileDamage: [0],
            projectileAoeRadius: [0],
            maximizeRangeWhenCasting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            hitsSelf: true,
            targetFilters: [],
            targetFiltersExclude: [],
            effectScale: 1,
            hasAutocast: false,
            autocastDefault: false,
            autocastConditions: "",
            projectileSpeed: [8],
            duration: 0,
            castingDelay: 0 * 20,
            cooldown: 0 * 20,
            cooldown2: 4 * 20,
            range: [0],
            minRange: [-999],
            bounceDistMin: 0,
            bounceDistMax: 0,
            bouncePower: 0,
            targetCC: 0,
            animationName: "",
            causesFlameDeath: false,
            modifiers: [],
            modifiersSelf: [],
            summonedUnits: ["caltrop"],
            summonsUseWaypoint: false,
            summonsWaypointAMove: false,
            ignoreSupplyCheck: false,
            requiresVision: false,
          },
          {
            type: COMMAND.UPGRADE,
            name: "Research Spoked Wheel",
            id_string: "spokedwheel_cmd",
            isCommand: true,
            hotkey: 68,
            targetIsPoint: false,
            targetIsUnit: false,
            isInstant: true,
            isChanneled: false,
            playLaunchSoundOnce: false,
            useAoeCursor: false,
            commandCard: 0,
            interfacePosX: 0,
            interfacePosY: 1,
            requiredLevels: [],
            learnCommandCard: 0,
            learnInterfacePosX: 0,
            learnInterfacePosY: 0,
            image: "mechSpeedUpg",
            attackEffectInit: "spell",
            description:
              "Cost: getField(spokedwheel_upgrade.cost) Gold#BRDuration: getField(spokedwheel_upgrade.buildTime) sec#BRgetField(spokedwheel_upgrade.description)",
            requirementType: [],
            requirementLevel: [],
            requirementText: [],
            targetRequirements1: [],
            targetRequirements2: [],
            targetRequirements3: [],
            upgrade: "spokedwheel_upgrade",
            manaCost: [0],
            goldCost: 0,
            aoeRadius: [0],
            damage: [0],
            projectileDamage: [0],
            projectileAoeRadius: [0],
            maximizeRangeWhenCasting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            hitsSelf: true,
            targetFilters: [],
            targetFiltersExclude: [],
            effectScale: 1,
            hasAutocast: false,
            autocastDefault: false,
            autocastConditions: "",
            projectileSpeed: [8],
            duration: 0,
            castingDelay: 0 * 20,
            cooldown: 0 * 20,
            cooldown2: 0 * 20,
            range: [0],
            minRange: [-999],
            bounceDistMin: 0,
            bounceDistMax: 0,
            bouncePower: 0,
            targetCC: 0,
            animationName: "",
            causesFlameDeath: false,
            modifiers: [],
            modifiersSelf: [],
            summonedUnits: [],
            summonsUseWaypoint: false,
            summonsWaypointAMove: false,
            ignoreSupplyCheck: false,
            requiresVision: false,
          },
          {
            type: COMMAND.UPGRADE,
            name: "Research Bird Detection",
            id_string: "bird_detection_cmd",
            isCommand: true,
            hotkey: 83,
            targetIsPoint: false,
            targetIsUnit: false,
            isInstant: true,
            isChanneled: false,
            playLaunchSoundOnce: false,
            useAoeCursor: false,
            commandCard: 0,
            interfacePosX: 1,
            interfacePosY: 1,
            requiredLevels: [],
            learnCommandCard: 0,
            learnInterfacePosX: 0,
            learnInterfacePosY: 0,
            image: "eye",
            attackEffectInit: "spell",
            description:
              "Cost: getField(birddetection.cost) Gold#BRDuration: getField(birddetection.buildTime) sec#BRgetField(birddetection.description)",
            requirementType: ["house"],
            requirementLevel: [1],
            requirementText: ["Requires a House"],
            targetRequirements1: [],
            targetRequirements2: [],
            targetRequirements3: [],
            upgrade: "birddetection",
            manaCost: [0],
            goldCost: 0,
            aoeRadius: [0],
            damage: [0],
            projectileDamage: [0],
            projectileAoeRadius: [0],
            maximizeRangeWhenCasting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            hitsSelf: true,
            targetFilters: [],
            targetFiltersExclude: [],
            effectScale: 1,
            hasAutocast: false,
            autocastDefault: false,
            autocastConditions: "",
            projectileSpeed: [8],
            duration: 0,
            castingDelay: 0 * 20,
            cooldown: 0 * 20,
            cooldown2: 0 * 20,
            range: [0],
            minRange: [-999],
            bounceDistMin: 0,
            bounceDistMax: 0,
            bouncePower: 0,
            targetCC: 0,
            animationName: "",
            causesFlameDeath: false,
            modifiers: [],
            modifiersSelf: [],
            summonedUnits: [],
            summonsUseWaypoint: false,
            summonsWaypointAMove: false,
            ignoreSupplyCheck: false,
            requiresVision: false,
          },
          {
            type: COMMAND.MAKEUNIT,
            name: "Construct Gyrocraft",
            id_string: "construct_gyrocraft",
            isCommand: true,
            image: "gyrocopter",
            unitType: "gyrocraft",
            hotkey: KEY.Q,
            targetIsPoint: false,
            targetIsUnit: false,
            isInstant: true,
            isChanneled: false,
            playLaunchSoundOnce: false,
            useAoeCursor: false,
            commandCard: 0,
            interfacePosX: 0,
            interfacePosY: 0,
            requiredLevels: [],
            learnCommandCard: 0,
            learnInterfacePosX: 0,
            learnInterfacePosY: 0,
            learnHotkey: 69,
            attackEffectInit: "spell",
            description:
              "Cost: getField(gyrocraft.cost) Gold#BRSupply: getField(gyrocraft.supply)#BRDuration: getField(gyrocraft.buildTime) sec#BRgetField(gyrocraft.description)",
            requirementType: [],
            requirementLevel: [],
            requirementText: [],
            targetRequirements1: [],
            targetRequirements2: [],
            targetRequirements3: [],
            manaCost: [0],
            goldCost: 0,
            aoeRadius: [0],
            damage: [0],
            projectileDamage: [0],
            projectileAoeRadius: [0],
            maximizeRangeWhenCasting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            hitsSelf: true,
            targetFilters: [],
            targetFiltersExclude: [],
            effectScale: 1,
            hasAutocast: false,
            autocastDefault: false,
            autocastConditions: "",
            projectileSpeed: [8],
            duration: 0,
            castingDelay: 0 * 20,
            cooldown: 0 * 20,
            cooldown2: 0 * 20,
            range: [0],
            minRange: [-999],
            bounceDistMin: 0,
            bounceDistMax: 0,
            bouncePower: 0,
            targetCC: 0,
            animationName: "",
            causesFlameDeath: false,
            modifiers: [],
            modifiersSelf: [],
            summonedUnits: [],
            summonsUseWaypoint: false,
            summonsWaypointAMove: false,
            ignoreSupplyCheck: false,
            requiresVision: false,
          },
          {
            type: COMMAND.MAKEBUILDING,
            name: "Build Mill",
            id_string: "buildmill",
            isCommand: true,
            unitType: "mill",
            hotkey: KEY.E,
            targetIsPoint: true,
            targetIsUnit: false,
            isInstant: false,
            isChanneled: false,
            playLaunchSoundOnce: false,
            useAoeCursor: false,
            commandCard: 4,
            interfacePosX: 2,
            interfacePosY: 0,
            requiredLevels: [],
            learnCommandCard: 0,
            learnInterfacePosX: 0,
            learnInterfacePosY: 0,
            learnHotkey: 83,
            image: "mill",
            attackEffectInit: "spell",
            description:
              "Cost: getField(mill.cost) Gold#BRDuration: getField(mill.buildTime) sec#BRgetField(mill.description)",
            requirementType: ["workshop"],
            requirementLevel: [1],
            requirementText: ["Requires a workshop"],
            targetRequirements1: [],
            targetRequirements2: [],
            targetRequirements3: [],
            manaCost: [0],
            goldCost: 0,
            aoeRadius: [0],
            damage: [0],
            projectileDamage: [0],
            projectileAoeRadius: [0],
            maximizeRangeWhenCasting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            hitsSelf: true,
            targetFilters: [],
            targetFiltersExclude: [],
            effectScale: 1,
            hasAutocast: false,
            autocastDefault: false,
            autocastConditions: "",
            projectileSpeed: [8],
            duration: 0,
            castingDelay: 0 * 20,
            cooldown: 0 * 20,
            cooldown2: 0 * 20,
            range: [0],
            minRange: [-999],
            bounceDistMin: 0,
            bounceDistMax: 0,
            bouncePower: 0,
            targetCC: 0,
            animationName: "",
            causesFlameDeath: false,
            modifiers: [],
            modifiersSelf: [],
            summonedUnits: [],
            summonsUseWaypoint: false,
            summonsWaypointAMove: false,
            ignoreSupplyCheck: false,
            requiresVision: false,
          },
          {
            type: COMMAND.UNIVERSAL,
            name: "Sprint",
            id_string: "sprint",
            isCommand: true,
            hotkey: 81,
            targetIsPoint: false,
            targetIsUnit: false,
            isInstant: true,
            isChanneled: false,
            playLaunchSoundOnce: false,
            useAoeCursor: false,
            commandCard: 0,
            interfacePosX: 0,
            interfacePosY: 0,
            requiredLevels: [],
            learnCommandCard: 0,
            learnInterfacePosX: 0,
            learnInterfacePosY: 0,
            learnHotkey: 81,
            image: "beastSpeedUpg",
            attackEffectInit: "smoke",
            attackEffect: null,
            description:
              "Cooldown: getField(sprint.cooldown2)#BRThe wolf sprints, temporaily running faster until getting tired and running slower.",
            requirementType: ["sprint_upgrade"],
            requirementLevel: [1],
            requirementText: ["Research in the snake charmer."],
            targetRequirements1: [],
            targetRequirements2: [],
            targetRequirements3: [],
            launchSound: 49,
            manaCost: [0],
            goldCost: 0,
            aoeRadius: [0],
            damage: [0],
            projectileDamage: [0],
            projectileAoeRadius: [0],
            maximizeRangeWhenCasting: false,
            hitsFriendly: false,
            hitsEnemy: false,
            hitsSelf: true,
            targetFilters: [],
            targetFiltersExclude: [],
            effectScale: 1,
            hasAutocast: false,
            autocastDefault: false,
            autocastConditions: "",
            projectileSpeed: [0],
            duration: 0,
            castingDelay: 0 * 20,
            cooldown: 0 * 20,
            cooldown2: 40 * 20,
            range: [0],
            minRange: [-999],
            bounceDistMin: 0,
            bounceDistMax: 0,
            bouncePower: 0,
            targetCC: 0,
            animationName: "",
            causesFlameDeath: false,
            modifiers: ["speeddebuff"],
            modifiersSelf: ["speedbuff", "speeddebuff"],
            summonedUnits: [],
            summonsUseWaypoint: false,
            summonsWaypointAMove: false,
            ignoreSupplyCheck: false,
            requiresVision: false,
          },
          {
            type: COMMAND.UPGRADE,
            name: "Research Wolf Sprint",
            id_string: "research_sprint",
            isCommand: true,
            hotkey: 81,
            targetIsPoint: false,
            targetIsUnit: false,
            isInstant: true,
            isChanneled: false,
            playLaunchSoundOnce: false,
            useAoeCursor: false,
            commandCard: 0,
            interfacePosX: 0,
            interfacePosY: 0,
            requiredLevels: [],
            learnCommandCard: 0,
            learnInterfacePosX: 0,
            learnInterfacePosY: 0,
            image: "beastSpeedUpg",
            attackEffectInit: "spell",
            description:
              "Cost: getField(sprint_upgrade.cost) Gold#BRDuration: getField(sprint_upgrade.buildTime) sec#BRgetField(sprint_upgrade.description)",
            requirementType: ["fortress"],
            requirementLevel: [1],
            requirementText: ["Requires a fortress."],
            targetRequirements1: [],
            targetRequirements2: [],
            targetRequirements3: [],
            upgrade: "sprint_upgrade",
            manaCost: [0],
            goldCost: 0,
            aoeRadius: [0],
            damage: [0],
            projectileDamage: [0],
            projectileAoeRadius: [0],
            maximizeRangeWhenCasting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            hitsSelf: true,
            targetFilters: [],
            targetFiltersExclude: [],
            effectScale: 1,
            hasAutocast: false,
            autocastDefault: false,
            autocastConditions: "",
            projectileSpeed: [8],
            duration: 0,
            castingDelay: 0 * 20,
            cooldown: 0 * 20,
            cooldown2: 0 * 20,
            range: [0],
            minRange: [-999],
            bounceDistMin: 0,
            bounceDistMax: 0,
            bouncePower: 0,
            targetCC: 0,
            animationName: "",
            causesFlameDeath: false,
            modifiers: [],
            modifiersSelf: [],
            summonedUnits: [],
            summonsUseWaypoint: false,
            summonsWaypointAMove: false,
            ignoreSupplyCheck: false,
            requiresVision: false,
          },
          {
            type: COMMAND.UNIVERSAL,
            name: "Explosive Shot",
            id_string: "explosiveshot",
            isCommand: true,
            hotkey: KEY.Q,
            targetIsPoint: false,
            targetIsUnit: true,
            isInstant: false,
            isChanneled: false,
            playLaunchSoundOnce: false,
            useAoeCursor: false,
            commandCard: 0,
            interfacePosX: 0,
            interfacePosY: 0,
            requiredLevels: [],
            learnCommandCard: 0,
            learnInterfacePosX: 0,
            learnInterfacePosY: 0,
            learnHotkey: 81,
            image: "flakUpg",
            attackEffectInit: "spell",
            attackEffect: "flamestrike",
            description:
              "Cooldown: getField(aoeshot.cooldown2)#BRDamage: getField(aoeshot.damage)#BRSelect a flying target to shot a projectile that deals AOE damage.",
            requirementType: ["upgballistaexplosives"],
            requirementLevel: [1],
            requirementText: ["Requires Ballista Black Powder research"],
            targetRequirements1: ["isFlying"],
            targetRequirements2: [],
            targetRequirements3: [],
            launchSound: 20,
            manaCost: [0],
            goldCost: 0,
            aoeRadius: [1.5],
            damage: [45],
            projectileDamage: [0],
            projectileAoeRadius: [0],
            maximizeRangeWhenCasting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            hitsSelf: true,
            targetFilters: ["flying"],
            targetFiltersExclude: [],
            effectScale: 1,
            hasAutocast: false,
            autocastDefault: false,
            autocastConditions: "",
            projectileSpeed: [8],
            duration: 0,
            castingDelay: 0 * 20,
            cooldown: 0 * 20,
            cooldown2: 10 * 20,
            range: [8],
            minRange: [-999],
            bounceDistMin: 0,
            bounceDistMax: 0,
            bouncePower: 0,
            targetCC: 0,
            animationName: "",
            causesFlameDeath: false,
            modifiers: [],
            modifiersSelf: [],
            summonedUnits: [],
            summonsUseWaypoint: false,
            summonsWaypointAMove: false,
            ignoreSupplyCheck: false,
            requiresVision: false,
          },
        ];

        var GraveCliffData = [
          new TileType({
            name: "North",
            img: { x: 390 + 380, y: 418, w: 22, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "West",
            img: { x: 409 + 380, y: 413, w: 24, h: 47 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "East",
            img: { x: 434 + 380, y: 413, w: 18, h: 47 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "South",
            img: { x: 453 + 380, y: 418, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(88, 80, 68)",
          }),

          new TileType({
            name: "SW",
            img: { x: 473 + 380, y: 416, w: 22, h: 42 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "SE",
            img: { x: 496 + 380, y: 416, w: 25, h: 42 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "NW",
            img: { x: 523 + 380, y: 418, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "NE",
            img: { x: 543 + 380, y: 418, w: 24, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "SW2",
            img: { x: 390 + 380, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "SE2",
            img: { x: 413 + 380, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "NW2",
            img: { x: 439 + 380, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "NE2",
            img: { x: 463 + 380, y: 460, w: 20, h: 40 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),

          new TileType({
            name: "Universal",
            img: { x: 397 + 380, y: 168, w: 22, h: 46 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            minimap_color: "rgb(72, 60, 56)",
          }),
        ];
        var Modifiers = [
          {
            name: "InvisibilityBuff",
            id_string: "invisibility",
            image: "invisibility",
            description: "This unit is invisible#BRLasts getField(invisibility.duration) sec",
            duration: 60 * 20,
            fields: ["isInvisible", "dmg"],
            modifications: [1, 2],
            modificationsMultiplier: [1, 1],
          },

          {
            name: "dmgBuff",
            id_string: "dmgbuff",
            image: "attackUpg",
            description: "This unit gets a dmg buff#BRLasts getField(dmgbuff.duration) sec",
            duration: 20 * 20,
            fields: ["dmg"],
            modifications: [5],
            modificationsMultiplier: [1],
          },

          {
            name: "Healed",
            id_string: "healed",
            image: "heal",
            description: "This unit is getting healed",
            duration: 2 * 20,
            fields: ["hpRegenerationRate"],
            modifications: [4 / 20],
            modificationsMultiplier: [1],
          },

          {
            name: "Damaged",
            id_string: "healeddmg",
            image: "skeleton",
            description: "This unit is getting damaged",
            duration: 2 * 20,
            fields: ["hpRegenerationRate"],
            modifications: [-4 / 20],
            modificationsMultiplier: [1],
          },

          {
            name: "Heal Aura",
            id_string: "healaura",
            description: "Heals nearby alled non-undead units",
            duration: 0,
            auraModifiers: ["healed"],
            auraRange: [1.8],
            auraTargetFilters: ["isBiological"],
            auraTargetFiltersExclude: ["isUndead"],
            auraHitsFriendly: true,
            auraHitsEnemy: false,
            auraHitsSelf: false,
            effects: ["aura"],
            auraColor: { red: 150, green: 250, blue: 180, alpha: 0.2 },
            sound: SOUND.AURA_HEAL,
            volume: 0.2,
          },

          {
            name: "Heal Aura Dmg",
            id_string: "healauradmg",
            description: "Heals nearby enemy undead units",
            duration: 0,
            auraModifiers: ["healeddmg"],
            auraHitsFriendly: false,
            auraHitsEnemy: true,
            auraHitsSelf: false,
            auraRange: [3],
            auraTargetFilters: ["isBiological", "isUndead"],
          },

          {
            name: "Slow Field",
            id_string: "slowfield",
            description: "Slows nearby enemy units.",
            duration: 0,
            auraModifiers: ["slowed"],
            auraHitsFriendly: false,
            auraHitsEnemy: true,
            effects: ["aura"],
            auraColor: { red: 70, green: 100, blue: 190, alpha: 0.2 },
            particleMode: 2,
            density: 40,
            auraRange: [4.0],
          },

          {
            name: "Slowed",
            id_string: "slowed",
            image: "slowfield",
            description: "This unit is getting slowed",
            duration: 1.1 * 20,
            fields: ["movementSpeed"],
            modifications: [0],
            modificationsMultiplier: [0.5],
          },

          {
            isModifier: true,
            name: "Raider Fix",
            id_string: "raiderfix",
            description: "This unit is invisible#BRLasts getField(invisibility.duration) sec",
            image: null,
            duration: -20,
            fields: ["weaponCooldown"],
            modifications: [-55.599999999999994],
            modificationsMultiplier: [1],
            maxStack: 1,
            auraModifiers: [],
            auraRange: [],
            auraHitsFriendly: true,
            auraHitsAllied: true,
            auraHitsEnemy: true,
            auraHitsSelf: true,
            auraTargetFilters: [],
            auraTargetFiltersExclude: [],
            disabledCommands: [],
            changeUnitImg: false,
            unitImg: null,
            changeAttackEffect: false,
            attackEffect: null,
            effects: [],
            sound: 0,
            volume: 1,
            killModifiers: [],
          },
          {
            isModifier: true,
            name: "Raider Flash",
            id_string: "raiderflashmana",
            description: "Flash mana cost",
            image: "raider",
            duration: 2,
            fields: ["manaRegenerationRate"],
            modifications: [-24.440625],
            modificationsMultiplier: [1],
            maxStack: 1,
            auraModifiers: [],
            auraRange: [],
            auraHitsFriendly: true,
            auraHitsAllied: true,
            auraHitsEnemy: true,
            auraHitsSelf: true,
            auraTargetFilters: [],
            auraTargetFiltersExclude: [],
            disabledCommands: [],
            changeUnitImg: false,
            unitImg: null,
            changeAttackEffect: false,
            attackEffect: null,
            effects: [],
            sound: 0,
            volume: 1,
            killModifiers: [],
          },
          {
            isModifier: true,
            name: "Rallied",
            id_string: "rallied",
            description: "This unit has been Rallied; it has increased speed and armor.",
            image: "shockwave",
            duration: 160,
            fields: ["movementSpeed", "armor", "imageScale"],
            modifications: [0.025, 2, 0],
            modificationsMultiplier: [1, 1, 1.3],
            maxStack: 1,
            auraModifiers: [],
            auraRange: [],
            auraHitsFriendly: true,
            auraHitsAllied: true,
            auraHitsEnemy: true,
            auraHitsSelf: true,
            auraTargetFilters: [],
            auraTargetFiltersExclude: [],
            disabledCommands: [],
            changeUnitImg: false,
            unitImg: null,
            changeAttackEffect: false,
            attackEffect: null,
            effects: [],
            sound: 0,
            volume: 1,
            killModifiers: [],
          },
          {
            isModifier: true,
            name: "Trapped",
            id_string: "trapped",
            description: "This units foot is severly injured",
            image: "heal",
            duration: 5 * 20,
            fields: ["movementSpeed"],
            modifications: [0],
            modificationsMultiplier: [0.1],
            maxStack: 1,
            auraModifiers: [],
            auraRange: [],
            auraHitsFriendly: false,
            auraHitsAllied: true,
            auraHitsEnemy: true,
            auraHitsSelf: true,
            auraTargetFilters: [],
            auraTargetFiltersExclude: [],
            disabledCommands: [],
            changeUnitImg: false,
            unitImg: null,
            changeAttackEffect: false,
            attackEffect: null,
            effects: [],
            sound: 0,
            volume: 1,
            killModifiers: [],
          },
          {
            isModifier: true,
            name: "Reveal Self",
            id_string: "revealself",
            description: "This units foot is severly injured",
            image: null,
            duration: 40,
            fields: ["isInvisible", "hpRegenerationRate", "isInvincible"],
            modifications: [-1, -0.4, 1],
            modificationsMultiplier: [1, 1, 1],
            maxStack: 1,
            auraModifiers: [],
            auraRange: [],
            auraHitsFriendly: false,
            auraHitsAllied: true,
            auraHitsEnemy: true,
            auraHitsSelf: true,
            auraTargetFilters: [],
            auraTargetFiltersExclude: [],
            disabledCommands: [],
            changeUnitImg: false,
            unitImg: null,
            changeAttackEffect: false,
            attackEffect: null,
            effects: [],
            sound: 0,
            volume: 1,
            killModifiers: [],
          },
          {
            isModifier: true,
            name: "Kill Flash",
            id_string: "killflash",
            description: "Raider cant attack",
            image: null,
            duration: 57,
            fields: ["weaponCooldown"],
            modifications: [55.99999999999999],
            modificationsMultiplier: [1],
            maxStack: 1,
            auraModifiers: [],
            auraRange: [],
            auraHitsFriendly: true,
            auraHitsAllied: true,
            auraHitsEnemy: true,
            auraHitsSelf: true,
            auraTargetFilters: [],
            auraTargetFiltersExclude: [],
            disabledCommands: [],
            changeUnitImg: false,
            unitImg: null,
            changeAttackEffect: false,
            attackEffect: null,
            effects: [],
            sound: 0,
            volume: 1,
            killModifiers: ["raiderflashmana"],
          },
          {
            isModifier: true,
            name: "speedBuff",
            id_string: "speedbuff",
            description: "This unit gets a speed buff#BRLasts getField(dmgbuff.duration) sec",
            image: "beastSpeedUpg",
            duration: 8 * 20,
            fields: ["movementSpeed"],
            modifications: [0.05],
            modificationsMultiplier: [1],
            maxStack: 1,
            auraModifiers: [],
            auraRange: [],
            auraHitsFriendly: true,
            auraHitsAllied: true,
            auraHitsEnemy: true,
            auraHitsSelf: true,
            auraTargetFilters: [],
            auraTargetFiltersExclude: [],
            disabledCommands: [],
            changeUnitImg: false,
            unitImg: null,
            changeAttackEffect: false,
            attackEffect: null,
            effects: [],
            sound: 0,
            volume: 1,
            killModifiers: [],
          },
          {
            isModifier: true,
            name: "speedDebuff",
            id_string: "speeddebuff",
            description: "This unit gets a speed decreasef#BRLasts getField(dmgbuff.duration) sec",
            image: null,
            duration: 13 * 20,
            fields: ["movementSpeed"],
            modifications: [-0.017499999999999998],
            modificationsMultiplier: [1],
            maxStack: 1,
            auraModifiers: [],
            auraRange: [],
            auraHitsFriendly: true,
            auraHitsAllied: true,
            auraHitsEnemy: true,
            auraHitsSelf: true,
            auraTargetFilters: [],
            auraTargetFiltersExclude: [],
            disabledCommands: [],
            changeUnitImg: false,
            unitImg: null,
            changeAttackEffect: false,
            attackEffect: null,
            effects: [],
            sound: 0,
            volume: 1,
            killModifiers: [],
          },
          {
            isModifier: true,
            name: "Shrouded",
            id_string: "raidershrouded",
            description: "This unit is under a Shroud, and has reduced range.",
            image: "shroud",
            duration: 22,
            fields: ["range"],
            modifications: [0.2],
            modificationsMultiplier: [0],
            maxStack: 1,
            auraModifiers: [],
            auraRange: [],
            auraHitsFriendly: true,
            auraHitsAllied: true,
            auraHitsEnemy: true,
            auraHitsSelf: true,
            auraTargetFilters: [],
            auraTargetFiltersExclude: [],
            disabledCommands: [],
            changeUnitImg: false,
            unitImg: null,
            changeAttackEffect: false,
            attackEffect: null,
            effects: [],
            sound: 0,
            volume: 1,
            killModifiers: [],
          },
          {
            isModifier: true,
            name: "Shroud Aura",
            id_string: "raidershroudaura",
            description: "Shrouds nearby units.",
            image: null,
            duration: 0,
            fields: [],
            modifications: [],
            modificationsMultiplier: [],
            maxStack: 1,
            auraModifiers: ["raidershrouded"],
            auraRange: [2],
            auraHitsFriendly: true,
            auraHitsAllied: true,
            auraHitsEnemy: true,
            auraHitsSelf: true,
            auraTargetFilters: [],
            auraTargetFiltersExclude: ["isMechanical"],
            disabledCommands: [],
            changeUnitImg: false,
            unitImg: null,
            changeAttackEffect: false,
            attackEffect: null,
            effects: [],
            sound: 0,
            volume: 1,
            killModifiers: [],
          },
        ];
        var RampTileData = [
          new TileType({
            name: "South West",
            img: { x: 194, y: 422, w: 22, h: 76 },
            sizeX: 1,
            sizeY: 3,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "South East",
            img: { x: 238, y: 422, w: 24, h: 76 },
            sizeX: 1,
            sizeY: 3,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "South Floor",
            img: { x: 217, y: 420, w: 16, h: 78 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "South Floor 2",
            img: { x: 220, y: 341, w: 16, h: 78 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "South Floor 3",
            img: { x: 237, y: 341, w: 16, h: 78 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "West Top",
            img: { x: 265, y: 445, w: 54, h: 47 },
            sizeX: 3,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "West Bottom",
            img: { x: 324, y: 448, w: 52, h: 46 },
            sizeX: 3,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "West Floor",
            img: { x: 267, y: 393, w: 55, h: 52 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "West Floor 2",
            img: { x: 323, y: 393, w: 55, h: 52 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "West Floor 3",
            img: { x: 267, y: 327, w: 55, h: 52 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "East Top",
            img: { x: 342, y: 275, w: 54, h: 45 },
            sizeX: 3,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "East Bottom",
            img: { x: 285, y: 279, w: 52, h: 43 },
            sizeX: 3,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "East Floor",
            img: { x: 334, y: 327, w: 50, h: 53 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "East Floor 2",
            img: { x: 284, y: 221, w: 50, h: 53 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "East Floor 3",
            img: { x: 339, y: 221, w: 50, h: 53 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "North Left",
            img: { x: 72, y: 359, w: 23, h: 51 },
            sizeX: 1,
            sizeY: 3,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "North Right",
            img: { x: 104, y: 359, w: 23, h: 51 },
            sizeX: 1,
            sizeY: 3,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "North Floor",
            img: { x: 127, y: 360, w: 16, h: 23 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "North Floor 2",
            img: { x: 127, y: 386, w: 16, h: 23 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "North Floor 3",
            img: { x: 144, y: 386, w: 16, h: 23 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),
        ];
        var RampTilesEgyptData = [
          new TileType({
            name: "South West",
            img: { x: 582, y: 422, w: 22, h: 76 },
            sizeX: 1,
            sizeY: 3,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "South East",
            img: { x: 626, y: 422, w: 24, h: 76 },
            sizeX: 1,
            sizeY: 3,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "South Floor",
            img: { x: 603, y: 420, w: 16, h: 78 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "South Floor 2",
            img: { x: 608, y: 341, w: 16, h: 78 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "South Floor 3",
            img: { x: 625, y: 341, w: 16, h: 78 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "West Top",
            img: { x: 653, y: 445, w: 54, h: 47 },
            sizeX: 3,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "West Bottom",
            img: { x: 712, y: 448, w: 52, h: 47 },
            sizeX: 3,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "West Floor",
            img: { x: 655, y: 393, w: 55, h: 52 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "West Floor 2",
            img: { x: 711, y: 393, w: 55, h: 52 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "West Floor 3",
            img: { x: 655, y: 327, w: 55, h: 52 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "East Top",
            img: { x: 730, y: 275, w: 54, h: 45 },
            sizeX: 3,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "East Bottom",
            img: { x: 673, y: 279, w: 52, h: 43 },
            sizeX: 3,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "East Floor",
            img: { x: 722, y: 327, w: 50, h: 53 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "East Floor 2",
            img: { x: 672, y: 221, w: 50, h: 53 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "East Floor 3",
            img: { x: 727, y: 221, w: 50, h: 53 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "North Left",
            img: { x: 460, y: 359, w: 23, h: 51 },
            sizeX: 1,
            sizeY: 3,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "North Right",
            img: { x: 492, y: 359, w: 21, h: 51 },
            sizeX: 1,
            sizeY: 3,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "North Floor",
            img: { x: 513, y: 360, w: 16, h: 23 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "North Floor 2",
            img: { x: 513, y: 386, w: 16, h: 23 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "North Floor 3",
            img: { x: 530, y: 386, w: 16, h: 23 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),
        ];
        var RampTilesGraveData = [
          new TileType({
            name: "South West",
            img: { x: 582 + 380, y: 422, w: 22, h: 76 },
            sizeX: 1,
            sizeY: 3,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "South East",
            img: { x: 626 + 380, y: 422, w: 24, h: 76 },
            sizeX: 1,
            sizeY: 3,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "South Floor",
            img: { x: 603 + 380, y: 420, w: 16, h: 78 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "South Floor 2",
            img: { x: 608 + 380, y: 341, w: 16, h: 78 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "South Floor 3",
            img: { x: 625 + 380, y: 341, w: 16, h: 78 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "West Top",
            img: { x: 653 + 380, y: 445, w: 54, h: 47 },
            sizeX: 3,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "West Bottom",
            img: { x: 712 + 380, y: 448, w: 52, h: 47 },
            sizeX: 3,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "West Floor",
            img: { x: 655 + 380, y: 393, w: 55, h: 52 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "West Floor 2",
            img: { x: 711 + 380, y: 393, w: 55, h: 52 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "West Floor 3",
            img: { x: 655 + 380, y: 327, w: 55, h: 52 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "East Top",
            img: { x: 730 + 380, y: 275, w: 54, h: 45 },
            sizeX: 3,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "East Bottom",
            img: { x: 673 + 380, y: 279, w: 52, h: 43 },
            sizeX: 3,
            sizeY: 1,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "East Floor",
            img: { x: 722 + 380, y: 327, w: 50, h: 53 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "East Floor 2",
            img: { x: 672 + 380, y: 221, w: 50, h: 53 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "East Floor 3",
            img: { x: 727 + 380, y: 221, w: 50, h: 53 },
            sizeX: 3,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "North Left",
            img: { x: 460 + 380, y: 359, w: 23, h: 51 },
            sizeX: 1,
            sizeY: 3,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "North Right",
            img: { x: 492 + 380, y: 359, w: 21, h: 51 },
            sizeX: 1,
            sizeY: 3,
            blocking: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "North Floor",
            img: { x: 513 + 380, y: 360, w: 16, h: 23 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "North Floor 2",
            img: { x: 513 + 380, y: 386, w: 16, h: 23 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),

          new TileType({
            name: "North Floor 3",
            img: { x: 530 + 380, y: 386, w: 16, h: 23 },
            sizeX: 1,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
            isCliff: true,
            isRamp: true,
          }),
        ];
        var TileTypes = [
          new TileType({
            name: "Tree 1",
            img: { x: 164, y: 41, w: 28, h: 50 },
            sizeX: 1,
            sizeY: 1,
            isTree: true,
            blocking: true,
          }),

          new TileType({
            name: "Tree 2",
            img: { x: 0, y: 91, w: 28, h: 50 },
            sizeX: 1,
            sizeY: 1,
            isTree: true,
            blocking: true,
          }),

          new TileType({
            name: "Tree 3",
            img: { x: 68, y: 91, w: 28, h: 50 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
          }),

          new TileType({
            name: "Tree 4",
            img: { x: 136, y: 91, w: 28, h: 50 },
            sizeX: 1,
            sizeY: 1,
            isTree: true,
            blocking: true,
          }),

          new TileType({
            name: "Tree 5",
            img: { x: 108, y: 207, w: 17, h: 30 },
            sizeX: 1,
            sizeY: 1,
            isTree: true,
            blocking: true,
          }),

          new TileType({
            name: "Tree 6",
            img: { x: 132, y: 188, w: 38, h: 50 },
            sizeX: 2,
            sizeY: 2,
            isTree: true,
            blocking: true,
          }),

          new TileType({
            name: "Tree 7",
            img: { x: 174, y: 188, w: 35, h: 50 },
            sizeX: 2,
            sizeY: 2,
            isTree: true,
            blocking: true,
          }),

          new TileType({
            name: "Tree 8",
            img: { x: 188, y: 244, w: 64, h: 64 },
            sizeX: 3,
            sizeY: 3,
            isTree: true,
            blocking: true,
          }),

          new TileType({
            name: "Tree 9",
            img: { x: 3, y: 300, w: 42, h: 50 },
            sizeX: 2,
            sizeY: 2,
            isTree: true,
            blocking: true,
          }),

          new TileType({
            name: "Tree 10",
            img: { x: 39, y: 248, w: 52, h: 50 },
            sizeX: 2,
            sizeY: 2,
            isTree: true,
            blocking: true,
          }),

          new TileType({
            name: "Tree 11",
            img: { x: 48, y: 301, w: 52, h: 45 },
            sizeX: 2,
            sizeY: 2,
            blocking: true,
          }),

          new TileType({
            name: "Tree 12",
            img: { x: 105, y: 303, w: 42, h: 50 },
            sizeX: 2,
            sizeY: 2,
            isTree: true,
            blocking: true,
          }),

          new TileType({
            name: "Tree 13",
            img: { x: 150, y: 313, w: 66, h: 65 },
            sizeX: 3,
            sizeY: 3,
            isTree: true,
            blocking: true,
          }),

          new TileType({
            name: "Cactus",
            img: { x: 284, y: 27, w: 18, h: 26 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
          }),

          new TileType({
            name: "Cactus 2",
            img: { x: 284, y: 55, w: 18, h: 26 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
          }),

          new TileType({
            name: "Cactus 3",
            img: { x: 362, y: 119, w: 37, h: 45 },
            sizeX: 2,
            sizeY: 2,
            blocking: true,
          }),

          new TileType({
            name: "Grave Stone 1",
            img: { x: 795, y: 275, w: 20, h: 30 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Grave Stone 2",
            img: { x: 817, y: 276, w: 20, h: 29 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Grave Stone 3",
            img: { x: 839, y: 276, w: 20, h: 29 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Grave Stone 4",
            img: { x: 861, y: 286, w: 18, h: 19 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Grave Stone 5",
            img: { x: 787, y: 306, w: 54, h: 45 },
            sizeX: 3,
            sizeY: 1,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Grave Stone 6",
            img: { x: 843, y: 322, w: 68, h: 29 },
            sizeX: 4,
            sizeY: 1,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Grave Stone 7",
            img: { x: 916, y: 317, w: 38, h: 59 },
            sizeX: 2,
            sizeY: 1,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Egypt Tile 1",
            img: { x: 251, y: 25, w: 28, h: 56 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
          }),

          new TileType({
            name: "Palm",
            img: { x: 306, y: 23, w: 57, h: 71 },
            sizeX: 1,
            sizeY: 1,
            isTree: true,
            blocking: true,
          }),

          new TileType({
            name: "Tree 14",
            img: { x: 45, y: 348, w: 26, h: 25 },
            sizeX: 1,
            sizeY: 1,
            isTree: true,
            blocking: true,
          }),

          new TileType({
            name: "Tree 15",
            img: { x: 491, y: 58, w: 23, h: 60 },
            sizeX: 1,
            sizeY: 1,
            isTree: true,
            blocking: true,
          }),

          new TileType({
            name: "Stone 1",
            img: { x: 0, y: 35, w: 28, h: 50 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
          }),

          new TileType({
            name: "Stone 2",
            img: { x: 28, y: 32, w: 40, h: 60 },
            sizeX: 2,
            sizeY: 2,
            blocking: true,
          }),

          new TileType({
            name: "Stone 3",
            img: { x: 68, y: 35, w: 28, h: 50 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
          }),

          new TileType({
            name: "Stone 4",
            img: { x: 96, y: 35, w: 40, h: 60 },
            sizeX: 2,
            sizeY: 2,
            blocking: true,
          }),

          new TileType({
            name: "Stone 5",
            img: { x: 136, y: 32, w: 28, h: 50 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
          }),

          new TileType({
            name: "Stone 10",
            img: { x: 44, y: 376, w: 18, h: 20 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
          }),

          new TileType({
            name: "Stone 16",
            img: { x: 94, y: 252, w: 36, h: 45 },
            sizeX: 2,
            sizeY: 2,
            blocking: true,
          }),

          new TileType({
            name: "Stone 17",
            img: { x: 130, y: 252, w: 40, h: 45 },
            sizeX: 2,
            sizeY: 2,
            blocking: true,
          }),

          new TileType({
            name: "Stone 18",
            img: { x: 567, y: 50, w: 26, h: 31 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
          }),

          new TileType({
            name: "Wall",
            img: { x: 192, y: 2, w: 60, h: 78 },
            sizeX: 2,
            sizeY: 2,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Wall 2",
            img: { x: 192, y: 80, w: 60, h: 80 },
            sizeX: 2,
            sizeY: 2,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Wall 3",
            img: { x: 0, y: 160, w: 60, h: 80 },
            sizeX: 2,
            sizeY: 2,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Wall 4",
            img: { x: 60, y: 160, w: 28, h: 50 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Wall 5",
            img: { x: 2, y: 354, w: 40, h: 56 },
            sizeX: 2,
            sizeY: 2,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Wall 6",
            img: { x: 518, y: 54, w: 21, h: 63 },
            sizeX: 1,
            sizeY: 3,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Wall 7",
            img: { x: 542, y: 54, w: 21, h: 63 },
            sizeX: 1,
            sizeY: 3,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Wall 8",
            img: { x: 490, y: 121, w: 53, h: 23 },
            sizeX: 3,
            sizeY: 1,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Wall 9",
            img: { x: 491, y: 147, w: 37, h: 45 },
            sizeX: 2,
            sizeY: 2,
            blocking: true,
            noRandomOffset: true,
          }),

          new TileType({
            name: "Invisible Pathing Blocker",
            img: { x: 875, y: 0, w: 16, h: 16 },
            imgEditor: { x: 858, y: 0, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: true,
          }),

          new TileType({
            name: "Invisible Pathing Blocker 2x2",
            img: { x: 892, y: 0, w: 32, h: 32 },
            imgEditor: { x: 858, y: 17, w: 32, h: 32 },
            sizeX: 2,
            sizeY: 2,
            blocking: true,
          }),

          new TileType({
            name: "Flower 2",
            img: { x: 0, y: 0, w: 11, h: 12 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Flower 3",
            img: { x: 11, y: 0, w: 7, h: 6 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Flower 4",
            img: { x: 18, y: 0, w: 11, h: 12 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Flower 5",
            img: { x: 29, y: 0, w: 12, h: 11 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Stone 6",
            img: { x: 181, y: 16, w: 6, h: 6 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Stone 7",
            img: { x: 164, y: 35, w: 6, h: 6 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Stone 8",
            img: { x: 170, y: 35, w: 10, h: 6 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Stone 9",
            img: { x: 180, y: 35, w: 10, h: 6 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Grass d 5",
            img: { x: 41, y: 0, w: 21, h: 15 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Grass d 6",
            img: { x: 62, y: 0, w: 12, h: 10 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Grass d 7",
            img: { x: 74, y: 0, w: 6, h: 9 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Grass d 8",
            img: { x: 80, y: 0, w: 6, h: 9 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Grass d 9",
            img: { x: 86, y: 0, w: 6, h: 9 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Leaf 1",
            img: { x: 176, y: 16, w: 5, h: 7 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Leaf 2",
            img: { x: 188, y: 0, w: 4, h: 7 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Plant 1",
            img: { x: 176, y: 23, w: 13, h: 12 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Wood 1",
            img: { x: 88, y: 160, w: 26, h: 15 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          // Grounds
          new TileType({
            name: "Grass 1",
            img: { x: 92, y: 0, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Grass 2",
            img: { x: 108, y: 0, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Grass 3",
            img: { x: 124, y: 0, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Grass 4",
            img: { x: 140, y: 0, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Grass 5",
            img: { x: 156, y: 0, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Grass 21",
            img: { x: 295, y: 0, w: 17, h: 19 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Grass 22",
            img: { x: 252, y: 0, w: 34, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Water P Big",
            img: { x: 622, y: 0, w: 58, h: 47 },
            sizeX: 3,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Water P Small",
            img: { x: 568, y: 83, w: 18, h: 18 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Water P Big Dark",
            img: { x: 695, y: 51, w: 58, h: 47 },
            sizeX: 3,
            sizeY: 3,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Water P Small Dark",
            img: { x: 568, y: 104, w: 18, h: 18 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            ignoreGrid: true,
            isGround: true,
          }),

          new TileType({
            name: "Ground n 1",
            img: { x: 32, y: 16, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Ground n 2",
            img: { x: 48, y: 16, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Ground n 3",
            img: { x: 64, y: 16, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Ground n 4",
            img: { x: 80, y: 16, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Ground n 5",
            img: { x: 96, y: 16, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Ground n 6",
            img: { x: 112, y: 16, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Ground n 7",
            img: { x: 128, y: 16, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Ground n 8",
            img: { x: 144, y: 16, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Ground n 9",
            img: { x: 32, y: 16, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Ground n 10",
            img: { x: 160, y: 16, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
          }),

          new TileType({
            name: "Ground e 1",
            img: { x: 32, y: 16, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Ground e 2",
            img: { x: 48, y: 16, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Ground e 3",
            img: { x: 64, y: 16, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Snow 1",
            img: { x: 0, y: 245, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Snow 2",
            img: { x: 16, y: 245, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Snow 3",
            img: { x: 0, y: 261, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Snow 4",
            img: { x: 16, y: 261, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Egypt Ground 1",
            img: { x: 484, y: 477, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Egypt Ground 2",
            img: { x: 500, y: 477, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Egypt Ground 3",
            img: { x: 516, y: 477, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Egypt Ground 4",
            img: { x: 532, y: 477, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Egypt Ground 5",
            img: { x: 548, y: 477, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Egypt Ground 6",
            img: { x: 484, y: 477, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Grave Ground 1",
            img: { x: 484 + 380, y: 477, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Grave Ground 2",
            img: { x: 500 + 380, y: 477 + 4, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Grave Ground 3",
            img: { x: 516 + 380, y: 477 + 4, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Grave Ground 4",
            img: { x: 532 + 380, y: 477, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Grave Ground 5",
            img: { x: 548 + 380, y: 477 + 4, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Grave Ground 6",
            img: { x: 484 + 380, y: 477, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isDefault: true,
            isGround: true,
          }),

          new TileType({
            name: "Dirt 1",
            img: { x: 235, y: 166, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Dirt 2",
            img: { x: 241, y: 184, w: 10, h: 9 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Dirt 3",
            img: { x: 240, y: 195, w: 11, h: 10 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Dirt 4",
            img: { x: 236, y: 206, w: 15, h: 15 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Dirt 5",
            img: { x: 235, y: 223, w: 16, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Dirt 6",
            img: { x: 339, y: 0, w: 14, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Dirt 7",
            img: { x: 355, y: 0, w: 13, h: 17 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Dirt 8",
            img: { x: 369, y: 0, w: 18, h: 14 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Dirt 9",
            img: { x: 387, y: 0, w: 19, h: 11 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Big Dirt 1",
            img: { x: 412, y: 1, w: 54, h: 54 },
            sizeX: 3,
            sizeY: 3,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Big Dirt 2",
            img: { x: 467, y: 0, w: 55, h: 54 },
            sizeX: 3,
            sizeY: 3,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Big Dirt 3",
            img: { x: 374, y: 56, w: 54, h: 56 },
            sizeX: 3,
            sizeY: 3,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Big Dirt 4",
            img: { x: 431, y: 57, w: 54, h: 55 },
            sizeX: 3,
            sizeY: 3,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Big Dirt 5",
            img: { x: 423, y: 114, w: 64, h: 63 },
            sizeX: 3,
            sizeY: 3,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Big Dirt 6",
            img: { x: 422, y: 178, w: 64, h: 62 },
            sizeX: 3,
            sizeY: 3,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Snow Ground 1",
            img: { x: 760, y: 0, w: 71, h: 63 },
            sizeX: 4,
            sizeY: 4,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Snow Ground 2",
            img: { x: 835, y: 0, w: 20, h: 16 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Stone Tile 1",
            img: { x: 683, y: 0, w: 14, h: 14 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Stone Tile 2",
            img: { x: 697, y: 0, w: 14, h: 14 },
            sizeX: 1,
            sizeY: 1,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Stone Tile 3",
            img: { x: 683, y: 14, w: 30, h: 30 },
            sizeX: 2,
            sizeY: 2,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Stone Tile 4",
            img: { x: 713, y: 0, w: 46, h: 46 },
            sizeX: 3,
            sizeY: 3,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),

          new TileType({
            name: "Stone Tile 5",
            img: { x: 596, y: 50, w: 94, h: 94 },
            sizeX: 6,
            sizeY: 6,
            blocking: false,
            isGround: true,
            ignoreGrid: true,
            isTexture: true,
          }),
        ];
        /**
         * Dependency on DataCore for SOUND
         */
        var UnitData = [
          {
            name: "Worker",
            id_string: "worker",
            hp: 120,
            dmg: 8,
            repairRate: 12 / 20,
            repairIneffiency: 0.25,
            isHuman: true,
            supply: 1,
            movementSpeed: 2.6 / 20,
            weaponCooldown: 1 * 20,
            weaponDelay: 0.3 * 20,
            armor: 0,
            range: 0.2,
            size: 0.85,
            vision: 8,
            repairCost: 1 / 20,
            circleSize: 0.43,
            circleOffset: 0.125,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              attack: "attack",
              move: "move",
              moveto: "moveto",
              amove: "amove",
              mine: "mine",
              repair: "repair",
              buildcastle: "buildcastle",
              buildbarracks: "buildbarracks",
              buildwatchtower: "buildwatchtower",
              buildhouse: "buildhouse",
              buildmagesguild: "buildmagesguild",
              buildworkshop: "buildworkshop",
              buildforge: "buildforge",
              mech_buildings: "mech_buildings",
              builddragonslair: "builddragonslair",
              buildwolvesden: "buildwolvesden",
              buildanimaltestinglab: "buildanimaltestinglab",
              buildadvancedworkshop: "buildadvancedworkshop",
              buildchurch: "buildchurch",
              buildmill: "buildmill",
              buildarmory: "buildarmory",
              buildsnakecharmer: "buildsnakecharmer",
              basic_buildings: "basic_buildings",
              human_buildings: "human_buildings",
              beast_buildings: "beast_buildings",
              back_basic: "back_basic",
              back_humans: "back_humans",
              back_beast: "back_beast",
              back_mech: "back_mech",
            },
            buildTime: 27 * 20,
            cost: 50,
            healthbarOffset: 0.95,
            healthbarWidth: 0.7,
            img: "worker",
            description:
              "Workers gather gold and construct buildings. They can also fight, but are not very good at it.",
            tabPriority: 10,
            drawOffsetY: 12.5,
            meleeHitSound: 28,
            meleeHitVolume: 0.6,
            painSound: 1,
            painSoundVolume: 0.4,
            painSound2: 55,
            painSoundVolume2: 1,
            deathSound: 2,
            isBiological: true,
            cargoUse: 1,
            isPassive: true,
            bodyPower: 0.8,
          },
          {
            name: "Soldier",
            id_string: "soldier",
            hp: 250,
            armor: 2,
            movementSpeed: 2.5875 / 20,
            dmg: 18,
            tabPriority: 6,
            isHuman: true,
            supply: 2,
            weaponCooldown: 1.15 * 20,
            weaponDelay: 0.25 * 20,
            armor: 1,
            range: 0.2,
            size: 0.95,
            vision: 8,
            circleSize: 0.43,
            circleOffset: 0,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              attack: "attack",
              move: "move",
              moveto: "moveto",
              amove: "amove",
            },
            buildTime: 25 * 20,
            cost: 80,
            healthbarOffset: 1.1,
            healthbarWidth: 0.7,
            img: "soldier",
            description: "Soldiers are basic melee combat units.",
            tabPriority: 7,
            drawOffsetY: 10,
            meleeHitSound: 10,
            meleeHitVolume: 1,
            painSound: 1,
            painSoundVolume: 0.4,
            painSound2: 55,
            painSoundVolume2: 1,
            deathSound: 2,
            isBiological: true,
            cargoUse: 2,
          },
          {
            name: "Archer",
            id_string: "archer",
            hp: 160,
            movementSpeed: 2.52 / 20,
            dmg: 12,
            buildTime: 22 * 20,
            isHuman: true,
            supply: 2,
            weaponCooldown: 1.4 * 20,
            weaponDelay: 0.1 * 20,
            armor: 0,
            range: 5,
            size: 0.95,
            vision: 8,
            projectileSpeed: 12,
            projectileStartHeight: 0.25,
            attackLaunchSound: 3,
            circleSize: 0.43,
            circleOffset: 0,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              attack: "attack",
              move: "move",
              moveto: "moveto",
              amove: "amove",
            },
            cost: 80,
            healthbarOffset: 1.45,
            healthbarWidth: 0.7,
            img: "archer",
            description: "Archers are weaker than Soldiers, but can shoot over distance.",
            projectileLen: 0.2,
            tabPriority: 6,
            drawOffsetY: 10,
            painSound: 1,
            painSoundVolume: 0.4,
            painSound2: 55,
            painSoundVolume2: 1,
            deathSound: 2,
            bodyPower: 0.8,
            isBiological: true,
            canAttackFlying: true,
            cargoUse: 2,
            attackEffect: "arrow",
          },
          {
            name: "Raider",
            id_string: "raider",
            hp: 165,
            startHp: 0,
            mana: 50,
            startMana: 25,
            hpRegenerationRate: 1 / 20,
            manaRegenerationRate: 1 / 20,
            armor: 0,
            supply: 2,
            supplyProvided: 0,
            movementSpeed: 3.2 / 20,
            weaponCooldown: 2.79 * 20,
            weaponDelay: 0.25 * 20,
            dmg: 30,
            dmgModifierAttributes: ["isBiological", "isMechanical"],
            dmgModifierAddition: [21, 21],
            dmgModifierMultiplier: [1, 1],
            lifesteal: 0,
            armorPenetration: 0,
            percDmg: 0,
            dmgCap: 1,
            bouncePower: 0,
            bounceDistMin: 0,
            bounceDistMax: 0,
            range: 0.2,
            minRange: -999,
            aoeRadius: 0,
            attackPrio: 10,
            size: 0.95,
            imageScale: 1,
            vision: 8,
            repairRate: 0 / 20,
            projectileSpeed: 8,
            projectileLen: 0.2,
            attackLaunchSound: 0,
            circleSize: 0.55,
            circleOffset: 0,
            buildTime: 32 * 20,
            cost: 110,
            healthbarOffset: 1.1,
            healthbarWidth: 0.7,
            selectionOffsetY: 0,
            img: "raider",
            description: "Raiders are fast melee combat units with several abilities.",
            experienceLevels: [],
            experience: 0,
            modifiersPerLevel: [],
            experienceRange: 9,
            tabPriority: 13,
            drawOffsetY: 10,
            attackEffect: null,
            painSound: 1,
            painSoundVolume: 0.4,
            painSound2: 55,
            painSoundVolume2: 1,
            deathSound: 2,
            yesSound: 14,
            yesSoundVolume: 0.6,
            readySound: 13,
            readySoundVolume: 0.9,
            bodyPower: 0.8,
            dustCreationChance: 1 / 20,
            visionHeightBonus: 0,
            animSpeed: 1.5,
            oscillationAmplitude: 0,
            height: 0.3,
            acceleration: 0,
            angularVelocity: 0,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              attack: "attack",
              move: "move",
              moveto: "moveto",
              amove: "amove",
              Flash: "Flash",
              Shroud: "Shroud",
            },
            cargoUse: 2,
            cargoSpace: 0,
            projectileStartHeight: 0,
            power: 0,
            lifetime: 0,
            goldReward: 0,
            limit: 0,
            modifiers: [],
            modifiersSelf: ["killflash"],
            spawnModifiers: ["raiderfix"],
            hoverText: "",
            canHaveWaypoint: false,
            isPassive: false,
            causesFlameDeath: false,
            shootingReveals: false,
            shootWhileMoving: false,
            hitscan: false,
            maximizeRangeWhenShooting: false,
            hitsFriendly: false,
            hitsEnemy: true,
            canAttackGround: true,
            canAttackFlying: false,
            isHeatSeeking: true,
            ignoreEnemyHitscan: false,
            controllable: true,
            hasDetection: false,
            expOnlyFromOwnKills: false,
            alliesGetExperience: false,
            alliesGetGold: false,
            isReflectingProjectiles: false,
            isBlockingProjectiles: false,
            takeDamageOnBlock: false,
            preventsLoss: false,
            flying: false,
            uniqueAndHeroic: false,
            isMechanical: false,
            isUndead: false,
            isBiological: true,
            isBeast: false,
            isHuman: false,
            noShow: false,
            noCollision: false,
            isInvisible: false,
            isInvincible: false,
            spawnWithAMove: false,
          },
          {
            name: "Mage",
            id_string: "mage",
            hp: 160,
            supply: 3,
            mana: 100,
            startMana: 50,
            manaRegenerationRate: 0.8 / 20,
            movementSpeed: 2.3 / 20,
            weaponCooldown: 2 * 20,
            weaponDelay: 0.2 * 20,
            dmg: 10,
            armor: 0,
            range: 5,
            size: 0.95,
            vision: 8,
            projectileSpeed: 10,
            projectileStartHeight: 0.5,
            attackLaunchSound: 22,
            circleSize: 0.43,
            circleOffset: 0.125,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              attack: "attack",
              move: "move",
              moveto: "moveto",
              amove: "amove",
              summonslowfield: "summonslowfield",
              fireball: "fireball",
            },
            buildTime: 35 * 20,
            cost: 125,
            healthbarOffset: 1.25,
            healthbarWidth: 0.7,
            img: "mage",
            description: "Mages can cast several spells.",
            tabPriority: 15,
            drawOffsetY: 12,
            painSound: 1,
            painSoundVolume: 0.4,
            painSound2: 55,
            painSoundVolume2: 1,
            deathSound: 2,
            isBiological: true,
            canAttackFlying: true,
            cargoUse: 2,
            bodyPower: 0.8,
            attackEffect: "mageAttack",
            isHuman: true,
          },
          {
            name: "Priest",
            id_string: "priest",
            hp: 160,
            supply: 3,
            mana: 100,
            startMana: 50,
            manaRegenerationRate: 0.8 / 20,
            movementSpeed: 2.3 / 20,
            weaponCooldown: 2 * 20,
            weaponDelay: 0.2 * 20,
            dmg: 10,
            armor: 0,
            range: 5,
            size: 0.95,
            vision: 8,
            projectileSpeed: 10,
            attackLaunchSound: 22,
            circleSize: 0.43,
            circleOffset: -0.05,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              attack: "attack",
              move: "move",
              moveto: "moveto",
              amove: "amove",
              summonhealingward: "summonhealingward",
              invisibilityspell: "invisibilityspell",
            },
            buildTime: 30 * 20,
            cost: 100,
            healthbarOffset: 1.2,
            healthbarWidth: 0.7,
            img: "priest",
            description: "Priests can cast several spells.",
            tabPriority: 14,
            drawOffsetY: 9,
            painSound: 1,
            painSoundVolume: 0.4,
            painSound2: 55,
            painSoundVolume2: 1,
            deathSound: 2,
            isBiological: true,
            canAttackFlying: true,
            cargoUse: 2,
            bodyPower: 0.8,
            attackEffect: "mageAttack",
            isHuman: true,
          },
          {
            name: "Wolf",
            id_string: "wolf",
            hp: 160,
            hpRegenerationRate: 1 / 20,
            supply: 2,
            movementSpeed: 3.45 / 20,
            weaponCooldown: 1.15 * 20,
            weaponDelay: 0.25 * 20,
            dmg: 10,
            armor: 0,
            range: 0.2,
            size: 0.85,
            imageScale: 0.89,
            vision: 8,
            circleSize: 0.47,
            circleOffset: -0.1,
            spawnWithAMove: true,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              attack: "attack",
              move: "move",
              moveto: "moveto",
              amove: "amove",
              sprint: "sprint",
            },
            buildTime: 16 * 20,
            cost: 45,
            healthbarOffset: 1.4,
            healthbarWidth: 0.7,
            img: "wolf",
            description: "Wolves are fast melee units.",
            tabPriority: 6,
            drawOffsetY: 7,
            meleeHitSound: 46,
            meleeHitVolume: 0.7,
            painSound: 47,
            painSoundVolume: 0.8,
            painSound2: 55,
            painSoundVolume2: 1,
            yesSound: 43,
            yesSoundVolume: 1,
            deathSound: 45,
            readySound: 44,
            readySoundVolume: 1,
            isBiological: true,
            bodyPower: 0.5,
            cargoUse: 1,
            isBeast: true,
            lifesteal: 0.01,
          },
          {
            name: "Bird",
            id_string: "bird",
            hp: 75,
            hpRegenerationRate: 0.5 / 20,
            supply: 1,
            movementSpeed: 3 / 20,
            armor: 0,
            size: 0.95,
            vision: 10,
            circleSize: 0.6,
            circleOffset: -2.9,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              move: "move",
              moveto: "moveto",
            },
            buildTime: 20 * 20,
            cost: 75,
            healthbarOffset: 3.8,
            healthbarWidth: 0.8,
            selectionOffsetY: 3,
            img: "bird",
            description: "Birds are fast flying units that can be used for scouting.",
            tabPriority: 4,
            drawOffsetY: 10,
            painSound: 55,
            painSoundVolume: 0.7,
            deathSound: 71,
            yesSound: 70,
            yesSoundVolume: 1,
            readySound: 69,
            readySoundVolume: 1,
            dustCreationChance: -1 / 20,
            flying: true,
            isBiological: true,
            visionHeightBonus: 1,
            animSpeed: 3,
            oscillationAmplitude: 0.05,
            height: 3.3,
            acceleration: 0.05,
            angularVelocity: 0.2,
            removeAfterDeadAnimation: true,
            deathAnimationSpeed: 0.5,
            bodyPower: 0.25,
            slamSound: 72,
          },
          {
            name: "Snake",
            id_string: "snake",
            hp: 80,
            startHp: 0,
            mana: 0,
            startMana: 0,
            hpRegenerationRate: 0.5 / 20,
            armor: 0,
            supply: 2,
            supplyProvided: 0,
            movementSpeed: 2.99 / 20,
            weaponCooldown: 0.67 * 20,
            weaponDelay: 0.15 * 20,
            dmg: 7,
            dmgModifierAttributes: ["flying"],
            dmgModifierAddition: [-0.75],
            dmgModifierMultiplier: [0.75],
            lifesteal: 0,
            armorPenetration: 0,
            percDmg: 0,
            dmgCap: 1,
            bouncePower: 0,
            bounceDistMin: 0,
            bounceDistMax: 0,
            range: 3,
            minRange: -999,
            aoeRadius: 0,
            attackPrio: 10,
            size: 0.95,
            imageScale: 0.55,
            vision: 8,
            repairRate: 0 / 20,
            projectileSpeed: 8,
            projectileLen: 0.2,
            attackLaunchSound: 22,
            circleSize: 0.43,
            circleOffset: 0.125,
            buildTime: 19 * 20,
            cost: 50,
            healthbarOffset: 1,
            healthbarWidth: 0.7,
            selectionOffsetY: 0,
            img: "snake",
            description: "Snakes are vulnerable but quick ranged beasts.",
            experienceLevels: [],
            experience: 0,
            modifiersPerLevel: [],
            experienceRange: 9,
            tabPriority: 6,
            drawOffsetY: 45,
            attackEffect: "mageAttack",
            painSound: 61,
            painSoundVolume: 0.5,
            painSound2: 55,
            painSoundVolume2: 1,
            deathSound: 59,
            yesSound: 60,
            yesSoundVolume: 0.8,
            readySound: 59,
            readySoundVolume: 0.9,
            bodyPower: 0.8,
            dustCreationChance: 1 / 20,
            visionHeightBonus: 0,
            animSpeed: 1,
            oscillationAmplitude: 0,
            height: 0.3,
            acceleration: 0,
            angularVelocity: 0,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              attack: "attack",
              move: "move",
              moveto: "moveto",
              amove: "amove",
            },
            cargoUse: 2,
            cargoSpace: 0,
            projectileStartHeight: 0,
            power: 0,
            lifetime: 0,
            goldReward: 0,
            limit: 0,
            modifiers: [],
            modifiersSelf: [],
            spawnModifiers: [],
            hoverText: "",
            canHaveWaypoint: false,
            isPassive: false,
            causesFlameDeath: false,
            shootingReveals: false,
            shootWhileMoving: false,
            hitscan: false,
            maximizeRangeWhenShooting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            canAttackGround: true,
            canAttackFlying: true,
            isHeatSeeking: true,
            ignoreEnemyHitscan: false,
            controllable: true,
            hasDetection: false,
            expOnlyFromOwnKills: false,
            alliesGetExperience: false,
            alliesGetGold: false,
            isReflectingProjectiles: false,
            isBlockingProjectiles: false,
            takeDamageOnBlock: false,
            preventsLoss: false,
            flying: false,
            uniqueAndHeroic: false,
            isMechanical: false,
            isUndead: false,
            isBiological: true,
            isBeast: true,
            isHuman: false,
            noShow: false,
            noCollision: false,
            isInvisible: false,
            isInvincible: false,
            spawnWithAMove: false,
          },
          {
            name: "Dragon",
            id_string: "dragon",
            hp: 320,
            hpRegenerationRate: 0.8 / 20,
            supply: 4,
            movementSpeed: 3.9 / 20,
            weaponCooldown: 1.65 * 20,
            weaponDelay: 0.05 * 20,
            dmg: 14,
            armor: 1,
            range: 4.5,
            aoeRadius: 0.2,
            size: 2.9,
            vision: 10,
            projectileSpeed: 6,
            attackLaunchSound: 41,
            circleSize: 1.8,
            circleOffset: -3,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              attack: "attack",
              move: "move",
              moveto: "moveto",
              amove: "amove",
            },
            buildTime: 27 * 20,
            cost: 140,
            healthbarOffset: 5.5,
            healthbarWidth: 1.6,
            selectionOffsetY: 3,
            img: "dragon",
            description: "Dragons are big, flying units.",
            tabPriority: 6,
            drawOffsetY: 34,
            painSound: 55,
            painSoundVolume: 1,
            deathSound: 39,
            yesSound: 37,
            yesSoundVolume: 1,
            readySound: 38,
            readySoundVolume: 1,
            dustCreationChance: -1 / 20,
            flying: true,
            isBiological: true,
            isBeast: true,
            visionHeightBonus: 2,
            animSpeed: 3,
            projectileStartHeight: 3,
            oscillationAmplitude: 0.15,
            canAttackFlying: true,
            height: 3.3,
            acceleration: 0.03,
            angularVelocity: 0.0,
            removeAfterDeadAnimation: true,
            shootingReveals: true,
            causesFlameDeath: true,
            attackEffect: "dragonAttack",
          },
          {
            name: "Werewolf",
            id_string: "werewolf",
            hp: 440,
            supply: 6,
            hpRegenerationRate: 1.8 / 20,
            movementSpeed: 2.52 / 20,
            weaponCooldown: 1.4 * 20,
            weaponDelay: 0 * 20,
            dmg: 40,
            armor: 4,
            range: 1.0,
            size: 1.75,
            imageScale: 0.9,
            vision: 8,
            circleSize: 0.93,
            circleOffset: 0,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              attack: "attack",
              move: "move",
              moveto: "moveto",
              amove: "amove",
              smash: "smash",
            },
            buildTime: 40 * 20,
            cost: 225,
            healthbarOffset: 2.6,
            healthbarWidth: 1,
            img: "werewolf",
            description: "Werewolves are very strong melee units.",
            tabPriority: 6,
            drawOffsetY: 21,
            painSound: 47,
            painSoundVolume: 0.5,
            painSound2: 55,
            painSoundVolume2: 1,
            meleeHitSound: 51,
            meleeHitVolume: 1,
            yesSound: 53,
            yesSoundVolume: 1,
            deathSound: 52,
            readySound: 54,
            readySoundVolume: 1,
            isBiological: true,
            isBeast: true,
            cargoUse: 4,
            animSpeed: 3,
            bodyPower: 2.5,
            deathAnimationSpeed: 0.2,
            power: 2,
          },
          {
            name: "Gatling Gun",
            id_string: "gatlinggun",
            hp: 175,
            startHp: 0,
            mana: 30,
            startMana: 10,
            hpRegenerationRate: 0 / 20,
            manaRegenerationRate: 0.13 / 20,
            armor: 0,
            supply: 3,
            supplyProvided: 0,
            movementSpeed: 2.9 / 20,
            weaponCooldown: 1.07 * 20,
            weaponDelay: 0.05 * 20,
            dmg: 13,
            dmgModifierAttributes: [],
            dmgModifierAddition: [],
            dmgModifierMultiplier: [],
            lifesteal: 0,
            armorPenetration: 5,
            percDmg: 0,
            dmgCap: 1,
            bouncePower: 0,
            bounceDistMin: 0,
            bounceDistMax: 0,
            range: 3,
            minRange: -999,
            aoeRadius: 0,
            attackPrio: 10,
            size: 1.01,
            imageScale: 0.9,
            vision: 8,
            repairRate: 0 / 20,
            projectileSpeed: 14,
            projectileLen: 0.4,
            attackLaunchSound: 25,
            circleSize: 0.7,
            circleOffset: 0,
            buildTime: 26 * 20,
            cost: 95,
            healthbarOffset: 1.1,
            healthbarWidth: 1,
            selectionOffsetY: 0,
            img: "gatling_gun",
            description: "Gatling guns are quick and strong mechanical units",
            experienceLevels: [],
            experience: 0,
            modifiersPerLevel: [],
            experienceRange: 9,
            tabPriority: 7,
            drawOffsetY: 19,
            attackEffect: "arrow",
            painSound: 24,
            painSoundVolume: 1,
            painSound2: 0,
            painSoundVolume2: 1,
            deathSound: 29,
            yesSound: 14,
            yesSoundVolume: 0.6,
            readySound: 13,
            readySoundVolume: 0.9,
            bodyPower: 2,
            dustCreationChance: 2 / 20,
            visionHeightBonus: 0,
            animSpeed: 1.5,
            oscillationAmplitude: 0,
            height: 0.3,
            acceleration: 0,
            angularVelocity: 0,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              attack: "attack",
              move: "move",
              moveto: "moveto",
              amove: "amove",
              dropcaltrops: "dropcaltrops",
            },
            cargoUse: 2,
            cargoSpace: 0,
            projectileStartHeight: 0.1,
            power: 2,
            lifetime: 0,
            goldReward: 0,
            limit: 0,
            modifiers: [],
            modifiersSelf: [],
            spawnModifiers: [],
            hoverText: "",
            canHaveWaypoint: false,
            isPassive: false,
            causesFlameDeath: false,
            shootingReveals: false,
            shootWhileMoving: false,
            hitscan: false,
            maximizeRangeWhenShooting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            canAttackGround: true,
            canAttackFlying: false,
            isHeatSeeking: true,
            ignoreEnemyHitscan: false,
            controllable: true,
            hasDetection: false,
            expOnlyFromOwnKills: false,
            alliesGetExperience: false,
            alliesGetGold: false,
            isReflectingProjectiles: false,
            isBlockingProjectiles: false,
            takeDamageOnBlock: false,
            preventsLoss: false,
            flying: false,
            uniqueAndHeroic: false,
            isMechanical: true,
            isUndead: false,
            isBiological: false,
            isBeast: false,
            isHuman: false,
            noShow: false,
            noCollision: false,
            isInvisible: false,
            isInvincible: false,
            spawnWithAMove: false,
          },
          {
            name: "Catapult",
            id_string: "catapult",
            hp: 240,
            supply: 3,
            movementSpeed: 2 / 20,
            weaponCooldown: 3 * 20,
            weaponDelay: 0.65 * 20,
            dmg: 58,
            armor: 2,
            range: 10,
            minRange: 4,
            aoeRadius: 0.5,
            size: 1.5,
            vision: 8,
            projectileSpeed: 8.8,
            attackLaunchSound: 25,
            bounceDistMin: 2,
            bounceDistMax: 4.5,
            circleSize: 0.88,
            circleOffset: 0,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              attack: "attack",
              move: "move",
              moveto: "moveto",
              amove: "amove",
              attackground: "attackground",
            },
            buildTime: 27 * 20,
            isHeatSeeking: false,
            cost: 110,
            healthbarOffset: 1.3,
            healthbarWidth: 1,
            img: "catapult",
            description:
              "Catapults can sling powerful rocks from a great distance, but cannot defend themselves against close-range enemies.",
            tabPriority: 9,
            drawOffsetY: 13,
            painSound: 24,
            painSoundVolume: 1,
            deathSound: 29,
            bodyPower: 2,
            power: 2,
            isMechanical: true,
            dustCreationChance: 2 / 20,
            cargoUse: 4,
            attackEffect: "launchedRock",
          },
          {
            name: "Airship",
            id_string: "airship",
            hp: 250,
            supply: 2,
            movementSpeed: 3.68 / 20,
            weaponCooldown: 1.65 * 20,
            weaponDelay: 0.05 * 20,
            dmg: 0,
            armor: 0,
            range: 0,
            size: 3.28,
            imageScale: 0.8,
            vision: 10,
            projectileSpeed: 6,
            attackLaunchSound: 41,
            circleSize: 1.8,
            circleOffset: -2.5,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              move: "move",
              moveto: "moveto",
              loadin: "loadin",
              unload: "unload",
              directunload: "directunload",
            },
            buildTime: 32 * 20,
            cost: 100,
            healthbarOffset: 5.3,
            healthbarWidth: 1.6,
            selectionOffsetY: 2,
            img: "airship",
            description: "Airships can transport your ground units.",
            tabPriority: 1,
            drawOffsetY: 34,
            painSound: 24,
            painSoundVolume: 1,
            deathSound: 29,
            dustCreationChance: -1 / 20,
            flying: true,
            isMechanical: true,
            isBiological: false,
            visionHeightBonus: 2,
            animSpeed: 2,
            oscillationAmplitude: 0.07,
            height: 3.3,
            acceleration: 0.05,
            angularVelocity: 0.0,
            removeAfterDeadAnimation: true,
            cargoSpace: 10,
            deathAnimationSpeed: 0.3,
            isPassive: true,
          },
          {
            name: "Gyrocraft",
            id_string: "gyrocraft",
            hp: 180,
            startHp: 0,
            mana: 0,
            startMana: 0,
            hpRegenerationRate: 0 / 20,
            manaRegenerationRate: 0.13 / 20,
            armor: 0,
            supply: 3,
            supplyProvided: 0,
            movementSpeed: 4.1 / 20,
            weaponCooldown: 1.5 * 20,
            weaponDelay: 0.05 * 20,
            dmg: 12,
            dmgModifierAttributes: [],
            dmgModifierAddition: [],
            dmgModifierMultiplier: [],
            lifesteal: 0,
            armorPenetration: 0,
            percDmg: 0,
            dmgCap: 1,
            bouncePower: 0,
            bounceDistMin: 0,
            bounceDistMax: 0,
            range: 2.5,
            minRange: -999,
            aoeRadius: 0,
            attackPrio: 10,
            size: 1.65,
            imageScale: 0.95,
            vision: 9,
            repairRate: 0 / 20,
            projectileSpeed: 14,
            projectileLen: 0.4,
            attackLaunchSound: 25,
            circleSize: 1,
            circleOffset: -1.95,
            buildTime: 30 * 20,
            cost: 110,
            healthbarOffset: 3.6,
            healthbarWidth: 1,
            selectionOffsetY: 1.7,
            img: "gyrocopter",
            description: "Gyrocrafts are speedy flying mechanical units.",
            experienceLevels: [],
            experience: 0,
            modifiersPerLevel: [],
            experienceRange: 9,
            tabPriority: 6,
            drawOffsetY: 20,
            attackEffect: "arrow",
            painSound: 24,
            painSoundVolume: 1,
            painSound2: 0,
            painSoundVolume2: 1,
            deathSound: 29,
            yesSound: 14,
            yesSoundVolume: 0.6,
            readySound: 13,
            readySoundVolume: 0.9,
            bodyPower: 2,
            dustCreationChance: 2 / 20,
            visionHeightBonus: 2,
            animSpeed: 1.3,
            oscillationAmplitude: 0.12,
            height: 2,
            acceleration: 0.06,
            angularVelocity: 0,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              attack: "attack",
              move: "move",
              moveto: "moveto",
              amove: "amove",
            },
            cargoUse: -1,
            cargoSpace: 0,
            projectileStartHeight: 4,
            power: 2,
            lifetime: 0,
            goldReward: 0,
            limit: 0,
            modifiers: [],
            modifiersSelf: [],
            spawnModifiers: [],
            hoverText: "",
            canHaveWaypoint: false,
            isPassive: false,
            causesFlameDeath: false,
            shootingReveals: true,
            shootWhileMoving: false,
            hitscan: false,
            maximizeRangeWhenShooting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            canAttackGround: true,
            canAttackFlying: true,
            isHeatSeeking: true,
            ignoreEnemyHitscan: false,
            controllable: true,
            hasDetection: false,
            expOnlyFromOwnKills: false,
            alliesGetExperience: false,
            alliesGetGold: false,
            isReflectingProjectiles: false,
            isBlockingProjectiles: false,
            takeDamageOnBlock: false,
            preventsLoss: false,
            flying: true,
            uniqueAndHeroic: false,
            isMechanical: true,
            isUndead: false,
            isBiological: false,
            isBeast: false,
            isHuman: false,
            noShow: false,
            noCollision: false,
            isInvisible: false,
            isInvincible: false,
            spawnWithAMove: false,
          },
          {
            name: "Ballista",
            id_string: "ballista",
            hp: 285,
            supply: 4,
            movementSpeed: 2.1275 / 20,
            weaponCooldown: 2.5 * 20,
            weaponDelay: 0.3 * 20,
            dmg: 55,
            armor: 4,
            range: 7,
            size: 1.7,
            vision: 8,
            projectileSpeed: 14,
            attackLaunchSound: 25,
            circleSize: 1.1,
            circleOffset: 0,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              attack: "attack",
              move: "move",
              moveto: "moveto",
              amove: "amove",
              explosiveshot: "explosiveshot",
            },
            buildTime: 32 * 20,
            cost: 150,
            healthbarOffset: 1.8,
            healthbarWidth: 1,
            img: "ballista",
            description: "Ballistas are slow but strong anti air units.",
            tabPriority: 8,
            drawOffsetY: 20,
            painSound: 24,
            painSoundVolume: 1,
            deathSound: 29,
            bodyPower: 2,
            isMechanical: true,
            isBiological: false,
            dustCreationChance: 2 / 20,
            cargoUse: 4,
            canAttackFlying: true,
            canAttackGround: false,
            attackEffect: "ballista",
            projectileStartHeight: 1,
            power: 2,
          },
          {
            name: "Skeleton",
            id_string: "skeleton",
            hp: 230,
            supply: 0,
            movementSpeed: 2.07 / 20,
            weaponCooldown: 1.25 * 20,
            weaponDelay: 0.25 * 20,
            dmg: 18,
            armor: 0,
            range: 0.2,
            size: 0.95,
            vision: 8,
            circleSize: 0.43,
            circleOffset: 0.125,
            commands: {
              stop: "stop",
              holdposition: "holdposition",
              attack: "attack",
              move: "move",
              moveto: "moveto",
              amove: "amove",
            },
            buildTime: 23 * 20,
            cost: 0,
            healthbarOffset: 1,
            healthbarWidth: 0.7,
            img: "skeleton",
            description:
              "Skeletons are basic melee combat units. They are undead, that means they take damage from healing spells.",
            tabPriority: 7,
            drawOffsetY: 6,
            meleeHitSound: 10,
            meleeHitVolume: 1,
            painSound: 61,
            painSoundVolume: 0.5,
            painSound2: 55,
            painSoundVolume2: 1,
            yesSound: 60,
            yesSoundVolume: 0.8,
            deathSound: 59,
            readySound: 59,
            cargoUse: 2,
            lifetime: 700,
            isBiological: false,
            isUndead: true,
            summonTime: 40,
          },
          {
            name: "Healing Ward",
            id_string: "healingward",
            hp: 50,
            supply: 0,
            movementSpeed: 0 / 20,
            armor: 2,
            size: 0.85,
            vision: 7,
            circleSize: 0.6,
            circleOffset: 0,
            commands: {},
            buildTime: 45 * 20,
            cost: 0,
            healthbarOffset: 1.75,
            healthbarWidth: 0.7,
            img: "totem",
            description:
              "Healing Wards heal nearby allied non-undead units and damage enemy undead units.",
            tabPriority: 4,
            drawOffsetY: 7.5,
            painSound: 24,
            painSoundVolume: 1,
            deathSound: 29,
            dustCreationChance: -1 / 20,
            animSpeed: 5,
            deathAnimationSpeed: 0.3,
            spawnModifiers: ["healaura", "healauradmg"],
            lifetime: 300,
            attackPrio: 6,
            idleFrames: [0, 1, 2, 3, 2, 1],
            summonTime: 16,
            noMoveWhenHit: true,
            power: 2,
            isBiological: false,
          },
          {
            name: "Slowing Field",
            id_string: "slowingfield",
            hp: 999999,
            supply: 0,
            movementSpeed: 0 / 20,
            armor: 2,
            size: 0.85,
            vision: -1,
            circleSize: 0.6,
            circleOffset: 0,
            commands: {},
            buildTime: 45 * 20,
            cost: 0,
            healthbarOffset: 1.75,
            healthbarWidth: 0.7,
            img: "totem",
            description: "Creates an aura that slows down the movement speed of ground units.",
            tabPriority: 2,
            drawOffsetY: 7.5,
            dustCreationChance: -1 / 20,
            animSpeed: 5,
            isInvincible: true,
            noShow: true,
            noCollision: true,
            deathAnimationSpeed: 0.3,
            spawnModifiers: ["slowfield"],
            lifetime: 500,
            attackPrio: 6,
            idleFrames: [0, 1, 2, 3, 2, 1],
            summonTime: 16,
            noMoveWhenHit: true,
            power: 2,
          },
          {
            name: "Shroud Field",
            id_string: "shroudfield",
            hp: 999999,
            startHp: 0,
            mana: 0,
            startMana: 0,
            hpRegenerationRate: 0 / 20,
            manaRegenerationRate: 0 / 20,
            armor: 0,
            supply: 0,
            supplyProvided: 0,
            movementSpeed: 0 / 20,
            weaponCooldown: 1 * 20,
            weaponDelay: 1 * 20,
            dmg: 10,
            dmgModifierAttributes: [],
            dmgModifierAddition: [],
            dmgModifierMultiplier: [],
            lifesteal: 0,
            armorPenetration: 0,
            percDmg: 0,
            dmgCap: 1,
            bouncePower: 0,
            bounceDistMin: 0,
            bounceDistMax: 0,
            range: 0.2,
            minRange: -999,
            aoeRadius: 0,
            attackPrio: 6,
            size: 0.01,
            imageScale: 1,
            vision: -1,
            repairRate: 0 / 20,
            projectileSpeed: 8,
            projectileLen: 0.2,
            attackLaunchSound: 0,
            circleSize: 0.02,
            circleOffset: 0,
            buildTime: 45 * 20,
            cost: 0,
            healthbarOffset: 0.2,
            healthbarWidth: 0.5,
            selectionOffsetY: 0,
            img: "shroud",
            description: "Creates an aura that reduces all units under it to melee range.",
            experienceLevels: [],
            experience: 0,
            modifiersPerLevel: [],
            experienceRange: 9,
            tabPriority: 4,
            drawOffsetY: 46,
            attackEffect: null,
            painSound: 0,
            painSoundVolume: 1,
            painSound2: 0,
            painSoundVolume2: 1,
            deathSound: 0,
            yesSound: 14,
            yesSoundVolume: 0.6,
            readySound: 13,
            readySoundVolume: 0.9,
            bodyPower: 0.8,
            dustCreationChance: -1 / 20,
            visionHeightBonus: 0,
            animSpeed: 6,
            oscillationAmplitude: 0,
            height: 0.3,
            acceleration: 0,
            angularVelocity: 0,
            commands: {},
            cargoUse: -1,
            cargoSpace: 0,
            projectileStartHeight: 0,
            power: 2,
            lifetime: 300,
            goldReward: 0,
            limit: 0,
            modifiers: [],
            modifiersSelf: [],
            spawnModifiers: ["raidershroudaura"],
            hoverText: "",
            canHaveWaypoint: false,
            isPassive: false,
            causesFlameDeath: false,
            shootingReveals: false,
            shootWhileMoving: false,
            hitscan: false,
            maximizeRangeWhenShooting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            canAttackGround: true,
            canAttackFlying: false,
            isHeatSeeking: true,
            ignoreEnemyHitscan: false,
            controllable: false,
            hasDetection: false,
            expOnlyFromOwnKills: false,
            alliesGetExperience: false,
            alliesGetGold: false,
            isReflectingProjectiles: false,
            isBlockingProjectiles: false,
            takeDamageOnBlock: false,
            preventsLoss: false,
            flying: true,
            uniqueAndHeroic: false,
            isMechanical: false,
            isUndead: false,
            isBiological: true,
            isBeast: false,
            isHuman: false,
            noShow: false,
            noCollision: true,
            isInvisible: false,
            isInvincible: true,
            spawnWithAMove: false,
          },
          {
            name: "Caltrop",
            id_string: "caltrop",
            hp: 12,
            startHp: 0,
            mana: 0,
            startMana: 0,
            hpRegenerationRate: 0 / 20,
            manaRegenerationRate: 0 / 20,
            armor: 4,
            supply: 0,
            supplyProvided: 0,
            movementSpeed: 0 / 20,
            weaponCooldown: 5 * 20,
            weaponDelay: 0 * 20,
            dmg: 0,
            dmgModifierAttributes: [],
            dmgModifierAddition: [],
            dmgModifierMultiplier: [],
            lifesteal: 0,
            armorPenetration: 0,
            percDmg: 0,
            dmgCap: 1,
            bouncePower: 0,
            bounceDistMin: 0,
            bounceDistMax: 0,
            range: 0.3,
            minRange: -999,
            aoeRadius: 0,
            attackPrio: 10,
            size: 1,
            imageScale: 1.0,
            vision: 0.1,
            repairRate: 0 / 20,
            projectileSpeed: 8,
            projectileLen: 0.2,
            attackLaunchSound: 0,
            circleSize: 0.43,
            circleOffset: 0,
            buildTime: 25 * 20,
            cost: 0,
            healthbarOffset: 1.1,
            healthbarWidth: 0.4,
            selectionOffsetY: 0,
            img: "caltropg",
            description: "Caltrops snare enemy units that walk over them, slowing them down.",
            experienceLevels: [],
            experience: 0,
            modifiersPerLevel: [],
            experienceRange: 9,
            tabPriority: 4,
            drawOffsetY: 10,
            attackEffect: null,
            painSound: 1,
            painSoundVolume: 0.4,
            painSound2: 55,
            painSoundVolume2: 1,
            deathSound: 2,
            yesSound: 14,
            yesSoundVolume: 0.6,
            readySound: 13,
            readySoundVolume: 0.9,
            bodyPower: 0.8,
            dustCreationChance: 1 / 20,
            visionHeightBonus: 0,
            animSpeed: 1.5,
            oscillationAmplitude: 0,
            height: 0.3,
            acceleration: 0,
            angularVelocity: 0,
            commands: {
              stop: "stop",
              attack: "attack",
              amove: "amove",
            },
            cargoUse: -1,
            cargoSpace: 0,
            projectileStartHeight: 0,
            power: 2,
            lifetime: 0,
            goldReward: 0,
            limit: 0,
            modifiers: ["trapped"],
            modifiersSelf: ["revealself"],
            spawnModifiers: [],
            hoverText: "",
            canHaveWaypoint: false,
            isPassive: false,
            causesFlameDeath: false,
            shootingReveals: false,
            shootWhileMoving: false,
            hitscan: false,
            maximizeRangeWhenShooting: false,
            hitsFriendly: true,
            hitsEnemy: true,
            canAttackGround: true,
            canAttackFlying: false,
            isHeatSeeking: true,
            ignoreEnemyHitscan: false,
            controllable: false,
            hasDetection: false,
            expOnlyFromOwnKills: false,
            alliesGetExperience: false,
            alliesGetGold: false,
            isReflectingProjectiles: false,
            isBlockingProjectiles: false,
            takeDamageOnBlock: false,
            preventsLoss: false,
            flying: false,
            uniqueAndHeroic: false,
            isMechanical: true,
            isUndead: false,
            isBiological: false,
            isBeast: false,
            isHuman: false,
            noShow: false,
            noCollision: true,
            isInvisible: true,
            isInvincible: false,
            spawnWithAMove: false,
          },
        ];

        var UpgradesData = [
          {
            isUpgrade: true,
            name: "Research Shroud ",
            id_string: "raidershroudupgrade",
            buildTime: 72 * 20,
            cost: 100,
            maxLevel: 1,
            description: "Allows your Raiders to cast Shroud.",
            image: "soot",
            effectsTypes: [],
            effectsFields: [],
            effectsModifications: [],
            effectsModsMultiplier: [],
            noParallelResearch: false,
          },

          {
            isUpgrade: true,
            name: "Spoked Wheel",
            id_string: "spokedwheel_upgrade",
            buildTime: 36 * 20,
            cost: 100,
            maxLevel: 1,
            description: "Improves the movement speed of the Gatling Gun.",
            image: "mechSpeedUpg",
            effectsTypes: ["gatlinggun"],
            effectsFields: ["movementSpeed"],
            effectsModifications: [0.15 / 20],
            effectsModsMultiplier: [1],
            noParallelResearch: false,
          },

          {
            isUpgrade: true,
            name: "Bird Detection",
            id_string: "birddetection",
            buildTime: 54 * 20,
            cost: 100,
            maxLevel: 1,
            description: "Allows your Birds to see invisible units.",
            image: "eye",
            effectsTypes: ["bird"],
            effectsFields: ["hasDetection"],
            effectsModifications: [1],
            effectsModsMultiplier: [1],
            noParallelResearch: false,
          },
          {
            isUpgrade: true,
            name: "Research Sprint",
            id_string: "sprint_upgrade",
            buildTime: 60 * 20,
            cost: 150,
            maxLevel: 1,
            description: "Allows your wolves to sprint.",
            image: "beastSpeedUpg",
            effectsTypes: [],
            effectsFields: [],
            effectsModifications: [],
            effectsModsMultiplier: [],
            noParallelResearch: false,
          },

          {
            name: "Damage",
            id_string: "upgattack",
            cost: 150,
            buildTime: 90 * 20,
            maxLevel: 5,
            effectsTypes: [
              "worker",
              "soldier",
              "archer",
              "mage",
              "priest",
              "raider",
              "upgattack",
              "upgattack",
            ],
            effectsFields: ["dmg", "dmg", "dmg", "dmg", "dmg", "dmg", "buildTime", "cost"],
            effectsModifications: [1, 1, 1, 1, 1, 3, 20 * 20, 50],
            effectsModsMultiplier: [1, 1, 1, 1, 1, 1, 1, 1],
            description: "Increases the attack damage of your human units.",
            image: "attackUpg",
          },

          {
            name: "Armor",
            id_string: "upgarmor",
            cost: 150,
            buildTime: 90 * 20,
            maxLevel: 5,
            effectsTypes: [
              "worker",
              "soldier",
              "archer",
              "mage",
              "priest",
              "raider",
              "upgarmor",
              "upgarmor",
            ],
            effectsFields: [
              "armor",
              "armor",
              "armor",
              "armor",
              "armor",
              "armor",
              "buildTime",
              "cost",
            ],
            effectsModifications: [1, 1, 1, 1, 1, 1, 20 * 20, 50],
            effectsModsMultiplier: [1, 1, 1, 1, 1, 1, 1, 1],
            description: "Increases the armor of your human units.",
            image: "armorUpg",
          },

          {
            name: "Research Fireball",
            id_string: "upgfireball",
            cost: 100,
            buildTime: 80 * 20,
            maxLevel: 1,
            description: "Allows your Mages to cast Fireball.",
            isUpgrade: true,
            effectsTypes: [],
            effectsFields: [],
            effectsModifications: [],
            effectsModsMultiplier: [],
            image: "flamestrike",
          },

          {
            name: "Research Heal",
            id_string: "upgheal",
            cost: 100,
            buildTime: 72 * 20,
            maxLevel: 1,
            description: "Allows your Priests to cast Heal.",
            effectsTypes: ["upginvis", "upghealingward"],
            effectsFields: ["cost", "cost"],
            effectsModifications: [200, 200],
            effectsModsMultiplier: [1, 1],
            image: "heal",
          },

          {
            name: "Beast Attack",
            id_string: "upgbeastattack",
            cost: 150,
            buildTime: 90 * 20,
            maxLevel: 5,
            effectsTypes: [
              "dragon",
              "wolf",
              "werewolf",
              "snake",
              "upgbeastattack",
              "upgbeastattack",
            ],
            effectsFields: ["dmg", "dmg", "dmg", "dmg", "buildTime", "cost"],
            effectsModifications: [1, 1, 2, 1, 20 * 20, 50],
            effectsModsMultiplier: [1, 1, 1, 1, 1, 1],
            description: "Increases the attack damage of your beast units.",
            image: "dragonAttUpg",
          },

          {
            name: "Beast Defense",
            id_string: "upgbeastdefense",
            cost: 150,
            buildTime: 90 * 20,
            maxLevel: 5,
            effectsTypes: [
              "dragon",
              "wolf",
              "werewolf",
              "snake",
              "upgbeastdefense",
              "upgbeastdefense",
            ],
            effectsFields: ["armor", "armor", "armor", "armor", "buildTime", "cost"],
            effectsModifications: [1, 1, 1, 1, 20 * 20, 50],
            effectsModsMultiplier: [1, 1, 1, 1, 1, 1],
            description: "Increases the armor of your beast units.",
            image: "dragonDefUpg",
          },

          {
            name: "Tower Upgrade",
            id_string: "upgtower",
            cost: 225,
            buildTime: 54 * 20,
            maxLevel: 1,
            effectsTypes: [
              "watchtower",
              "watchtower",
              "watchtower",
              "watchtower2",
              "watchtower2",
              "watchtower2",
            ],
            effectsFields: ["armor", "dmg", "range", "armor", "dmg", "range"],
            effectsModifications: [2, 2, 1, 2, 2, 1],
            effectsModsMultiplier: [1, 1, 1, 1, 1, 1],
            description: "Increases the armor, damage and range of your towers.",
            image: "towerUpg",
          },

          {
            name: "Speed",
            id_string: "upgspeed",
            cost: 140,
            buildTime: 90 * 20,
            maxLevel: 5,
            effectsTypes: ["soldier", "archer", "mage", "priest", "upgspeed", "upgspeed"],
            effectsFields: [
              "movementSpeed",
              "movementSpeed",
              "movementSpeed",
              "movementSpeed",
              "buildTime",
              "cost",
              "buildTime",
              "cost",
              "buildTime",
              "cost",
              "buildTime",
              "cost",
            ],
            effectsModifications: [
              0.25 / 20,
              0.25 / 20,
              0.2 / 20,
              0.2 / 20,
              20 * 20,
              60,
              20 * 20,
              60,
              20 * 20,
              60,
              20 * 20,
              60,
            ],
            effectsModsMultiplier: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            description: "Increases the movement speed of your human units.",
            image: "speedUpg",
          },

          {
            name: "Beast Speed",
            id_string: "upgbeastspeed",
            cost: 140,
            buildTime: 90 * 20,
            maxLevel: 5,
            effectsTypes: ["dragon", "wolf", "werewolf", "upgbeastspeed", "upgbeastspeed"],
            effectsFields: [
              "movementSpeed",
              "movementSpeed",
              "movementSpeed",
              "buildTime",
              "cost",
              "buildTime",
              "cost",
              "buildTime",
              "cost",
              "buildTime",
              "cost",
            ],
            effectsModifications: [
              0.3 / 20,
              0.3 / 20,
              0.25 / 20,
              20 * 20,
              60,
              20 * 20,
              60,
              20 * 20,
              60,
              20 * 20,
              60,
            ],
            effectsModsMultiplier: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            description: "Increases the movement speed of your beast units.",
            image: "beastSpeedUpg",
          },

          {
            name: "Mech Attack",
            id_string: "upgmechattack",
            cost: 150,
            buildTime: 90 * 20,
            maxLevel: 5,
            effectsTypes: [
              "catapult",
              "ballista",
              "gatlinggun",
              "gyrocraft",
              "upgmechattack",
              "upgmechattack",
            ],
            effectsFields: ["dmg", "dmg", "dmg", "dmg", "buildTime", "cost"],
            effectsModifications: [3, 4, 2, 2, 20 * 20, 50],
            effectsModsMultiplier: [1, 1, 1, 1, 1, 1],
            description: "Increases the attack damage of your mechanical units.",
            image: "mechAttUpg",
          },

          {
            name: "Mech Defense",
            id_string: "upgmechdefense",
            cost: 150,
            buildTime: 90 * 20,
            maxLevel: 5,
            effectsTypes: [
              "catapult",
              "ballista",
              "gatlinggun",
              "gyrocraft",
              "upgmechdefense",
              "upgmechdefense",
            ],
            effectsFields: ["armor", "armor", "armor", "armor", "buildTime", "cost"],
            effectsModifications: [1, 1.5, 1, 1, 20 * 20, 50],
            effectsModsMultiplier: [1, 1, 1, 1, 1, 1],
            description: "Increases the armor of your mechanical units.",
            image: "mechDefUpg",
          },

          {
            name: "Mech Speed",
            id_string: "upgmechspeed",
            cost: 125,
            buildTime: 90 * 20,
            maxLevel: 5,
            effectsTypes: ["catapult", "airship", "ballista", "upgmechspeed", "upgmechspeed"],
            effectsFields: [
              "movementSpeed",
              "movementSpeed",
              "movementSpeed",
              "buildTime",
              "cost",
              "buildTime",
              "cost",
              "buildTime",
              "cost",
              "buildTime",
              "cost",
            ],
            effectsModifications: [
              0.15 / 20,
              0.25 / 20,
              0.15 / 20,
              20 * 20,
              50,
              20 * 20,
              50,
              20 * 20,
              50,
              20 * 20,
              50,
            ],
            effectsModsMultiplier: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            description: "Increases the movement speed of your mechanical units.",
            image: "mechSpeedUpg",
          },

          {
            name: "Ballista Black Powder",
            id_string: "upgballistaexplosives",
            cost: 100,
            buildTime: 45 * 20,
            maxLevel: 1,
            effectsTypes: ["ballista"],
            effectsFields: ["aoeRadius"],
            effectsModifications: [0.3],
            effectsModsMultiplier: [1],
            description:
              "Adds splash damage to the default Ballista attack and gives them a powerful anti-air ability.",
            image: "flakUpg",
          },

          {
            name: "Research Shockwave",
            id_string: "upgshockwave",
            cost: 100,
            buildTime: 90 * 20,
            maxLevel: 1,
            description: "Allows your Mages to cast Shockwave.",
            effectsTypes: ["upgheal", "upgfireball"],
            effectsFields: ["cost", "cost"],
            effectsModifications: [200, 200],
            effectsModsMultiplier: [1, 1],
            image: "shockwave",
          },

          {
            name: "Mech Range",
            id_string: "upgmechrange",
            cost: 125,
            buildTime: 90 * 20,
            maxLevel: 5,
            effectsTypes: ["catapult", "ballista", "upgmechrange", "upgmechrange"],
            effectsFields: [
              "range",
              "range",
              "buildTime",
              "cost",
              "buildTime",
              "cost",
              "buildTime",
              "cost",
              "buildTime",
              "cost",
            ],
            effectsModifications: [1, 1, 20 * 20, 50, 20 * 20, 50, 20 * 20, 50, 20 * 20, 50],
            effectsModsMultiplier: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            description:
              "Increases the range of your ranged mechanical units. Has no influence on melee units.",
            image: "mechRangeUpg",
          },

          {
            name: "Archer Range",
            id_string: "upgrange",
            cost: 140,
            buildTime: 90 * 20,
            maxLevel: 1,
            effectsTypes: ["archer"],
            effectsFields: ["range"],
            effectsModifications: [1],
            effectsModsMultiplier: [1],
            description: "Increases the range of your archers.",
            image: "rangeUpg",
          },

          {
            name: "Beast Range",
            id_string: "upgbeastrange",
            cost: 140,
            buildTime: 90 * 20,
            maxLevel: 5,
            effectsTypes: ["dragon", "upgbeastrange", "upgbeastrange"],
            effectsFields: [
              "range",
              "buildTime",
              "cost",
              "buildTime",
              "cost",
              "buildTime",
              "cost",
              "buildTime",
              "cost",
            ],
            effectsModifications: [1, 20 * 20, 60, 20 * 20, 60, 20 * 20, 60, 20 * 20, 60],
            effectsModsMultiplier: [1, 1, 1, 1, 1, 1, 1, 1, 1],
            description:
              "Increases the range of your ranged beast units. Has no influence on melee units.",
            image: "beastRangeUpg",
          },

          {
            name: "Research Invisibility",
            id_string: "upginvis",
            cost: 250,
            buildTime: 72 * 20,
            maxLevel: 1,
            description: "Allows your Priests to cast Invisibility.",
            effectsTypes: ["upgheal", "upghealingward"],
            effectsFields: ["cost", "cost"],
            effectsModifications: [200, 200],
            effectsModsMultiplier: [1, 1],
            image: "invisibility",
          },

          {
            name: "Research Summon Skeleton",
            id_string: "upgskeleton",
            cost: 100,
            buildTime: 72 * 20,
            maxLevel: 1,
            description: "Allows your Mages to summon skeletons.",
            effectsTypes: ["upgslowfield", "upgfireball"],
            effectsFields: ["cost", "cost"],
            effectsModifications: [200, 200],
            effectsModsMultiplier: [1, 1],
            image: "skeleton",
          },

          {
            name: "Research Summon Healing Ward",
            id_string: "upghealingward",
            cost: 100,
            buildTime: 72 * 20,
            maxLevel: 1,
            description: "Allows your Priests to summon a Healing Ward.",
            effectsTypes: ["upgheal", "upginvis"],
            effectsFields: ["cost", "cost"],
            effectsModifications: [200, 200],
            effectsModsMultiplier: [1, 1],
            image: "heal",
          },

          {
            name: "Research Slow Field",
            id_string: "upgslowfield",
            cost: 100,
            buildTime: 72 * 20,
            maxLevel: 1,
            description: "Allows your Mages to create a Slow Field.",
            effectsTypes: ["upgfireball", "upgskeleton"],
            effectsFields: ["cost", "cost"],
            effectsModifications: [200, 200],
            effectsModsMultiplier: [1, 1],
            image: "slowfield",
          },

          {
            name: "Airship Telescope Extension",
            id_string: "upgtelescope",
            cost: 100,
            buildTime: 54 * 20,
            maxLevel: 1,
            description: "Allows your Airships to see invisible units.",
            effectsTypes: ["airship"],
            effectsFields: ["hasDetection"],
            effectsModifications: [1],
            effectsModsMultiplier: [1],
            image: "telescope",
          },
        ];

        // Units
        var basicUnitTypes = UnitData;

        // Buildings
        var basicBuildingTypes = buildingData;

        // Tiles
        var tileTypes = TileTypes;

        // Cliffs
        var cliffs = CliffsData;

        // Cliffs Winter
        var cliffs_winter = CliffsWinterData;

        var egypt_cliffs = CliffsEgyptData;

        var grave_cliffs = GraveCliffData;

        var ramp_tiles = RampTileData;

        var ramp_tiles_egypt = RampTilesEgyptData;

        var ramp_tiles_grave = RampTilesGraveData;

        // Upgrades
        var basicUpgrades = UpgradesData;

        // Commands
        var basicCommands = commands;

        // Modifiers
        var basicModifiers = Modifiers;

        // Setup hotkeys for basic commands
        if (!IS_LOGIC) {
          const specialCommands = ["attack", "stop", "holdposition", "cancel"];

          // Map from unit/building name to a Set containing the names of the units/buildings they are grouped with
          const groups = {};
          // Map from command ID to the name of one of its users
          const commandToUser = {};

          // Create groups of units and buildings that have commands in common
          // Exclude specialCommands and commands that don't have hotkeys
          basicCommands
            .filter((c) => specialCommands.indexOf(c.id_string) < 0)
            .filter((c) => "hotkey" in c)
            .forEach((c) => {
              // Check which units / buildings use this command
              const usesCommand = (type) => c.id_string in type.commands;
              const unitCommandUsers = basicUnitTypes
                .filter((u) => usesCommand(u))
                .map((u) => u.name);
              const buildingCommandUsers = basicBuildingTypes
                .filter((u) => usesCommand(u))
                .map((u) => u.name);

              // Change this code if there is an ability shared between units and buildings
              // Currently the hotkey code is structured assuming there are none
              assert(unitCommandUsers.length == 0 || buildingCommandUsers.length == 0);
              if (unitCommandUsers.length == 0 && buildingCommandUsers.length == 0) return;

              const users = unitCommandUsers.length > 0 ? unitCommandUsers : buildingCommandUsers;
              commandToUser[c.id_string] = users[0];

              // Create a combined group that merges all of users and their existing groups
              let combinedSet = new Set();
              users.forEach(
                (u) => (combinedSet = new Set([...combinedSet, ...tryGet(groups, u, new Set([u]))]))
              );
              users.forEach((u) => (groups[u] = combinedSet));
            });

          // Maps from group name to HotkeyGroup
          const unitHotkeyGroups = {};
          const buildingHotkeyGroups = {};
          // Create HotkeyGroups with HotkeySettings and insert them into unitHotkeyGroups and buildingHotkeyGroups
          for (const cmdID in commandToUser) {
            const command = basicCommands.find((c) => c.id_string == cmdID);
            const cmdUser = commandToUser[cmdID];
            const isUnit = !!basicUnitTypes.find((u) => u.name == cmdUser);

            const groupName = Array.from(groups[cmdUser]).sort().join(" / ");
            const commands = isUnit ? unitHotkeyGroups : buildingHotkeyGroups;

            if (!commands[groupName]) commands[groupName] = new HotkeyGroup(groupName);
            commands[groupName].addChild(new HotkeySetting(command.name, command.hotkey, cmdID));
          }

          const unitHotkeys = new HotkeyGroup("Units", true);
          const buildingHotkeys = new HotkeyGroup("Buildings", true);

          // Insert the groups created earlier into unitHotkeys and buildingHotkeys
          for (const [commands, hotkeys] of [
            [unitHotkeyGroups, unitHotkeys],
            [buildingHotkeyGroups, buildingHotkeys],
          ]) {
            for (const groupName in commands) hotkeys.addChild(commands[groupName]);
          }

          // Add the special commands to their own group
          const commonCommandHotkeys = new HotkeyGroup("Common Commands");
          const getCommonCommandHotkeySetting = (id) => {
            const command = basicCommands.find((c) => c.id_string == id);
            return new HotkeySetting(command.name, command.hotkey, id);
          };
          specialCommands.forEach((id) =>
            commonCommandHotkeys.addChild(getCommonCommandHotkeySetting(id))
          );

          Hotkeys.registerHotkeyGroup(commonCommandHotkeys);
          Hotkeys.registerHotkeyGroup(unitHotkeys);
          Hotkeys.registerHotkeyGroup(buildingHotkeys);

          // Insert the user's custom hotkeys into the basic commands whenever the hotkeys change
          Hotkeys.onHotkeysChanged("COMMANDS", () => {
            const setHotkey = (hotkey) => {
              const command = basicCommands.find((c) => c.id_string == hotkey.id);
              command.hotkey = hotkey.value;

              // Set the hotkey ingame if there is a game running
              if (game?.commands) {
                const gameCommand = game.commands.find((c) => c.getBasicType() == command);
                if (gameCommand) gameCommand.updateHotkey(hotkey.value);
              }
            };

            for (const commands of [unitHotkeyGroups, buildingHotkeyGroups]) {
              for (const groupName in commands)
                commands[groupName].forEach((hotkey) => setHotkey(hotkey));
            }
            commonCommandHotkeys.forEach((hotkey) => setHotkey(hotkey));
          });
        }

        // cliff data
        var cliffTable = [
          { arr: ["*", 1, "*", 0, 0, 0, 0, 0], cliffIndex: 0 },
          { arr: ["*", 0, 0, 1, 0, "*", 0, 0], cliffIndex: 1 },
          { arr: [0, 0, "*", 0, 1, 0, 0, "*"], cliffIndex: 2 },
          { arr: [0, 0, 0, 0, 0, "*", 1, "*"], cliffIndex: 3 },
          { arr: [0, 0, 1, 0, 0, 0, 0, 0], cliffIndex: 4 },
          { arr: [1, 0, 0, 0, 0, 0, 0, 0], cliffIndex: 5 },
          { arr: [0, 0, 0, 0, 0, 0, 0, 1], cliffIndex: 6 },
          { arr: [0, 0, 0, 0, 0, 1, 0, 0], cliffIndex: 7 },
          { arr: ["*", 1, 1, 0, 1, 0, 0, "*"], cliffIndex: 8 },
          { arr: [1, 1, "*", 1, 0, "*", 0, 0], cliffIndex: 9 },
          { arr: ["*", 0, 0, 1, 0, 1, 1, "*"], cliffIndex: 10 },
          { arr: [0, 0, "*", 0, 1, "*", 1, 1], cliffIndex: 11 },
        ];

        // 8 nb's
        var nbCoords = [
          { x: -1, y: -1 },
          { x: 0, y: -1 },
          { x: 1, y: -1 },
          { x: -1, y: 0 },
          { x: 1, y: 0 },
          { x: -1, y: 1 },
          { x: 0, y: 1 },
          { x: 1, y: 1 },
        ];

        // 8 nb's with center field
        var nbCoords2 = [
          { x: -1, y: -1 },
          { x: 0, y: -1 },
          { x: 1, y: -1 },
          { x: -1, y: 0 },
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: -1, y: 1 },
          { x: 0, y: 1 },
          { x: 1, y: 1 },
        ];

        var bucketTable = {
          "-1-1": {
            remove: [
              { x: 1, y: -1 },
              { x: 1, y: 0 },
              { x: 1, y: 1 },
              { x: 0, y: 1 },
              { x: -1, y: 1 },
            ],
            add: [
              { x: -1, y: 1 },
              { x: -1, y: 0 },
              { x: -1, y: -1 },
              { x: 0, y: -1 },
              { x: 1, y: -1 },
            ],
          },
          "0-1": {
            remove: [
              { x: -1, y: 1 },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
            ],
            add: [
              { x: -1, y: -1 },
              { x: 0, y: -1 },
              { x: 1, y: -1 },
            ],
          },
          "1-1": {
            remove: [
              { x: -1, y: -1 },
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
            ],
            add: [
              { x: 1, y: 1 },
              { x: 1, y: 0 },
              { x: 1, y: -1 },
              { x: 0, y: -1 },
              { x: -1, y: -1 },
            ],
          },
          "-10": {
            remove: [
              { x: 1, y: -1 },
              { x: 1, y: 0 },
              { x: 1, y: 1 },
            ],
            add: [
              { x: -1, y: -1 },
              { x: -1, y: 0 },
              { x: -1, y: 1 },
            ],
          },
          10: {
            remove: [
              { x: -1, y: -1 },
              { x: -1, y: 0 },
              { x: -1, y: 1 },
            ],
            add: [
              { x: 1, y: -1 },
              { x: 1, y: 0 },
              { x: 1, y: 1 },
            ],
          },
          "-11": {
            remove: [
              { x: 1, y: 1 },
              { x: 1, y: 0 },
              { x: 1, y: -1 },
              { x: 0, y: -1 },
              { x: -1, y: -1 },
            ],
            add: [
              { x: -1, y: -1 },
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
            ],
          },
          "01": {
            remove: [
              { x: -1, y: -1 },
              { x: 0, y: -1 },
              { x: 1, y: -1 },
            ],
            add: [
              { x: -1, y: 1 },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
            ],
          },
          11: {
            remove: [
              { x: -1, y: 1 },
              { x: -1, y: 0 },
              { x: -1, y: -1 },
              { x: 0, y: -1 },
              { x: 1, y: -1 },
            ],
            add: [
              { x: 1, y: -1 },
              { x: 1, y: 0 },
              { x: 1, y: 1 },
              { x: 0, y: 1 },
              { x: -1, y: 1 },
            ],
          },
        };

        var reversePairs = [
          [
            { x: 0, y: -1 },
            { x: 0, y: 1 },
          ],
          [
            { x: 1, y: 0 },
            { x: -1, y: 0 },
          ],
        ];

        var rampMaps = [
          {
            h: [1, 1, 1, 0, 0, 0, 0, 0, 0],
            rampId: 0,
            clippingPoint: { x: -1, y: 0 },
          },
          {
            h: [0, 0, 1, 0, 0, 1, 0, 0, 1],
            rampId: 1,
            clippingPoint: { x: -2, y: -1 },
          },
          {
            h: [1, 0, 0, 1, 0, 0, 1, 0, 0],
            rampId: 2,
            clippingPoint: { x: 0, y: -1 },
          },
          {
            h: [0, 0, 0, 0, 0, 0, 1, 1, 1],
            rampId: 3,
            clippingPoint: { x: -1, y: -2 },
          },
        ];

        /*
         * Ramps
         * those x, y, addX values and so on work the following: when map is created and ramp field is found, for every cliff there will be
         * x incremented by the x value and y by the y value until reached the last field still contained by the ramp, then once addX and addY will be added
         * and the field that is reached now will be used to place the cliff tile.
         * for the texture: initX and initY will be applied until reached the last field, then the texture will be applied for every loopX and loopY until the last ramp field reached
         */
        var ramps = [
          {
            map: [
              { x: 0, y: 0, cliff: true },
              { x: 1, y: 0, cliff: true },
              { x: 2, y: 0, cliff: true },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
              { x: 2, y: 1 },
              { x: 0, y: 2 },
              { x: 1, y: 2 },
              { x: 2, y: 2 },
            ],
            vec: { x: 0, y: 1 },
            code: "S",
            cliffs: [
              { x: -1, y: -1, cliff: ramp_tiles[0] },
              { x: 1, y: -1, cliff: ramp_tiles[1] },
            ],
            texture: {
              tiles: [ramp_tiles[2], ramp_tiles[3], ramp_tiles[4]],
              initX: -1,
              initY: -1,
              loopX: 1,
              loopY: 0,
              drawX: 0.5,
              drawY: -0.3,
            },
            noRamps: [
              { x: -1, y: -1 },
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
              { x: 3, y: -1 },
              { x: -1, y: 3 },
              { x: 0, y: 3 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
              { x: 3, y: 3 },
            ],
            onlyThisRamp: [
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: -1, y: 2 },
              { x: 3, y: 0 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
            ],
            sameLevel: [
              { x: 0, y: 3 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
            ],
          },

          {
            map: [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 2, y: 0, cliff: true },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
              { x: 2, y: 1, cliff: true },
              { x: 0, y: 2 },
              { x: 1, y: 2 },
              { x: 2, y: 2, cliff: true },
            ],
            vec: { x: -1, y: 0 },
            code: "W",
            cliffs: [
              { x: -1, y: -1, cliff: ramp_tiles[5] },
              { x: -1, y: 1, cliff: ramp_tiles[6] },
            ],
            texture: {
              tiles: [ramp_tiles[7], ramp_tiles[8], ramp_tiles[9]],
              initX: -1,
              initY: -1,
              loopX: 0,
              loopY: 1,
              drawX: 0.3,
              drawY: -0.2,
            },
            noRamps: [
              { x: -1, y: -1 },
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: -1, y: 2 },
              { x: -1, y: 3 },
              { x: 3, y: -1 },
              { x: 3, y: 0 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
              { x: 3, y: 3 },
            ],
            onlyThisRamp: [
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
              { x: 0, y: 3 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
            ],
            sameLevel: [
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: -1, y: 2 },
            ],
          },

          {
            map: [
              { x: 0, y: 0, cliff: true },
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 0, y: 1, cliff: true },
              { x: 1, y: 1 },
              { x: 2, y: 1 },
              { x: 0, y: 2, cliff: true },
              { x: 1, y: 2 },
              { x: 2, y: 2 },
            ],
            vec: { x: 1, y: 0 },
            code: "E",
            cliffs: [
              { x: -1, y: -1, cliff: ramp_tiles[10] },
              { x: -1, y: 1, cliff: ramp_tiles[11] },
            ],
            texture: {
              tiles: [ramp_tiles[12], ramp_tiles[13], ramp_tiles[14]],
              initX: -1,
              initY: -1,
              loopX: 0,
              loopY: 1,
              drawX: 0.5,
              drawY: -0.2,
            },
            noRamps: [
              { x: -1, y: -1 },
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: -1, y: 2 },
              { x: -1, y: 3 },
              { x: 3, y: -1 },
              { x: 3, y: 0 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
              { x: 3, y: 3 },
            ],
            onlyThisRamp: [
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
              { x: 0, y: 3 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
            ],
            sameLevel: [
              { x: 3, y: 0 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
            ],
          },

          {
            map: [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
              { x: 2, y: 1 },
              { x: 0, y: 2, cliff: true },
              { x: 1, y: 2, cliff: true },
              { x: 2, y: 2, cliff: true },
            ],
            vec: { x: 0, y: -1 },
            code: "N",
            cliffs: [
              { x: -1, y: -1, cliff: ramp_tiles[15] },
              { x: 1, y: -1, cliff: ramp_tiles[16] },
            ],
            texture: {
              tiles: [ramp_tiles[17], ramp_tiles[18], ramp_tiles[19]],
              initX: -1,
              initY: -1,
              loopX: 1,
              loopY: 0,
              drawX: 0.5,
              drawY: -0.2,
            },
            noRamps: [
              { x: -1, y: -1 },
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
              { x: 3, y: -1 },
              { x: -1, y: 3 },
              { x: 0, y: 3 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
              { x: 3, y: 3 },
            ],
            onlyThisRamp: [
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: -1, y: 2 },
              { x: 3, y: 0 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
            ],
            sameLevel: [
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
            ],
          },
        ];

        var ramps_egypt = [
          {
            map: [
              { x: 0, y: 0, cliff: true },
              { x: 1, y: 0, cliff: true },
              { x: 2, y: 0, cliff: true },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
              { x: 2, y: 1 },
              { x: 0, y: 2 },
              { x: 1, y: 2 },
              { x: 2, y: 2 },
            ],
            vec: { x: 0, y: 1 },
            code: "S",
            cliffs: [
              { x: -1, y: -1, cliff: ramp_tiles_egypt[0] },
              { x: 1, y: -1, cliff: ramp_tiles_egypt[1] },
            ],
            texture: {
              tiles: [ramp_tiles_egypt[2], ramp_tiles_egypt[3], ramp_tiles_egypt[4]],
              initX: -1,
              initY: -1,
              loopX: 1,
              loopY: 0,
              drawX: 0.5,
              drawY: -0.3,
            },
            noRamps: [
              { x: -1, y: -1 },
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
              { x: 3, y: -1 },
              { x: -1, y: 3 },
              { x: 0, y: 3 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
              { x: 3, y: 3 },
            ],
            onlyThisRamp: [
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: -1, y: 2 },
              { x: 3, y: 0 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
            ],
            sameLevel: [
              { x: 0, y: 3 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
            ],
          },

          {
            map: [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 2, y: 0, cliff: true },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
              { x: 2, y: 1, cliff: true },
              { x: 0, y: 2 },
              { x: 1, y: 2 },
              { x: 2, y: 2, cliff: true },
            ],
            vec: { x: -1, y: 0 },
            code: "W",
            cliffs: [
              { x: -1, y: -1, cliff: ramp_tiles_egypt[5] },
              { x: -1, y: 1, cliff: ramp_tiles_egypt[6] },
            ],
            texture: {
              tiles: [ramp_tiles_egypt[7], ramp_tiles_egypt[8], ramp_tiles_egypt[9]],
              initX: -1,
              initY: -1,
              loopX: 0,
              loopY: 1,
              drawX: 0.3,
              drawY: -0.2,
            },
            noRamps: [
              { x: -1, y: -1 },
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: -1, y: 2 },
              { x: -1, y: 3 },
              { x: 3, y: -1 },
              { x: 3, y: 0 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
              { x: 3, y: 3 },
            ],
            onlyThisRamp: [
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
              { x: 0, y: 3 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
            ],
            sameLevel: [
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: -1, y: 2 },
            ],
          },

          {
            map: [
              { x: 0, y: 0, cliff: true },
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 0, y: 1, cliff: true },
              { x: 1, y: 1 },
              { x: 2, y: 1 },
              { x: 0, y: 2, cliff: true },
              { x: 1, y: 2 },
              { x: 2, y: 2 },
            ],
            vec: { x: 1, y: 0 },
            code: "E",
            cliffs: [
              { x: -1, y: -1, cliff: ramp_tiles_egypt[10] },
              { x: -1, y: 1, cliff: ramp_tiles_egypt[11] },
            ],
            texture: {
              tiles: [ramp_tiles_egypt[12], ramp_tiles_egypt[13], ramp_tiles_egypt[14]],
              initX: -1,
              initY: -1,
              loopX: 0,
              loopY: 1,
              drawX: 0.5,
              drawY: -0.2,
            },
            noRamps: [
              { x: -1, y: -1 },
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: -1, y: 2 },
              { x: -1, y: 3 },
              { x: 3, y: -1 },
              { x: 3, y: 0 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
              { x: 3, y: 3 },
            ],
            onlyThisRamp: [
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
              { x: 0, y: 3 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
            ],
            sameLevel: [
              { x: 3, y: 0 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
            ],
          },

          {
            map: [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
              { x: 2, y: 1 },
              { x: 0, y: 2, cliff: true },
              { x: 1, y: 2, cliff: true },
              { x: 2, y: 2, cliff: true },
            ],
            vec: { x: 0, y: -1 },
            code: "N",
            cliffs: [
              { x: -1, y: -1, cliff: ramp_tiles_egypt[15] },
              { x: 1, y: -1, cliff: ramp_tiles_egypt[16] },
            ],
            texture: {
              tiles: [ramp_tiles_egypt[17], ramp_tiles_egypt[18], ramp_tiles_egypt[19]],
              initX: -1,
              initY: -1,
              loopX: 1,
              loopY: 0,
              drawX: 0.5,
              drawY: -0.2,
            },
            noRamps: [
              { x: -1, y: -1 },
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
              { x: 3, y: -1 },
              { x: -1, y: 3 },
              { x: 0, y: 3 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
              { x: 3, y: 3 },
            ],
            onlyThisRamp: [
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: -1, y: 2 },
              { x: 3, y: 0 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
            ],
            sameLevel: [
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
            ],
          },
        ];

        var ramps_grave = [
          {
            map: [
              { x: 0, y: 0, cliff: true },
              { x: 1, y: 0, cliff: true },
              { x: 2, y: 0, cliff: true },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
              { x: 2, y: 1 },
              { x: 0, y: 2 },
              { x: 1, y: 2 },
              { x: 2, y: 2 },
            ],
            vec: { x: 0, y: 1 },
            code: "S",
            cliffs: [
              { x: -1, y: -1, cliff: ramp_tiles_grave[0] },
              { x: 1, y: -1, cliff: ramp_tiles_grave[1] },
            ],
            texture: {
              tiles: [ramp_tiles_grave[2], ramp_tiles_grave[3], ramp_tiles_grave[4]],
              initX: -1,
              initY: -1,
              loopX: 1,
              loopY: 0,
              drawX: 0.5,
              drawY: -0.3,
            },
            noRamps: [
              { x: -1, y: -1 },
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
              { x: 3, y: -1 },
              { x: -1, y: 3 },
              { x: 0, y: 3 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
              { x: 3, y: 3 },
            ],
            onlyThisRamp: [
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: -1, y: 2 },
              { x: 3, y: 0 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
            ],
            sameLevel: [
              { x: 0, y: 3 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
            ],
          },

          {
            map: [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 2, y: 0, cliff: true },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
              { x: 2, y: 1, cliff: true },
              { x: 0, y: 2 },
              { x: 1, y: 2 },
              { x: 2, y: 2, cliff: true },
            ],
            vec: { x: -1, y: 0 },
            code: "W",
            cliffs: [
              { x: -1, y: -1, cliff: ramp_tiles_grave[5] },
              { x: -1, y: 1, cliff: ramp_tiles_grave[6] },
            ],
            texture: {
              tiles: [ramp_tiles_grave[7], ramp_tiles_grave[8], ramp_tiles_grave[9]],
              initX: -1,
              initY: -1,
              loopX: 0,
              loopY: 1,
              drawX: 0.3,
              drawY: -0.2,
            },
            noRamps: [
              { x: -1, y: -1 },
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: -1, y: 2 },
              { x: -1, y: 3 },
              { x: 3, y: -1 },
              { x: 3, y: 0 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
              { x: 3, y: 3 },
            ],
            onlyThisRamp: [
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
              { x: 0, y: 3 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
            ],
            sameLevel: [
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: -1, y: 2 },
            ],
          },

          {
            map: [
              { x: 0, y: 0, cliff: true },
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 0, y: 1, cliff: true },
              { x: 1, y: 1 },
              { x: 2, y: 1 },
              { x: 0, y: 2, cliff: true },
              { x: 1, y: 2 },
              { x: 2, y: 2 },
            ],
            vec: { x: 1, y: 0 },
            code: "E",
            cliffs: [
              { x: -1, y: -1, cliff: ramp_tiles_grave[10] },
              { x: -1, y: 1, cliff: ramp_tiles_grave[11] },
            ],
            texture: {
              tiles: [ramp_tiles_grave[12], ramp_tiles_grave[13], ramp_tiles_grave[14]],
              initX: -1,
              initY: -1,
              loopX: 0,
              loopY: 1,
              drawX: 0.5,
              drawY: -0.2,
            },
            noRamps: [
              { x: -1, y: -1 },
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: -1, y: 2 },
              { x: -1, y: 3 },
              { x: 3, y: -1 },
              { x: 3, y: 0 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
              { x: 3, y: 3 },
            ],
            onlyThisRamp: [
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
              { x: 0, y: 3 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
            ],
            sameLevel: [
              { x: 3, y: 0 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
            ],
          },

          {
            map: [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
              { x: 2, y: 1 },
              { x: 0, y: 2, cliff: true },
              { x: 1, y: 2, cliff: true },
              { x: 2, y: 2, cliff: true },
            ],
            vec: { x: 0, y: -1 },
            code: "N",
            cliffs: [
              { x: -1, y: -1, cliff: ramp_tiles_grave[15] },
              { x: 1, y: -1, cliff: ramp_tiles_grave[16] },
            ],
            texture: {
              tiles: [ramp_tiles_grave[17], ramp_tiles_grave[18], ramp_tiles_grave[19]],
              initX: -1,
              initY: -1,
              loopX: 1,
              loopY: 0,
              drawX: 0.5,
              drawY: -0.2,
            },
            noRamps: [
              { x: -1, y: -1 },
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
              { x: 3, y: -1 },
              { x: -1, y: 3 },
              { x: 0, y: 3 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
              { x: 3, y: 3 },
            ],
            onlyThisRamp: [
              { x: -1, y: 0 },
              { x: -1, y: 1 },
              { x: -1, y: 2 },
              { x: 3, y: 0 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
            ],
            sameLevel: [
              { x: 0, y: -1 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
            ],
          },
        ];

        // Map Themes
        var mapThemes = [
          {
            name: "Grass",
            defaultTiles: [
              "Ground n 6",
              "Ground n 7",
              "Ground n 8",
              "Ground n 5",
              "Ground n 1",
              "Ground n 2",
              "Ground n 3",
              "Ground n 4",
            ],
            particleColor: "rgba(255, 255, 100, 0.4)",
            countDots: 150,
            line_red: 255,
            line_green: 255,
            line_blue: 255,
            cliffs: cliffs,
            ramps: ramps,
            arrowColor: "white",
          },

          {
            name: "Snow",
            defaultTiles: ["Snow 1", "Snow 2", "Snow 3", "Snow 4"],
            particleColor: "rgba(255, 255, 255, 0.8)",
            countDots: 200,
            alpha: 0.8,
            line_red: 0,
            line_green: 255,
            line_blue: 0,
            cliffs: cliffs_winter,
            ramps: ramps,
            arrowColor: "black",
          },

          {
            name: "Egypt",
            defaultTiles: [
              "Egypt Ground 1",
              "Egypt Ground 2",
              "Egypt Ground 3",
              "Egypt Ground 4",
              "Egypt Ground 5",
              "Egypt Ground 6",
            ],
            particleColor: "rgba(255, 255, 100, 0.8)",
            countDots: 0,
            line_red: 255,
            line_green: 255,
            line_blue: 255,
            cliffs: egypt_cliffs,
            ramps: ramps_egypt,
            arrowColor: "white",
          },

          {
            name: "Graveyard",
            defaultTiles: [
              "Grave Ground 1",
              "Grave Ground 2",
              "Grave Ground 3",
              "Grave Ground 4",
              "Grave Ground 5",
              "Grave Ground 6",
            ],
            particleColor: "rgba(255, 255, 255, 0.8)",
            countDots: 100,
            line_red: 0,
            line_green: 255,
            line_blue: 0,
            cliffs: grave_cliffs,
            ramps: ramps_grave,
            arrowColor: "white",
          },
        ];

        var list_attack_effects = {
          none: null,
          arrow: "arrow",
          mageAttack: "mageAttack",
          launchedRock: "launchedRock",
          dragonAttack: "dragonAttack",
          ballistaAttack: "ballista",
          flamestrike: "flamestrike",
          heal: "heal",
          smoke: "smoke",
          aura: "aura",
          spell: "spell",
        };

        var unit_fields = [
          {
            name: "name",
            type: "string",
            max_len: 30,
            min_len: 1,
            description: "The units name",
            default_: "new_unit",
            logic: true,
          },

          {
            name: "hp",
            type: "integer",
            min_val: 1,
            max_val: 99999999,
            description: "The max amount of hit points this unit has.",
            default_: 100,
            logic: true,
          },

          {
            name: "startHp",
            type: "integer",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of hit points this unit has when it spanws. 0 for max.",
            default_: 0,
            logic: true,
          },

          {
            name: "mana",
            type: "integer",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of mana this unit has.",
            default_: 0,
            logic: true,
          },

          {
            name: "startMana",
            type: "integer",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of starting mana this unit has.",
            default_: 0,
            logic: true,
          },

          {
            name: "hpRegenerationRate",
            type: "float",
            min_val: -99999999,
            max_val: 99999999,
            description: "The amount of hit points this unit regenerates per sec.",
            default_: 0,
            logic: true,
            displayScale: 20,
          },

          {
            name: "manaRegenerationRate",
            type: "float",
            min_val: -99999999,
            max_val: 99999999,
            description: "The amount of mana this unit regenerates per sec.",
            default_: 0,
            logic: true,
            displayScale: 20,
          },

          {
            name: "armor",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The armor this unit has. 1 armor reduces all incoming damage by 1.",
            default_: 0,
            logic: true,
          },

          {
            name: "supply",
            type: "integer",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of supply this unit uses.",
            default_: 1,
            logic: true,
          },

          {
            name: "supplyProvided",
            type: "integer",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of supply this unit prodives.",
            default_: 0,
            logic: true,
          },

          {
            name: "movementSpeed",
            type: "float",
            min_val: 0,
            max_val: 6.0,
            description: "The movement speed of the unit.",
            default_: 0.1,
            logic: true,
            displayScale: 20,
          },

          {
            name: "weaponCooldown",
            type: "float",
            min_val: 0.1,
            max_val: 99999999,
            description: "The time it takes for this unit to fire again when it just fired.",
            default_: 20,
            logic: true,
            displayScale: 1 / 20,
          },

          {
            name: "weaponDelay",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description:
              "The time it takes for this unit to actually fire when an attack is initiated.",
            default_: 20,
            logic: true,
            displayScale: 1 / 20,
          },

          {
            name: "dmg",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The damage this unit does with one attack.",
            default_: 10,
            logic: true,
          },

          {
            name: "dmgModifierAttributes",
            type: "selection",
            description:
              "The filter that target unit has to meet for the damage modifiers to be applied",
            isArray: true,
            values: targetFilters1,
            default_: "isHuman",
            default2_: [],
            logic: true,
            group: "dmgModifiers",
            subName: "filter",
            groupDescription:
              "The unit can have different damage for different types of units, for example it can do +3 damage vs mechanical units, or it can do +50% vs flying units.",
          },

          {
            name: "dmgModifierAddition",
            type: "float",
            min_val: -999999,
            max_val: 9999999,
            description:
              "This value will be added to the damage value, if it meets the filter atribute.",
            default_: 0,
            default2_: [],
            isArray: true,
            logic: true,
            group: "dmgModifiers",
            subName: "add",
            groupDescription:
              "The unit can have different damage for different types of units, for example it can do +3 damage vs mechanical units, or it can do +50% vs flying units.",
          },

          {
            name: "dmgModifierMultiplier",
            type: "float",
            min_val: -999999,
            max_val: 9999999,
            description:
              "The damage value will be multiplied with this value, if it meets the filter atributes.",
            default_: 1,
            default2_: [],
            isArray: true,
            logic: true,
            group: "dmgModifiers",
            subName: "multiply",
            groupDescription:
              "The unit can have different damage for different types of units, for example it can do +3 damage vs mechanical units, or it can do +50% vs flying units.",
          },

          {
            name: "lifesteal",
            type: "float",
            min_val: -99999999,
            max_val: 99999999,
            description:
              "The % of the damage this unit gets as HP when dealing dmg (0.5 means it gets half the dmg it deals as HP).",
            default_: 0,
            logic: true,
          },

          {
            name: "armorPenetration",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of armor this unit ignores when dealing damage.",
            default_: 0,
            logic: true,
          },

          {
            name: "percDmg",
            type: "float",
            min_val: -1,
            max_val: 1,
            description:
              "The percentual damage this unit does. For example 0.2 means it does 20% (of target max hp) dmg.",
            default_: 0,
            logic: true,
          },

          {
            name: "dmgCap",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description:
              "The min possible value this units damage can be after applying the defenders armor. If you set this to 2 for example, the damage will always be at least 2, even if the defenders armor would reduce to less than 2 normally.",
            default_: 1,
            logic: true,
          },

          {
            name: "bouncePower",
            type: "float",
            min_val: 0.0,
            max_val: 99.0,
            description:
              "If this is set to higher than 0, this unit will smash target units back when attacking them. It only affects units with power less than this bouncePower.",
            default_: 0,
            logic: true,
          },

          {
            name: "bounceDistMin",
            type: "float",
            min_val: 0.0,
            max_val: 99.0,
            description: "The min range of how far this unit smashes target units back.",
            default_: 0,
            logic: true,
          },

          {
            name: "bounceDistMax",
            type: "float",
            min_val: 0.0,
            max_val: 99.0,
            description: "The max range of how far this unit smashes target units back.",
            default_: 0,
            logic: true,
          },

          {
            name: "range",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The attack range of this unit.",
            default_: 0.2,
            logic: true,
          },

          {
            name: "minRange",
            type: "float",
            min_val: -999,
            max_val: 999,
            description:
              "The minimum attack range of this unit. Other units close that this can not be attacked. Set to -1 for no min attack range",
            default_: -999,
            logic: true,
          },

          {
            name: "aoeRadius",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description:
              "If this is bigger than 0, the unit will deal aoe damage (= area of effect). That means not only the target unit takes damage, but all units in range of the target unit.",
            default_: 0,
            logic: true,
          },

          {
            name: "attackPrio",
            type: "float",
            min_val: -99999,
            max_val: 999999,
            description: "Units with higher attack prios get attacked first.",
            default_: 10,
            logic: true,
          },

          {
            name: "size",
            type: "float",
            min_val: 0,
            max_val: 12.0,
            description:
              "The size of the unit (= diameter). This determines when a unit collides with other units or map objects. Ground units with a size bigger than 2 might cause pathing problems.",
            default_: 0.9,
            logic: true,
          },

          {
            name: "imageScale",
            type: "float",
            min_val: 0.1,
            max_val: 10,
            description:
              "If you put another value than 1, the image will be scaled, so the unit becomes bigger or smaller (only visual, no gameplay effect).",
            default_: 1,
          },

          {
            name: "vision",
            type: "float",
            min_val: -1,
            max_val: 20,
            description: "The vision range of the unit.",
            default_: 7,
            logic: true,
          },

          {
            name: "repairRate",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of HP this unit restores when repairing (per sec).",
            default_: 0,
            logic: true,
            displayScale: 20,
          },

          {
            name: "repairIneffiency",
            type: "float",
            min_val: 0,
            max_val: 1,
            description:
              "Inefficiency per additional repairer e.g if set to 0.25, the second repairer will repair at a rate of 75% of the first, and third of a rate of 56%, etc",
            default_: 0,
            logic: true,
          },

          {
            name: "repairCost",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of gold it costs when repairing (per sec).",
            default_: 0,
            logic: true,
            displayScale: 20,
          },

          {
            name: "projectileSpeed",
            type: "float",
            min_val: 0.02,
            max_val: 99999999,
            description:
              "Only relevant if this is a ranged unit. The speed which the projectile travels.",
            default_: 8,
            logic: true,
          },

          {
            name: "projectileLen",
            type: "float",
            min_val: 0.02,
            max_val: 10,
            description:
              "Only relevant if this is a ranged unit with basic arrow projectiles. The length of the projectile.",
            default_: 0.2,
          },

          {
            name: "attackLaunchSound",
            type: "selection",
            values: SOUND,
            description: "The sound that plays when this unit attacks.",
            default_: SOUND.NONE,
            logic: true,
          },

          {
            name: "circleSize",
            type: "float",
            min_val: 0.02,
            max_val: 20,
            description: "The size of the selection circle of this unit.",
            default_: 0.43,
          },

          {
            name: "circleOffset",
            type: "float",
            min_val: -99,
            max_val: 99,
            description: "The y offset of the cirle of this unit (only a visual thing).",
            default_: 0.125,
          },

          {
            name: "buildTime",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The time it takes to build this unit.",
            default_: 30,
            logic: true,
            displayScale: 1 / 20,
          },

          {
            name: "cost",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of gold it costs to build this unit.",
            default_: 100,
            logic: true,
          },

          {
            name: "healthbarOffset",
            type: "float",
            min_val: -99,
            max_val: 99,
            description: "The y offset of the health bar (only a visual thing).",
            default_: 0.95,
          },

          {
            name: "healthbarWidth",
            type: "float",
            min_val: 0.1,
            max_val: 99,
            description: "The width of the health bar.",
            default_: 0.69,
          },

          {
            name: "selectionOffsetY",
            type: "float",
            min_val: -99,
            max_val: 99,
            description: "The y offset of where the unit should be selected.",
            default_: 0,
          },

          {
            name: "img",
            type: "selection",
            values: lists.imgs,
            description: "The unit's image.",
            default_: lists.imgs.soldier,
            special: "imgPreview",
          },

          {
            name: "description",
            type: "string",
            max_len: 300,
            min_len: 0,
            description: "The description of the unit.",
            default_: "",
          },

          {
            name: "experienceLevels",
            type: "integer",
            min_val: 0,
            max_val: 99999999,
            description:
              "The amount of experience this unit needs to reach higher levels. Each value represents a level. The first value is the exp needed to reach lvl 2, the 2nd value the exp to reach lvl 3 and so on.",
            default_: 0,
            default2_: [],
            logic: true,
            isArray: true,
          },

          {
            name: "experience",
            type: "integer",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of experience this unit gives when it gets killed.",
            default_: 0,
            logic: true,
          },

          {
            name: "modifiersPerLevel",
            type: "selection",
            values: lists.modifiers,
            description:
              "A list of modifiers that will be applied to this unit each time it levels up. For example you can make a modifier, that gives +1 damage and +10 HP and link it here, so the unit will get +1 dmg and +10 HP each time it levels up.",
            default_: null,
            default2_: [],
            isArray: true,
            logic: true,
          },

          {
            name: "experienceRange",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The range in which this unit collects experience from enemy dying units.",
            default_: 9.0,
            logic: true,
          },

          {
            name: "tabPriority",
            type: "float",
            min_val: -99,
            max_val: 99,
            description:
              "Buttons of units with higher tab priorities will be displayed first. When selecting two different unit types and both have special abilities, then the buttons of the unit with higher tab priority will be displayed.",
            default_: 5,
          },

          {
            name: "drawOffsetY",
            type: "float",
            min_val: -99,
            max_val: 99,
            description: "Y offset of the unit when drawn.",
            default_: 6,
          },

          {
            name: "attackEffect",
            type: "selection",
            description:
              "The effect, that shows when this unit is attacking (only relevant for ranged units).",
            values: list_attack_effects,
            default_: null,
            logic: true,
          },

          {
            name: "painSound",
            type: "selection",
            values: SOUND,
            description: "A number of sounds that will be played when this unit gets hit.",
            default_: SOUND.NONE,
            logic: true,
          },

          {
            name: "painSoundVolume",
            type: "float",
            max_val: 1,
            min_val: 0,
            description: "Volume 1 => 100%",
            default_: 1,
            logic: true,
          },

          {
            name: "painSound2",
            type: "selection",
            values: SOUND,
            description: "A 2nd pain sound, in case 2 are needed.",
            default_: SOUND.NONE,
            logic: true,
          },

          {
            name: "painSoundVolume2",
            type: "float",
            max_val: 1,
            min_val: 0,
            description: "Volume 1 => 100%",
            default_: 1,
            logic: true,
          },

          {
            name: "deathSound",
            type: "selection",
            values: SOUND,
            description: "The sound that will be played when this unit dies.",
            default_: SOUND.NONE,
            logic: true,
          },

          {
            name: "yesSound",
            type: "selection",
            values: SOUND,
            description: "The sound that will be played when this unit gets an order.",
            default_: SOUND.YES,
            logic: true,
          },

          {
            name: "yesSoundVolume",
            type: "float",
            max_val: 1,
            min_val: 0,
            description: "Volume 1 => 100%",
            default_: 0.6,
            logic: true,
          },

          {
            name: "readySound",
            type: "selection",
            values: SOUND,
            description: "The sound that will be played when this unit spawns.",
            default_: SOUND.READY,
            logic: true,
          },

          {
            name: "readySoundVolume",
            type: "float",
            max_val: 1,
            min_val: 0,
            description: "The sound that will be played when this unit spawns.",
            default_: 0.9,
            logic: true,
          },

          {
            name: "bodyPower",
            type: "float",
            min_val: -99,
            max_val: 99,
            description:
              "This represents the power that a target unit will be pushed when killed by this unit. A higher value means a unit killed by this unit will be pushed back very far when killed.",
            default_: 0.8,
            logic: true,
          },

          {
            name: "dustCreationChance",
            type: "float",
            min_val: -20,
            max_val: 5,
            description:
              "The average dust particles this unit creates per sec. Put -1 for no dust creation at all (for example for flying units).",
            default_: 0.05,
            displayScale: 20,
          },

          {
            name: "visionHeightBonus",
            type: "integer",
            min_val: 0,
            max_val: 99,
            description:
              "Usually units can not look at higher grounds. With this value set they can look up X cliff levels. A unit being on height level 1 and having a visionHeightBonus of 1 can see height level 2, but not 3.",
            default_: 0,
            logic: true,
          },

          {
            name: "animSpeed",
            type: "float",
            min_val: 0.1,
            max_val: 99,
            description: "The speed in which the animations for this unit will be played.",
            default_: 1.5,
          },

          {
            name: "oscillationAmplitude",
            type: "float",
            min_val: 0,
            max_val: 99,
            description:
              "The determined how fast a unit is moved up and down (only visual, no gameplay effect). Usually you want this only for flying units. To not have this effect, set to 0",
            default_: 0,
          },

          {
            name: "height",
            type: "float",
            min_val: -99,
            max_val: 99,
            description:
              "This is only a visual thing. This value will be used when this unit gets shot with a projectile. The projectile will hit at a higher point when the height value is higher.",
            default_: 0.3,
          },

          {
            name: "acceleration",
            type: "float",
            min_val: 0,
            max_val: 99,
            description:
              "Units with an acceleration dont start moving at their full speed. They also need some time to stop or change directions. Usually this is used for flying units. Set this to 0, if you dont want any acceleration.",
            default_: 0,
            logic: true,
          },

          {
            name: "angularVelocity",
            type: "float",
            min_val: 0,
            max_val: 1,
            description:
              "Units with an angular velocity take curves instead of immediately changing their angle when moving and changing their direction. Set this to 0, if you dont want any acceleration.",
            default_: 0,
            logic: true,
          },

          {
            name: "commands",
            type: "commands",
            isObject: true,
            description: "Here are all the abilites stored, that this unit can execute.",
            logic: true,
          },

          {
            name: "cargoUse",
            type: "integer",
            min_val: -1,
            max_val: 100,
            description:
              "How much space in a transport unit this unit takes. Cargo space -1 means this unit is not loadable",
            default_: -1,
            logic: true,
          },

          {
            name: "cargoSpace",
            type: "integer",
            min_val: 0,
            max_val: 99999,
            description: "How much space this unit can carry.",
            default_: 0,
            logic: true,
          },

          {
            name: "projectileStartHeight",
            type: "float",
            min_val: -99,
            max_val: 99,
            description: "The (only visual) height of projectiles that this unit shoots.",
            default_: 0,
          },

          {
            name: "power",
            type: "float",
            min_val: 0,
            max_val: 99,
            description:
              "The smash effect has a bouncePower value. If that value is higher than this units power value, then it gets smashed back.",
            default_: 0,
            logic: true,
          },

          {
            name: "lifetime",
            type: "float",
            min_val: 0,
            max_val: 999999,
            description:
              "When this is bigger than 0, the unit will only live for a certain amount of time.",
            default_: 0,
            logic: true,
            displayScale: 1 / 20,
          },

          {
            name: "goldReward",
            type: "integer",
            min_val: -999999,
            max_val: 999999,
            description:
              "If this is bigger than 0, a player who kills this unit will get gold rewarded according to this value.",
            default_: 0,
            logic: true,
          },

          {
            name: "limit",
            type: "integer",
            min_val: 0,
            max_val: 999999,
            description:
              "Set this to a number bigger than 0 to limit the amount of instances of this building a player can make.",
            default_: 0,
            logic: true,
          },

          {
            name: "modifiers",
            type: "selection",
            isArray: true,
            values: lists.modifiers,
            description: "Modifiers this unit applies to other units when attacking them.",
            default_: null,
            default2_: [],
            logic: true,
          },

          {
            name: "modifiersSelf",
            type: "selection",
            isArray: true,
            values: lists.modifiers,
            description: "Modifiers this unit applies to ITSELF when attacking (other units).",
            default_: null,
            default2_: [],
            logic: true,
          },

          {
            name: "spawnModifiers",
            type: "selection",
            isArray: true,
            values: lists.modifiers,
            description: "The modifiers this unit gets when it spawns.",
            default_: null,
            default2_: [],
            logic: true,
          },

          {
            name: "hoverText",
            type: "string",
            min_len: 0,
            max_len: 1000,
            description:
              "If you enter a text here, it will be displayed instead of the owners' name when hovering this unit.",
            default_: "",
          },

          {
            name: "canHaveWaypoint",
            type: "bool",
            description:
              "If this is true, this unit can set a waypoint (waypoints are used to tell spawning units where to go, so this usually makes sense if this unit can produce units)",
            default_: false,
            logic: true,
          },

          {
            name: "isPassive",
            type: "bool",
            description: "Passive units dont attack on their own.",
            default_: false,
            logic: true,
          },

          {
            name: "causesFlameDeath",
            type: "bool",
            description:
              "If this is true, then units killed by this unit will burn for some seconds (only visual, no gameplay effect).",
            default_: false,
          },

          {
            name: "shootingReveals",
            type: "bool",
            description:
              "If this is true, then this unit will be visible for a short amount of time for the other player when it attacks.",
            default_: false,
            logic: true,
          },

          {
            name: "shootWhileMoving",
            type: "bool",
            description: "Determines if this unit can attack while it moves.",
            default_: false,
            logic: true,
          },

          {
            name: "hitscan",
            type: "bool",
            description:
              "Units that use hitscan, can not shoot through other units or obstacles, but need to have free space between them and their target in order to be able to shoot it. Their projectiles also can be intercepted if something moves in their way.",
            default_: false,
            logic: true,
          },

          {
            name: "maximizeRangeWhenShooting",
            type: "bool",
            description:
              "Always shoot at max range. Only works on not heatseeking units. Makes sense on hitscan units.",
            default_: false,
            logic: true,
          },

          {
            name: "hitsFriendly",
            type: "bool",
            description:
              "Determines if this unit attack affects friendly units (only relevant on aoe abilities).",
            default_: true,
            logic: true,
          },

          {
            name: "hitsEnemy",
            type: "bool",
            description:
              "Determines if this unit attack affects enemy units (only relevant on aoe abilities).",
            default_: true,
            logic: true,
          },

          {
            name: "canAttackGround",
            type: "bool",
            description: "Is the unit able to attack ground units ?",
            default_: true,
            logic: true,
          },

          {
            name: "canAttackFlying",
            type: "bool",
            description: "Determines if this unit can attack flying units.",
            default_: false,
            logic: true,
          },

          {
            name: "isHeatSeeking",
            type: "bool",
            description:
              "If this is false, hits by this unit can miss and will hit where the target unit was, what the attack was started.",
            default_: true,
            logic: true,
          },

          {
            name: "ignoreEnemyHitscan",
            type: "bool",
            description:
              "If this is true, the unit will be shootable for enemy units, that use hitscan, even if something is in the way. Makes sense for example on air units.",
            default_: false,
            logic: true,
          },

          {
            name: "controllable",
            type: "bool",
            description: "If this is false, the unit can not be controlled by the player.",
            default_: true,
            logic: true,
          },

          {
            name: "hasDetection",
            type: "bool",
            description: "If its true, this unit can detect invisible units.",
            default_: false,
            logic: true,
          },

          {
            name: "expOnlyFromOwnKills",
            type: "bool",
            description:
              "If true, this unit gets only experience when it actually kills a unit itself, but not when its just in range when an enemy unit is killed by another allied unit.",
            default_: false,
            logic: true,
          },

          {
            name: "alliesGetExperience",
            type: "bool",
            description: "If true, allied units get experience when killing this unit.",
            default_: false,
            logic: true,
          },

          {
            name: "alliesGetGold",
            type: "bool",
            description: "If true, allied units get gold reward when killing this unit.",
            default_: false,
            logic: true,
          },

          {
            name: "isReflectingProjectiles",
            type: "bool",
            description:
              "If this is true, this unit reflects projectiles that would hit it otherwise. Only affects projectiles that deal damage while flying.",
            default_: false,
            logic: true,
          },

          {
            name: "isBlockingProjectiles",
            type: "bool",
            description:
              "If this is true, this unit blocks (kills) projectiles that would hit it otherwise. Only affects projectiles that deal damage while flying.",
            default_: false,
            logic: true,
          },

          {
            name: "takeDamageOnBlock",
            type: "bool",
            description:
              "If this unit blocks or reflects a projectile, this field determines if it is taking damage from the projectile.",
            default_: false,
            logic: true,
          },

          {
            name: "preventsLoss",
            type: "bool",
            description:
              "If a player has no buildings or units that prevent losing, he will be eliminated.",
            default_: false,
            logic: true,
          },

          {
            name: "flying",
            type: "bool",
            description: "Make an educated guess.",
            default_: false,
            logic: true,
          },

          {
            name: "uniqueAndHeroic",
            type: "bool",
            description:
              "Units that are unique &amp; heroic only exist once and can be revived when they die.",
            default_: false,
            logic: true,
          },

          {
            name: "isMechanical",
            type: "bool",
            description: "Mechanical units can be repaired and not healed.",
            default_: false,
            logic: true,
          },

          {
            name: "isUndead",
            type: "bool",
            description: "Undead units take damage from healing spells.",
            default_: false,
            logic: true,
          },

          {
            name: "isBiological",
            type: "bool",
            description:
              "Classification for unit types. Does not have any active effects but there can be abilities that only work for certain unit types. For example the 'Heal' spell only works with biological units.",
            default_: true,
            logic: true,
          },

          {
            name: "isBeast",
            type: "bool",
            description:
              "Classification for unit types. Does not have any active effects but there can be abilities that only work for certain unit types. For example the 'Heal' spell only works with biological units.",
            default_: false,
            logic: true,
          },

          {
            name: "isHuman",
            type: "bool",
            description:
              "Classification for unit types. Does not have any active effects but there can be abilities that only work for certain unit types. For example the 'Heal' spell only works with biological units.",
            default_: false,
            logic: true,
          },

          {
            name: "noShow",
            type: "bool",
            description: "If this is true, the unit will not be drawn.",
            default_: false,
            logic: true,
          },

          {
            name: "noCollision",
            type: "bool",
            description: "If this is true, the unit will not collide with anything.",
            default_: false,
            logic: true,
          },

          {
            name: "isInvisible",
            type: "bool",
            description: "Invisible units can only be attacked when detected.",
            default_: false,
            logic: true,
          },

          {
            name: "isInvincible",
            type: "bool",
            description: "If this is true, the unit can not be attacked or damaged.",
            default_: false,
            logic: true,
          },

          {
            name: "spawnWithAMove",
            type: "bool",
            description:
              "If this is true, units this unit produces will use AMove command when spawning to walk to the waypoint instead of normal move.",
            default_: false,
            logic: true,
          },
        ];

        var building_fields = [
          {
            name: "name",
            type: "string",
            max_len: 30,
            min_len: 1,
            description: "The buildings name",
            default_: "new_building",
            logic: true,
          },

          {
            name: "hp",
            type: "integer",
            min_val: 1,
            max_val: 99999999,
            description: "The max amount of hit points this building has.",
            default_: 500,
            logic: true,
          },

          {
            name: "mana",
            type: "integer",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of mana this unit has.",
            default_: 0,
            logic: true,
          },

          {
            name: "startMana",
            type: "integer",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of starting mana this unit has.",
            default_: 0,
            logic: true,
          },

          {
            name: "hpRegenerationRate",
            type: "float",
            min_val: -99999999,
            max_val: 99999999,
            description: "The amount of hit points this building regenerates per sec.",
            default_: 0,
            logic: true,
            displayScale: 20,
          },

          {
            name: "manaRegenerationRate",
            type: "float",
            min_val: -99999999,
            max_val: 99999999,
            description: "The amount of mana this unit regenerates per sec.",
            default_: 0,
            logic: true,
            displayScale: 20,
          },

          {
            name: "armor",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The armor this building has. 1 armor reduces all incoming damage by 1.",
            default_: 1,
            logic: true,
          },

          {
            name: "supply",
            type: "integer",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of supply this unit uses.",
            default_: 0,
            logic: true,
          },

          {
            name: "supplyProvided",
            type: "integer",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of supply this unit provides.",
            default_: 0,
            logic: true,
          },

          {
            name: "weaponCooldown",
            type: "float",
            min_val: 0.1,
            max_val: 99999999,
            description: "The time it takes for this building to fire again when it just fired.",
            default_: 20,
            logic: true,
            displayScale: 1 / 20,
          },

          {
            name: "weaponDelay",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description:
              "The time it takes for this building to actually fire when an attack is initiated.",
            default_: 20,
            logic: true,
            displayScale: 1 / 20,
          },

          {
            name: "dmg",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The damage this building does with one attack.",
            default_: 10,
            logic: true,
          },

          {
            name: "dmgModifierAttributes",
            type: "selection",
            description:
              "The filter that target unit has to meet for the damage modifiers to be applied",
            isArray: true,
            values: targetFilters1,
            default_: "isHuman",
            default2_: [],
            logic: true,
            group: "dmgModifiers",
            subName: "filter",
            groupDescription:
              "The unit can have different damage for different types of units, for example it can do +3 damage vs mechanical units, or it can do +50% vs flying units.",
          },

          {
            name: "dmgModifierAddition",
            type: "float",
            min_val: -999999,
            max_val: 9999999,
            description:
              "This value will be added to the damage value, if it meets the filter atribute.",
            default_: 0,
            default2_: [],
            isArray: true,
            logic: true,
            group: "dmgModifiers",
            subName: "add",
            groupDescription:
              "The unit can have different damage for different types of units, for example it can do +3 damage vs mechanical units, or it can do +50% vs flying units.",
          },

          {
            name: "dmgModifierMultiplier",
            type: "float",
            min_val: -999999,
            max_val: 9999999,
            description:
              "The damage value will be multiplied with this value, if it meets the filter atributes.",
            default_: 1,
            default2_: [],
            isArray: true,
            logic: true,
            group: "dmgModifiers",
            subName: "multiply",
            groupDescription:
              "The unit can have different damage for different types of units, for example it can do +3 damage vs mechanical units, or it can do +50% vs flying units.",
          },

          {
            name: "lifesteal",
            type: "float",
            min_val: -99999999,
            max_val: 99999999,
            description:
              "The % of the damage this unit gets as HP when dealing dmg (0.5 means it gets half the dmg it deals as HP).",
            default_: 0,
            logic: true,
          },

          {
            name: "armorPenetration",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of armor this unit ignores when dealing damage.",
            default_: 0,
            logic: true,
          },

          {
            name: "percDmg",
            type: "float",
            min_val: -1,
            max_val: 1,
            description:
              "The percentual damage this unit does. For example 0.2 means it does 20% (of target max hp) dmg.",
            default_: 0,
            logic: true,
          },

          {
            name: "dmgCap",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description:
              "The min possible value this units damage can be after applying the defenders armor. If you set this to 2 for example, the damage will always be at least 2, even if the defenders armor would reduce to less than 2 normally.",
            default_: 1,
            logic: true,
          },

          {
            name: "range",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The attack range of this building.",
            default_: 0.2,
            logic: true,
          },

          {
            name: "minRange",
            type: "float",
            min_val: -999,
            max_val: 999,
            description:
              "The minimum attack range of this unit. Other units close that this can not be attacked. Set to -1 for no min attack range",
            default_: -999,
            logic: true,
          },

          {
            name: "aoeRadius",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description:
              "If this is bigger than 0, the building will deal aoe damage (= area of effect). That means not only the target unit takes damage, but all units in range of the target unit.",
            default_: 0,
            logic: true,
          },

          {
            name: "bouncePower",
            type: "float",
            min_val: 0.0,
            max_val: 99.0,
            description:
              "If this is set to higher than 0, this unit will smash target units back when attacking them. It only affects units with power less than this bouncePower.",
            default_: 0,
            logic: true,
          },

          {
            name: "bounceDistMin",
            type: "float",
            min_val: 0.0,
            max_val: 99.0,
            description: "The min range of how far this unit smashes target units back.",
            default_: 0,
            logic: true,
          },

          {
            name: "bounceDistMax",
            type: "float",
            min_val: 0.0,
            max_val: 99.0,
            description: "The max range of how far this unit smashes target units back.",
            default_: 0,
            logic: true,
          },

          {
            name: "attackPrio",
            type: "float",
            min_val: -99999,
            max_val: 999999,
            description: "Units with higher attack prios get attacked first.",
            default_: 5,
            logic: true,
          },

          {
            name: "vision",
            type: "float",
            min_val: -1,
            max_val: 20,
            description: "The vision range of the building.",
            default_: 7,
            logic: true,
          },

          {
            name: "projectileSpeed",
            type: "float",
            min_val: 0.02,
            max_val: 99999999,
            description:
              "Only relevant if this is a ranged building. The speed which the projectile travels.",
            default_: 8,
            logic: true,
          },

          {
            name: "projectileLen",
            type: "float",
            min_val: 0.02,
            max_val: 10,
            description:
              "Only relevant if this is a ranged building with basic arrow projectiles. The length of the projectile.",
            default_: 0.2,
          },

          {
            name: "attackLaunchSound",
            type: "selection",
            values: SOUND,
            description: "The sound that plays when this building fires.",
            default_: SOUND.NONE,
            logic: true,
          },

          {
            name: "attackEffect",
            type: "selection",
            description:
              "The effect, that shows when this unit is attacking (only relevant for ranged units).",
            values: list_attack_effects,
            default_: null,
            logic: true,
          },

          {
            name: "projectileStartHeight",
            type: "float",
            min_val: -99,
            max_val: 99,
            description: "The (only visual) height of projectiles that this unit shoots.",
            default_: 0,
          },

          {
            name: "circleSize",
            type: "float",
            min_val: 0.02,
            max_val: 20,
            description: "The size of the selection circle of this building.",
            default_: 2.2,
          },

          {
            name: "imageScale",
            type: "float",
            min_val: 0.1,
            max_val: 10,
            description:
              "If you put another value than 1, the image will be scaled, so the building becomes bigger or smaller (only visual, no gameplay effect).",
            default_: 1,
          },

          {
            name: "circleOffset",
            type: "float",
            min_val: -99,
            max_val: 99,
            description: "The y offset of the cirle of this building (only a visual thing).",
            default_: 0.125,
          },

          {
            name: "buildTime",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The time it takes to build this building.",
            default_: 50,
            logic: true,
            displayScale: 1 / 20,
          },

          {
            name: "goldPerDelivery",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description:
              "The amout of gold a player gets per delivery, when mining from this building.",
            default_: 5,
            logic: true,
          },

          {
            name: "cost",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of gold it costs to build this unit.",
            default_: 150,
            logic: true,
          },

          {
            name: "costIncrease",
            type: "float",
            min_val: -99999999,
            max_val: 99999999,
            description:
              "The amount of gold-cost-increase for this building. So the building gets more expensive the more you have.",
            default_: 150,
            logic: true,
          },

          {
            name: "costIncreaseGroup",
            type: "selection",
            values: lists.unitTypes,
            default_: null,
            default2_: [],
            logic: true,
            isArray: true,
            description:
              "If this building has a costIncrese value, you put here all buildings, that increase this buildings cost.",
          },

          {
            name: "healthbarOffset",
            type: "float",
            min_val: -99,
            max_val: 99,
            description: "The y offset of the health bar (only a visual thing).",
            default_: 0.95,
          },

          {
            name: "healthbarWidth",
            type: "float",
            min_val: 0.1,
            max_val: 99,
            description: "The width of the health bar.",
            default_: 1.7,
          },

          {
            name: "selectionOffsetY",
            type: "float",
            min_val: -99,
            max_val: 99,
            description: "The y offset of where the building should be selected.",
            default_: 0,
          },

          {
            name: "img",
            type: "selection",
            values: lists.imgs,
            description: "The buildings image.",
            default_: lists.imgs.castle,
            special: "imgPreview",
          },

          {
            name: "description",
            type: "string",
            max_len: 300,
            min_len: 0,
            description: "The description of the building.",
            default_: "",
          },

          {
            name: "tabPriority",
            type: "float",
            min_val: -99,
            max_val: 99,
            description:
              "Buttons of building with higher tab priorities will be displayed first. When selecting two different types and both have special abilities, then the buttons of the building with higher tab priority will be displayed.",
            default_: 5,
          },

          {
            name: "drawOffsetY",
            type: "float",
            min_val: -99,
            max_val: 99,
            description: "Y offset of the building when drawn.",
            default_: 6,
          },

          {
            name: "size",
            type: "integer",
            min_val: 1,
            max_val: 5,
            description:
              "The size of the building (in fields). 3 means the building will be 3x3 fields (squares).",
            default_: 1,
            logic: true,
          },

          {
            name: "repairRate",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of HP this unit restores when repairing (per sec).",
            default_: 0,
            logic: true,
            displayScale: 20,
          },

          {
            name: "startGold",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "Only relevant for mines. The amount of gold, this building holds.",
            default_: 0,
            logic: true,
          },

          {
            name: "timeToMine",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description:
              "Only relevant for mines or gold-taking buildings. The time it takes for a worker to grab / bring gold.",
            default_: 20,
            logic: true,
          },

          {
            name: "miningEfficiencyCoefficient",
            type: "float",
            min_val: 0,
            max_val: 10,
            description:
              "Only relevant for mines or gold-taking buildings. This determines how fast workers mine after the first one. If this is set to 0.5 for example, a worker only mines at 50% speed when theres already another worker working on this mine. A third worker only works at 25% speed and so on.",
            default_: 0.5,
            logic: true,
          },

          {
            name: "minMiningRate",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description:
              "The absolute min rate workers will be mining at this building. The miningEfficiencyCoefficient value will make additional workers mine less effective, but they will never mine slower than minMiningRate.",
            default_: 0.1,
            logic: true,
          },

          {
            name: "maxWorkers",
            type: "integer",
            min_val: 0,
            max_val: 99,
            description: "The max amount of workers that can work on this building.",
            default_: 6,
            logic: true,
          },

          {
            name: "limit",
            type: "integer",
            min_val: 0,
            max_val: 999999,
            description:
              "Set this to a number bigger than 0 to limit the amount of instances of this building a player can make.",
            default_: 0,
            logic: true,
          },

          {
            name: "visionHeightBonus",
            type: "integer",
            min_val: 0,
            max_val: 99,
            description:
              "Usually units can not look at higher grounds. With this value set they can look up X cliff levels. A unit being on height level 1 and having a visionHeightBonus of 1 can see height level 2, but not 3.",
            default_: 0,
            logic: true,
          },

          {
            name: "commands",
            type: "commands",
            isObject: true,
            description: "Here are all the abilites stored, that this building can execute.",
            logic: true,
          },

          {
            name: "lifetime",
            type: "float",
            min_val: 0,
            max_val: 999999,
            description:
              "When this is bigger than 0, the unit will only live for a certain amount of time.",
            default_: 0,
            logic: true,
            displayScale: 1 / 20,
          },

          {
            name: "goldReward",
            type: "integer",
            min_val: -999999,
            max_val: 999999,
            description:
              "If this is not 0, a player who kills this unit will get gold rewarded according to this value.",
            default_: 0,
            logic: true,
          },

          {
            name: "maxUnitsToRepair",
            type: "integer",
            min_val: 0,
            max_val: 999999,
            description: "Here you can determine, how many unit can repair this unit at a time.",
            default_: 1,
            logic: true,
          },

          {
            name: "modifiers",
            type: "selection",
            isArray: true,
            values: lists.modifiers,
            description: "Modifiers this unit applies to other units when attacking them.",
            default_: null,
            default2_: [],
            logic: true,
          },

          {
            name: "modifiersSelf",
            type: "selection",
            isArray: true,
            values: lists.modifiers,
            description: "Modifiers this unit applies to ITSELF when attacking (other units).",
            default_: null,
            default2_: [],
            logic: true,
          },

          {
            name: "spawnModifiers",
            type: "selection",
            isArray: true,
            values: lists.modifiers,
            description: "The modifiers this unit gets when it spawns.",
            default_: null,
            default2_: [],
            logic: true,
          },

          {
            name: "deathSound",
            type: "selection",
            values: SOUND,
            description: "The sound that gets played when this building is destroyed.",
            default_: SOUND.BUILDING_DEATH,
          },

          {
            name: "clickSound",
            type: "selection",
            values: SOUND,
            description: "The sound that gets played when this building gets selected.",
            default_: null,
          },

          {
            name: "clickSoundVolume",
            type: "float",
            min_val: 0,
            max_val: 1.0,
            description:
              "The volume of the sound that gets played when this building gets selected.",
            default_: 1.0,
          },

          {
            name: "hoverText",
            type: "string",
            min_len: 0,
            max_len: 1000,
            description:
              "If you enter a text here, it will be displayed instead of the owners' name when hovering this building.",
            default_: "",
          },

          {
            name: "canHaveWaypoint",
            type: "bool",
            description:
              "If this is true, this unit can set a waypoint (waypoints are used to tell spawning units where to go, so this usually makes sense if this unit can produce units)",
            default_: false,
            logic: true,
          },

          {
            name: "causesFlameDeath",
            type: "bool",
            description:
              "If this is true, then units killed by this unit will burn for some seconds (only visual, no gameplay effect).",
            default_: false,
          },

          {
            name: "hitscan",
            type: "bool",
            description:
              "Units that use hitscan, can not shoot through other units or obstacles, but need to have free space between them and their target in order to be able to shoot it. Their projectiles also can be intercepted if something moves in their way.",
            default_: false,
            logic: true,
          },

          {
            name: "maximizeRangeWhenShooting",
            type: "bool",
            description:
              "Always shoot at max range. Only works on not heatseeking units. Makes sense on hitscan units.",
            default_: false,
            logic: true,
          },

          {
            name: "hitsFriendly",
            type: "bool",
            description:
              "Determines if this unit attack affects friendly units (only relevant on aoe abilities).",
            default_: true,
            logic: true,
          },

          {
            name: "hitsEnemy",
            type: "bool",
            description:
              "Determines if this unit attack affects enemy units (only relevant on aoe abilities).",
            default_: true,
            logic: true,
          },

          {
            name: "canAttackGround",
            type: "bool",
            description: "Is the building able to attack ground units ?",
            default_: true,
            logic: true,
          },

          {
            name: "canAttackFlying",
            type: "bool",
            description: "Determines if this building can attack flying units.",
            default_: false,
            logic: true,
          },

          {
            name: "isHeatSeeking",
            type: "bool",
            description:
              "If this is false, hits by this unit can miss and will hit where the target unit was, what the attack was started.",
            default_: true,
            logic: true,
          },

          {
            name: "ignoreEnemyHitscan",
            type: "bool",
            description:
              "If this is true, the unit will be shootable for enemy units, that use hitscan, even if something is in the way. Makes sense for example on air units.",
            default_: false,
            logic: true,
          },

          {
            name: "controllable",
            type: "bool",
            description: "If this is false, the unit can not be controlled by the player.",
            default_: true,
            logic: true,
          },

          {
            name: "hasDetection",
            type: "bool",
            description: "If its true, this unit can detect invisible units.",
            default_: false,
            logic: true,
          },

          {
            name: "expOnlyFromOwnKills",
            type: "bool",
            description:
              "If true, this unit gets only experience when it actually kills a unit itself, but not when its just in range when an enemy unit is killed by another allied unit.",
            default_: false,
            logic: true,
          },

          {
            name: "alliesGetExperience",
            type: "bool",
            description: "If true, allied units get experience when killing this unit.",
            default_: false,
            logic: true,
          },

          {
            name: "alliesGetGold",
            type: "bool",
            description: "If true, allied units get gold reward when killing this unit.",
            default_: false,
            logic: true,
          },

          {
            name: "isReflectingProjectiles",
            type: "bool",
            description:
              "If this is true, this unit reflects projectiles that would hit it otherwise. Only affects projectiles that deal damage while flying.",
            default_: false,
            logic: true,
          },

          {
            name: "isBlockingProjectiles",
            type: "bool",
            description:
              "If this is true, this unit blocks (kills) projectiles that would hit it otherwise. Only affects projectiles that deal damage while flying.",
            default_: false,
            logic: true,
          },

          {
            name: "takeDamageOnBlock",
            type: "bool",
            description:
              "If this unit blocks or reflects a projectile, this field determines if it is taking damage from the projectile.",
            default_: false,
            logic: true,
          },

          {
            name: "isInvincible",
            type: "bool",
            description: "If this is true, the building can not be attacked or damaged.",
            default_: false,
            logic: true,
          },

          {
            name: "isInvisible",
            type: "bool",
            description: "Invisible units can only be attacked when detected.",
            default_: false,
            logic: true,
          },

          {
            name: "alwaysNeutral",
            type: "bool",
            description:
              "Determines if this building is always neutral (can not be owned by a player).",
            default_: false,
            logic: true,
          },

          {
            name: "takesGold",
            type: "bool",
            description: "Determines if this building can be used to return gold by workers.",
            default_: false,
            logic: true,
          },

          {
            name: "spawnWithAMove",
            type: "bool",
            description:
              "If this is true, units this unit produces will use AMove command when spawning to walk to the waypoint instead of normal move.",
            default_: false,
            logic: true,
          },

          {
            name: "preventsReveal",
            type: "bool",
            description:
              "If a player has no buildings that prevent revealing, he will be revealed. That means all his buildings become visible to other players.",
            default_: true,
            logic: true,
          },

          {
            name: "preventsLoss",
            type: "bool",
            description:
              "If a player has no buildings or units that prevent losing, he will be eliminated.",
            default_: true,
            logic: true,
          },

          {
            name: "isMechanical",
            type: "bool",
            description: "Mechanical units (and all buildings) can be repaired and not healed.",
            default_: false,
            logic: true,
          },

          {
            name: "isUndead",
            type: "bool",
            description: "Undead units take damage from healing spells.",
            default_: false,
            logic: true,
          },

          {
            name: "isBiological",
            type: "bool",
            description:
              "Classification for unit types. Does not have any active effects but there can be abilities that only work for certain unit types. For example the 'Heal' spell only works with biological units.",
            default_: false,
            logic: true,
          },

          {
            name: "isBeast",
            type: "bool",
            description:
              "Classification for unit types. Does not have any active effects but there can be abilities that only work for certain unit types. For example the 'Heal' spell only works with biological units.",
            default_: false,
            logic: true,
          },

          {
            name: "isHuman",
            type: "bool",
            description:
              "Classification for unit types. Does not have any active effects but there can be abilities that only work for certain unit types. For example the 'Heal' spell only works with biological units.",
            default_: false,
            logic: true,
          },

          {
            name: "noShow",
            type: "bool",
            description: "If this is true, the unit will not be drawn.",
            default_: false,
            logic: true,
          },
        ];

        var ability_fields = [
          {
            name: "name",
            type: "string",
            max_len: 30,
            min_len: 1,
            description: "The abilities name",
            default_: "new_ability",
            logic: true,
          },

          {
            name: "type",
            type: "selection",
            values: EDITOR_COMMANDS,
            all_values: COMMAND,
            description:
              "The abilities type (determines what the basic function of the ability is)",
            default_: EDITOR_COMMANDS.UNIVERSAL,
            descriptions: commandTypeDescriptions,
            logic: true,
          },

          {
            name: "unitType",
            type: "selection",
            values: lists.unitTypes,
            description: "The unit type or building type that this ability produces.",
            default_: null,
            logic: true,
          },

          {
            name: "hotkey",
            type: "selection",
            values: KEY,
            description: "The abilities hotkey",
            default_: KEY.Q,
          },

          {
            name: "targetIsPoint",
            type: "bool",
            description: "Determines if the target is a point.",
            default_: false,
            logic: true,
          },

          {
            name: "targetIsUnit",
            type: "bool",
            description: "Determines if the target is a unit.",
            default_: false,
            logic: true,
          },

          {
            name: "isInstant",
            type: "bool",
            description: "Determines if this order is instant (no target).",
            default_: false,
            logic: true,
          },

          {
            name: "isChanneled",
            type: "bool",
            description:
              "Channeled spells are being cast repediately until the caster is being ordered a different order (or doesnt have enough mana anymore) instead of only once like normal spells.",
            default_: false,
            logic: true,
          },

          {
            name: "playLaunchSoundOnce",
            type: "bool",
            description:
              "When this spell is channeled, you can choose to play the launch sound only once while channeling.",
            default_: false,
            logic: true,
          },

          {
            name: "useAoeCursor",
            type: "bool",
            description:
              "Determines if the mouse cursor becomes an aoe indicator when searching a target for this ability (only works / makes sense for ranged abilities with aoe damage).",
            default_: false,
          },

          {
            name: "cursor",
            type: "selection",
            values: Cursors,
            all_values: Cursors,
            description: "The cursor displayed when the user selects the ability.",
            default_: Cursors.DEFAULT,
          },

          {
            name: "commandCard",
            type: "integer",
            min_val: 0,
            max_val: 99,
            description:
              "Which command card the button will be. 0 is the default one, 1 is the 1st sub command card (for example for workers all the make building commands are on sub command cards).",
            default_: 0,
          },

          {
            name: "interfacePosX",
            type: "integer",
            min_val: 0,
            max_val: 4,
            description:
              "The x pos of the button on the command card (0 is very left, 4 is very right).",
            default_: 0,
          },

          {
            name: "interfacePosY",
            type: "integer",
            min_val: 0,
            max_val: 1,
            description:
              "The y pos of the button on the command card (0 is top row, 1 is bottom row).",
            default_: 0,
          },

          {
            name: "requiredLevels",
            type: "integer",
            min_val: 0,
            max_val: 999999,
            isArray: true,
            description:
              "If you want the ability to be learnable, you can put here one one more levels, that the unit needs to reach before it can learn this ability (only makes sense if you put the ability on a unit that can have levels of course). Put more values for multi level abilities, the first value will be the unit level required for ability lvl 1, the 2nd value the unit level required for ability lvl 2 and so on ...",
            default_: 0,
            default2_: [],
            logic: true,
          },

          {
            name: "learnCommandCard",
            type: "integer",
            min_val: 0,
            max_val: 99,
            description:
              "Which command card the learn button will be. 0 is the default one, 1 is the 1st sub command card (for example for workers all the make building commands are on sub command cards). This is required when this ability has to be learned first, where you want the button for learning it to be.",
            default_: 0,
          },

          {
            name: "learnInterfacePosX",
            type: "integer",
            min_val: 0,
            max_val: 4,
            description:
              "The x pos of the learn button on the command card (0 is very left, 4 is very right). This is required when this ability has to be learned first, where you want the button for learning it to be.",
            default_: 0,
          },

          {
            name: "learnInterfacePosY",
            type: "integer",
            min_val: 0,
            max_val: 1,
            description:
              "The y pos of the learn button on the command card (0 is top row, 1 is bottom row). This is required when this ability has to be learned first, where you want the button for learning it to be.",
            default_: 0,
          },

          {
            name: "learnHotkey",
            type: "selection",
            values: KEY,
            description: "The abilities hotkey",
            default_: KEY.Q,
          },

          {
            name: "image",
            type: "selection",
            values: lists.imgs,
            description: "The abilities image (that shows on the button)",
            default_: lists.imgs.stop,
            special: "imgPreview",
          },

          {
            name: "dance_img",
            type: "selection",
            values: ["dance1", "dance2"],
            description: "The animation played when this dance command is used.",
            default_: "dance1",
          },

          {
            name: "attackEffectInit",
            type: "selection",
            values: list_attack_effects,
            description: "The graphic effect that appears when start using this ability.",
            default_: list_attack_effects.spell,
            logic: true,
          },

          {
            name: "attackEffect",
            type: "selection",
            description: "The graphic effect, that shows when this ability is used.",
            values: list_attack_effects,
            default_: null,
            logic: true,
          },

          {
            name: "description",
            type: "string",
            max_len: 500,
            min_len: 0,
            description: "The abilities description",
            default_: "",
          },

          {
            name: "requirementType",
            type: "selection",
            isArray: true,
            values: lists.buildingsUpgrades,
            description:
              "The building or research type for the requirement. Put Barracks here for example, then put 1 for level, that will make this ability require at least 1 barracks.",
            default_: lists.buildingsUpgrades.house,
            default2_: [],
            logic: true,
            group: "requirements",
            subName: "type",
            groupDescription:
              "Here you can put tech requirements, like for example a specific upgrade or a specific building is required to use this ability.",
          },

          {
            name: "requirementLevel",
            type: "integer",
            isArray: true,
            min_val: 0,
            max_val: 9999,
            description: "The level that the required building / research has to be.",
            default_: 1,
            default2_: [],
            logic: true,
            group: "requirements",
            subName: "level",
            groupDescription:
              "Here you can put tech requirements, like for example a specific upgrade or a specific building is required to use this ability.",
          },

          {
            name: "requirementText",
            type: "string",
            isArray: true,
            max_len: 300,
            min_len: 0,
            description: "The description for failed requirement mets.",
            default_: "",
            default2_: [],
            logic: true,
            group: "requirements",
            subName: "text",
            groupDescription:
              "Here you can put tech requirements, like for example a specific upgrade or a specific building is required to use this ability.",
          },

          {
            name: "targetRequirements1",
            type: "selection",
            isArray: true,
            values: targetRequirements,
            description:
              "The requirements the target has to fit. If you put multiple requirements into one field, only one of them has to fit.",
            default_: targetRequirements.isBiological,
            default2_: [],
            logic: true,
          },

          {
            name: "targetRequirements2",
            type: "selection",
            isArray: true,
            values: targetRequirements,
            description:
              "The requirements the target has to fit. If you put multiple requirements into one field, only one of them has to fit.",
            default_: targetRequirements.isBiological,
            default2_: [],
            logic: true,
          },

          {
            name: "targetRequirements3",
            type: "selection",
            isArray: true,
            values: targetRequirements,
            description:
              "The requirements the target has to fit. If you put multiple requirements into one field, only one of them has to fit.",
            default_: targetRequirements.isBiological,
            default2_: [],
            logic: true,
          },

          {
            name: "launchSound",
            type: "selection",
            values: SOUND,
            description: "The sound that plays when the ability starts.",
            default_: SOUND.NONE,
            logic: true,
          },

          {
            name: "upgrade",
            type: "selection",
            values: lists.upgrades,
            description: "The upgrade that will be researched.",
            default_: null,
            logic: true,
          },

          {
            name: "improvedBuilding",
            type: "selection",
            values: lists.buildingTypes,
            description: "The building that the building will be upgraded to.",
            default_: null,
            logic: true,
          },

          {
            name: "manaCost",
            type: "integer",
            min_val: -9999,
            max_val: 9999,
            description:
              "The mana cost of this ability. Put multiple values if you want to create a multiple level ability. First value will be level 1, 2nd level 2 and so on ...",
            default_: 0,
            default2_: [0],
            logic: true,
            isArray: true,
          },

          {
            name: "goldCost",
            type: "integer",
            min_val: -9999,
            max_val: 9999,
            description: "The gold cost of this ability.",
            default_: 0,
            logic: true,
          },

          {
            name: "chat_str",
            type: "string",
            max_len: 30,
            min_len: 0,
            description:
              "The chat string that will trigger this ability. An empty string means this ability cannot be triggered by a chat.",
            default_: "",
            hide: true,
          },

          {
            name: "aoeRadius",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description:
              "If this is bigger than 0, the ability will deal aoe damage (= area of effect). That means not only the target unit takes damage, but all units in range of the target unit. Put multiple values if you want to create a multiple level ability. First value will be level 1, 2nd level 2 and so on ...",
            default_: 0,
            default2_: [0],
            logic: true,
            isArray: true,
          },

          {
            name: "damage",
            type: "float",
            min_val: -99999999,
            max_val: 99999999,
            description:
              "The damage this ability does. Put multiple values if you want to create a multiple level ability. First value will be level 1, 2nd level 2 and so on ...",
            default_: 0,
            default2_: [0],
            logic: true,
            isArray: true,
          },

          {
            name: "projectileDamage",
            type: "float",
            min_val: -99999999,
            max_val: 99999999,
            description:
              "The damage the projectile does while flying. Damage will be dealt every 1 / 20 sec. So if you put 2 here, the projectile will deal 40 dmg per sec. Put multiple values if you want to create a multiple level ability. First value will be level 1, 2nd level 2 and so on ...",
            default_: 0,
            default2_: [0],
            logic: true,
            isArray: true,
          },

          {
            name: "projectileAoeRadius",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description:
              "The aoe radius in which the projectile does damage while flying. Put multiple values if you want to create a multiple level ability. First value will be level 1, 2nd level 2 and so on ...",
            default_: 0,
            default2_: [0],
            isArray: true,
            logic: true,
          },

          {
            name: "maximizeRangeWhenCasting",
            type: "bool",
            description:
              "If this is true, the spell gets cast at full range even when the target point is closer than max range. You usually want this for spells that have damaging projectiles, because the projectile should fly as long as possible.",
            default_: false,
            logic: true,
          },

          {
            name: "hitsFriendly",
            type: "bool",
            description:
              "Determines if this ability affects friendly units (only relevant on aoe abilities).",
            default_: true,
            logic: true,
          },

          {
            name: "hitsEnemy",
            type: "bool",
            description:
              "Determines if this ability affects enemy units (only relevant on aoe abilities).",
            default_: true,
            logic: true,
          },

          {
            name: "hitsSelf",
            type: "bool",
            description:
              "Determines if this ability affects the casting unit itself (only relevant on aoe abilities).",
            default_: true,
            logic: true,
          },

          {
            name: "targetFilters",
            type: "string",
            isArray: true,
            max_len: 50,
            min_len: 0,
            description:
              "Here you can put one or more fields that the target units have to meet to be hit (for exaple flying, isBiological, isMechanical, isUnit, isBuilding, ...).",
            default_: "",
            default2_: [],
            logic: true,
          },

          {
            name: "targetFiltersExclude",
            type: "string",
            isArray: true,
            max_len: 50,
            min_len: 0,
            description:
              "The same as targetFilters, but these filters will exclude units from being a target instead of including them.",
            default_: "",
            default2_: [],
            logic: true,
          },

          {
            name: "effectScale",
            type: "float",
            min_val: 0,
            max_val: 99,
            description:
              "The scaling of the attack effect graphic (only graphic, no gameplay effect).",
            default_: 1,
            logic: true,
          },

          {
            name: "hasAutocast",
            type: "bool",
            description: "If set to true, this ability can be set to be cast automatically.",
            default_: false,
            logic: true,
          },

          {
            name: "autocastDefault",
            type: "bool",
            description:
              "If set to true, autocast is enabled by default (only makes sense, if hasAutocast is enabled, of course).",
            default_: false,
            logic: true,
          },

          {
            name: "autocastConditions",
            realTimeCompile: true,
            type: "string",
            max_len: 100,
            min_len: 0,
            description:
              "If this ability has autocast, you can use this to tell the AI what targets to use for autocasting. Write something like hp > 10 and units that have hp bigger than 10 will be targetted. use && to combine multiple conditions with a logical AND, use || to combine multiple conditions with a logical OR. Use type.fieldname to refer to the units basic types fields. If you use hp, its the current units hp, if you use type.hp, its its basic hp. So if you use hp < type.hp for example, you get units that currently have hp less then their full hp. Use this to refer to the casting unit. For example this.owner = owner will only hit units that have the same owner as the casting unit.",
            default_: "",
            logic: true,
          },

          {
            name: "projectileSpeed",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description:
              "The speed which the projectile travels. Put multiple values if you want to create a multiple level ability. First value will be level 1, 2nd level 2 and so on ...",
            default_: 8,
            default2_: [8],
            logic: true,
            isArray: true,
          },

          {
            name: "duration",
            type: "float",
            min_val: 0.0,
            max_val: 99999999,
            description:
              "If projectileSpeed is 0 then you can set a duration instead, that determines how long it takes for the ability to hit.",
            default_: 0,
            logic: true,
            displayScale: 1 / 20,
          },

          {
            name: "castingDelay",
            type: "float",
            min_val: 0.0,
            max_val: 99999999,
            description:
              "When a unit starts using this ability there can be a short delay until the ability actually starts kicking in.",
            default_: 0,
            logic: true,
            displayScale: 1 / 20,
          },

          {
            name: "cooldown",
            type: "float",
            min_val: 0.0,
            max_val: 99999999,
            description: "The time the unit cant do any other things after doing this ability.",
            default_: 0,
            logic: true,
            displayScale: 1 / 20,
          },

          {
            name: "cooldown2",
            type: "float",
            min_val: 0.0,
            max_val: 99999999,
            description:
              "The time it takes for this unit to be able to do this order again after it did it.",
            default_: 0,
            logic: true,
            displayScale: 1 / 20,
          },

          {
            name: "range",
            type: "float",
            min_val: 0.0,
            max_val: 99999999,
            description:
              "The range of the ability. Put multiple values if you want to create a multiple level ability. First value will be level 1, 2nd level 2 and so on ...",
            default_: 0,
            default2_: [0],
            logic: true,
            isArray: true,
          },

          {
            name: "minRange",
            type: "float",
            min_val: -999,
            max_val: 999,
            description:
              "The minimum range of this ability. Set to -1 for no min range. Put multiple values if you want to create a multiple level ability. First value will be level 1, 2nd level 2 and so on ...",
            default_: -999,
            default2_: [-999],
            logic: true,
            isArray: true,
          },

          {
            name: "bounceDistMin",
            type: "float",
            min_val: 0.0,
            max_val: 99.0,
            description: "The min range of how far this ability smashes target units back.",
            default_: 0,
            logic: true,
          },

          {
            name: "bounceDistMax",
            type: "float",
            min_val: 0.0,
            max_val: 99.0,
            description: "The max range of how far this ability smashes target units back.",
            default_: 0,
            logic: true,
          },

          {
            name: "bouncePower",
            type: "float",
            min_val: 0.0,
            max_val: 99.0,
            description:
              "If this is set to higher than 0, the ability will smash target units back. It only affects units with power less than this bouncePower.",
            default_: 0,
            logic: true,
          },

          {
            name: "targetCC",
            type: "float",
            min_val: 0,
            max_val: 99,
            description:
              "Target Command Card. Determined the number of the command card that will be switched to (0 = basic command card).",
            default_: 0,
          },

          {
            name: "animationName",
            type: "string",
            max_len: 300,
            min_len: 0,
            description:
              "Name of the animation played when executing this order. The model of the unit must have an ability of this name, otherwise it wont work.",
            default_: "",
          },

          {
            name: "causesFlameDeath",
            type: "bool",
            description:
              "If this is true, then units killed by this ability will burn for some seconds (only visual, no gameplay effect).",
            default_: false,
            logic: true,
          },

          {
            name: "modifiers",
            type: "selection",
            isArray: true,
            values: lists.modifiers,
            description:
              "The modifier this ability applies to target unit(s). Put multiple modifiers if you have a multiple level ability. First modifier will be used at level 1, 2nd at level 2 and so on ...",
            default_: null,
            default2_: [],
            logic: true,
          },

          {
            name: "modifiersSelf",
            type: "selection",
            isArray: true,
            values: lists.modifiers,
            description:
              "The modifier this ability applies to the caster. Put multiple modifiers if you have a multiple level ability. First modifier will be used at level 1, 2nd at level 2 and so on ...",
            default_: null,
            default2_: [],
            logic: true,
          },

          {
            name: "summonedUnits",
            type: "selection",
            isArray: true,
            values: lists.unitTypes,
            description:
              "Unit, that this ability summons. Put multiple units if you want to create a multiple level ability. First unit will be summoned at level 1, 2nd at level 2 and so on ...",
            default_: null,
            default2_: [],
            logic: true,
          },

          {
            name: "summonsUseWaypoint",
            type: "bool",
            description:
              "Determines if the summoned unit(s) move to the waypoint of the summoning unit.",
            default_: false,
            logic: true,
          },

          {
            name: "summonsWaypointAMove",
            type: "bool",
            description:
              "Determines if the summoned units move to the waypoint with attack-move instead of normal move command.",
            default_: false,
            logic: true,
          },

          {
            name: "ignoreSupplyCheck",
            type: "bool",
            description:
              "If this is true, the summonedUnit will be summoned even if theres not enough free supply.",
            default_: false,
            logic: true,
          },

          {
            name: "requiresVision",
            type: "bool",
            description:
              "Determines if the casting player needs to have vision at the target point in order to be able to cast this spell.",
            default_: false,
            logic: true,
          },
        ];

        var upgrade_fields = [
          {
            name: "name",
            type: "string",
            max_len: 30,
            min_len: 1,
            description: "The upgrades name",
            default_: "new_upgrade",
            logic: true,
          },

          {
            name: "buildTime",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The time it takes to research this upgrade.",
            default_: 30,
            logic: true,
            displayScale: 1 / 20,
          },

          {
            name: "cost",
            type: "float",
            min_val: 0,
            max_val: 99999999,
            description: "The amount of gold it costs to research this upgrade.",
            default_: 100,
            logic: true,
          },

          {
            name: "maxLevel",
            type: "integer",
            min_val: 0,
            max_val: 9999,
            description: "The amount of levels this upgrade has.",
            default_: 1,
            logic: true,
          },

          {
            name: "description",
            type: "string",
            max_len: 300,
            min_len: 0,
            description: "The description of the upgrade.",
            default_: "",
          },

          {
            name: "image",
            type: "selection",
            values: lists.imgs,
            description: "The upgrades image",
            default_: null,
            special: "imgPreview",
          },

          {
            name: "effectsTypes",
            type: "selection",
            isArray: true,
            values: lists.types,
            description:
              "The type of the unit / building / upgrade / ability that receives the modification.",
            default_: lists.types.soldier,
            default2_: [],
            logic: true,
            group: "modification",
            subName: "type",
            groupDescription:
              "Here you can determine which field of which units will be affected by this upgrade and how they will be affected.",
          },

          {
            name: "effectsFields",
            type: "string",
            max_len: 300,
            min_len: 0,
            default_: "damage",
            default2_: [],
            isArray: true,
            description: "Which field should be modified.",
            logic: true,
            group: "modification",
            subName: "field",
            groupDescription:
              "Here you can determine which field of which units will be affected by this upgrade and how they will be affected.",
          },

          {
            name: "effectsModifications",
            type: "float",
            isArray: true,
            min_val: -99999999,
            max_val: 99999999,
            description: "How to modify the field. Here you can put a value that will be added.",
            default_: 0.0,
            default2_: [],
            logic: true,
            group: "modification",
            subName: "add",
            groupDescription:
              "Here you can determine which field of which units will be affected by this upgrade and how they will be affected.",
          },

          {
            name: "effectsModsMultiplier",
            type: "float",
            isArray: true,
            min_val: -99999999,
            max_val: 99999999,
            description:
              "How to modify the field. Here you can put a value that will be multiplied.",
            default_: 1.0,
            default2_: [],
            logic: true,
            group: "modification",
            subName: "multiply",
            groupDescription:
              "Here you can determine which field of which units will be affected by this upgrade and how they will be affected.",
          },

          {
            name: "noParallelResearch",
            type: "bool",
            description:
              "If this is true, the next upgrade level can only be started after the last one is finished. By default, if this is not set, multiple levels can be researched at the same time.",
            default_: false,
            logic: true,
          },
        ];

        var modifiers_fields = [
          {
            name: "name",
            type: "string",
            max_len: 30,
            min_len: 1,
            description: "The modifiers name",
            default_: "new_modifier",
            logic: true,
          },

          {
            name: "description",
            type: "string",
            max_len: 300,
            min_len: 0,
            description: "The description of the modifier.",
            default_: "",
          },

          {
            name: "image",
            type: "selection",
            values: lists.imgs,
            description: "The modifiers image",
            default_: null,
            special: "imgPreview",
          },

          {
            name: "duration",
            type: "float",
            min_val: -99999999,
            max_val: 99999999,
            description:
              "The duration of the modifier. It will be removed after the duration expires. Put 0 or a negative number for endless duration.",
            default_: 60,
            logic: true,
            displayScale: 1 / 20,
          },

          {
            name: "fields",
            type: "string",
            max_len: 300,
            min_len: 0,
            default_: "damage",
            default2_: [],
            isArray: true,
            description: "The field that will be modified.",
            logic: true,
            group: "modification",
            subName: "field",
            groupDescription:
              "Here you can determine which field will be affected by this modifier and how.",
          },

          {
            name: "modifications",
            type: "float",
            isArray: true,
            min_val: -99999999,
            max_val: 99999999,
            description:
              "How the field will be modified. The value in here will be added to the value of the field.",
            default_: 0.0,
            default2_: [],
            logic: true,
            group: "modification",
            subName: "add",
            groupDescription:
              "Here you can determine which field will be affected by this modifier and how.",
          },

          {
            name: "modificationsMultiplier",
            type: "float",
            isArray: true,
            min_val: -99999999,
            max_val: 99999999,
            description:
              "How the field will be modified. The value in here will be multiplied with the value of the field.",
            default_: 1.0,
            default2_: [],
            logic: true,
            group: "modification",
            subName: "multiply",
            groupDescription:
              "Here you can determine which field will be affected by this modifier and how.",
          },

          {
            name: "maxStack",
            type: "integer",
            min_val: 0,
            max_val: 9999,
            description:
              "How many instances of this modifier can be on one unit. Put 0 for unlimited instancs.",
            default_: 1,
            logic: true,
          },

          {
            name: "auraModifiers",
            type: "selection",
            isArray: true,
            values: lists.modifiers,
            description:
              "This is the modifier that gets applied. It gets applied every 1.05 sec, so if you want them to be applied constantly, you want to give them a duration of at least something like 1.1 sec.",
            default_: null,
            default2_: [],
            logic: true,
            group: "aura",
            subName: "modifier",
            groupDescription:
              "Here you can create auras. Put a range and a modifier and the modifier will be applied to all units in range.",
          },

          {
            name: "auraRange",
            type: "float",
            isArray: true,
            min_val: 0,
            max_val: 999,
            description: "Determines the range in which the modifier gets applied.",
            default_: 9,
            default2_: [],
            logic: true,
            group: "aura",
            subName: "range",
            groupDescription:
              "Here you can create auras. Put a range and a modifier and the modifier will be applied to all units in range.",
          },

          {
            name: "auraHitsFriendly",
            type: "bool",
            description: "Determines if the aura affects the casting players units.",
            default_: true,
            logic: true,
          },

          {
            name: "auraHitsAllied",
            type: "bool",
            description: "Determines if the aura affects units by allied players.",
            default_: true,
            logic: true,
          },

          {
            name: "auraHitsEnemy",
            type: "bool",
            description: "Determines if the aura affects enemy units.",
            default_: true,
            logic: true,
          },

          {
            name: "auraHitsSelf",
            type: "bool",
            description: "Determines if the aura affects the origin unit.",
            default_: true,
            logic: true,
          },

          {
            name: "auraTargetFilters",
            type: "selection",
            isArray: true,
            values: targetFilters1,
            description:
              "Here you can put one or more fields that the target units have to meet to be hit.",
            default_: "isHuman",
            default2_: [],
            logic: true,
          },

          {
            name: "auraTargetFiltersExclude",
            type: "selection",
            isArray: true,
            values: targetFilters1,
            description:
              "The same as targetFilters, but these filters will exclude units from being a target instead of including them.",
            default_: "isHuman",
            default2_: [],
            logic: true,
          },

          {
            name: "disabledCommands",
            type: "selection",
            isArray: true,
            values: lists.commands,
            description:
              "Abilities / commands that get disabled for the target unit while being under the influence of this modifier.",
            default_: lists.commands.flamestrike,
            default2_: [],
            logic: true,
          },

          {
            name: "changeUnitImg",
            type: "bool",
            description: "Determines if this modifier changes the img of the unit.",
            default_: false,
          },

          {
            name: "unitImg",
            type: "selection",
            values: lists.imgs,
            description:
              "Changes the units img to this img. Only works, when changeUnitImg is set.",
            default_: null,
          },

          {
            name: "changeAttackEffect",
            type: "bool",
            description:
              "Determines if this modifier changes the attack effect of the unit (only graphic).",
            default_: false,
            logic: true,
          },

          {
            name: "attackEffect",
            type: "selection",
            values: list_attack_effects,
            description:
              "Changes the units attack effect to this effect. Only works, when changeAttackEffect is set.",
            default_: null,
            logic: true,
          },

          {
            name: "effects",
            type: "selection",
            isArray: true,
            values: list_attack_effects,
            description: "Graphic effects that will be displayed on a unit that has this modifier",
            default_: null,
            default2_: [],
          },

          {
            name: "auraColor",
            type: "complex",
            default_: { red: 150, green: 250, blue: 180, alpha: 0.2 },
            values: [
              {
                name: "red",
                type: "integer",
                min_val: 0,
                max_val: 255,
                description: "The red component of the color.",
                default_: 150,
              },
              {
                name: "green",
                type: "integer",
                min_val: 0,
                max_val: 255,
                description: "The green component of the color.",
                default_: 250,
              },
              {
                name: "blue",
                type: "integer",
                min_val: 0,
                max_val: 255,
                description: "The blue component of the color.",
                default_: 180,
              },
              {
                name: "alpha",
                type: "float",
                min_val: 0,
                max_val: 1.0,
                description: "The alpha component of the color.",
                default_: 0.2,
              },
            ],
            description: "The color of the aura, if the aura effect is enabled.",
          },

          {
            name: "sound",
            type: "selection",
            values: SOUND,
            description: "The sound that plays when this modifier is active (will be looped).",
            default_: SOUND.NONE,
          },

          {
            name: "volume",
            type: "float",
            min_val: 0,
            max_val: 1.0,
            description: "The volume at which the sound will be played",
            default_: 1.0,
          },

          {
            name: "killModifiers",
            type: "selection",
            isArray: true,
            values: lists.modifiers,
            description:
              "Here you can put modifiers that will be removed when this modifier gets applied.",
            default_: null,
            default2_: [],
            logic: true,
          },
        ];

        const frameStartData = [
          {
            name: "x",
            type: "integer",
            min_val: 0,
            max_val: 5000,
            description: "The x cordinate of the part of the image where this animation starts.",
            default_: 0,
          },

          {
            name: "y",
            type: "integer",
            min_val: 0,
            max_val: 5000,
            description: "The y cordinate of the part of the image where this animation starts.",
            default_: 0,
          },

          {
            name: "w",
            type: "integer",
            min_val: 0,
            max_val: 5000,
            description:
              "The width (pixels) of the part of the image that contains this animation.",
            default_: 0,
          },

          {
            name: "h",
            type: "integer",
            min_val: 0,
            max_val: 5000,
            description:
              "The height (pixels) of the part of the image that contains this animation.",
            default_: 0,
          },

          {
            name: "frameWidth",
            type: "integer",
            min_val: 0,
            max_val: 5000,
            description:
              "The width (pixels) of one animation frame of this animation. The width (w) divided by the frameWidth equels the number of frames for this animation.",
            default_: 0,
          },
        ];

        var editableFrameStartData = [
          ...frameStartData,
          {
            name: "frames",
            type: "integer",
            isArray: true,
            min_val: 0,
            max_val: 5000,
            description:
              "When you have multiple frames, then you can put here in which order they will be played. Each entry will last for 0.05 sec, so if you put 1, 1, 1, 2, 3 for example, then the first frame will be shown for 0.15 sec, then the 2nd frame will be shown for 0.05 sec and then the 3rd frame for 0.05 sec and then it starts all over again.",
            default_: 0,
            default2_: [],
          },
        ];

        var imgs_fields = [
          {
            name: "name",
            type: "string",
            max_len: 30,
            min_len: 1,
            description: "The images name",
            default_: "new_img",
          },

          {
            name: "file",
            type: "selection",
            values: customImgs,
            description: "The source file",
            default_: null,
          },

          {
            name: "_angles",
            type: "selection",
            values: possibleAngleCounts,
            description:
              "4 angle units have 4 views (top, left, right, down), 8 angle units have 8 views (top, left, right, down, top-left, top-right, down-left, down-right). 1 angle units only have one view.",
            default_: 0,
          },

          {
            name: "idle",
            type: "complex",
            default_: { x: 0, y: 0, w: 0, h: 0, frameWidth: 0 },
            values: frameStartData,
            description: "The idle animation frames.",
          },

          {
            name: "walk",
            type: "complex",
            default_: { x: 0, y: 0, w: 0, h: 0, frameWidth: 0 },
            values: frameStartData,
            description: "The walk animation frames.",
          },

          {
            name: "walkGold",
            type: "complex",
            default_: { x: 0, y: 0, w: 0, h: 0, frameWidth: 0 },
            values: frameStartData,
            description: "The walkGold animation frames.",
          },

          {
            name: "die",
            type: "complex",
            default_: { x: 0, y: 0, w: 0, h: 0, frameWidth: 0 },
            values: frameStartData,
            description: "The die animation frames.",
          },

          {
            name: "attack",
            type: "complex",
            default_: { x: 0, y: 0, w: 0, h: 0, frameWidth: 0 },
            values: frameStartData,
            description: "The attack animation frames.",
          },

          {
            name: "special1",
            type: "complex",
            default_: { x: 0, y: 0, w: 0, h: 0, frameWidth: 0 },
            values: frameStartData,
            description:
              "The special1 animation frames (can be used for casting animation for example)",
          },

          {
            name: "img",
            type: "complex",
            default_: { x: 0, y: 0, w: 0, h: 0, frameWidth: 0, frames: [] },
            values: editableFrameStartData,
            description: "The main image.",
          },
          {
            name: "constructionImg",
            type: "complex",
            default_: { x: 0, y: 0, w: 0, h: 0, frameWidth: 0, frames: [] },
            values: editableFrameStartData,
            description:
              "The image that is shown while the building is under construction. (only required for building images)",
          },

          {
            name: "damagedImg",
            type: "complex",
            default_: { x: 0, y: 0, w: 0, h: 0, frameWidth: 0, frames: [] },
            values: editableFrameStartData,
            description:
              "The image that is shown when the building is (heavily) damaged. (only required for building images)",
          },

          {
            name: "busyImgs",
            type: "complex",
            default_: { x: 0, y: 0, w: 0, h: 0, frameWidth: 0, frames: [] },
            values: editableFrameStartData,
            description:
              "The image that is shown when the building is busy (training a unit, researching an upgrade). (only required for building images)",
          },

          {
            name: "busyDamagedImgs",
            type: "complex",
            default_: { x: 0, y: 0, w: 0, h: 0, frameWidth: 0, frames: [] },
            values: editableFrameStartData,
            description:
              "The image that is shown when the building is damaged and busy (training a unit, researching an upgrade). (only required for building images)",
          },

          {
            name: "upgradeImg",
            type: "complex",
            default_: { x: 0, y: 0, w: 0, h: 0, frameWidth: 0, frames: [] },
            values: editableFrameStartData,
            description:
              "The image that is shown when the building is upgrading to a different building. (only required for building images)",
          },

          {
            name: "upgradeImgDamaged",
            type: "complex",
            default_: { x: 0, y: 0, w: 0, h: 0, frameWidth: 0, frames: [] },
            values: editableFrameStartData,
            description:
              "The image that is shown when the building is damaged and upgrading to a different building. (only required for building images)",
          },

          {
            name: "imgEmpty",
            type: "complex",
            default_: { x: 0, y: 0, w: 0, h: 0, frameWidth: 0, frames: [] },
            values: editableFrameStartData,
            description:
              "The image that is shown when the building used to have gold but has been mined out. (only required for building images)",
          },
        ];

        var targetFilters = [];

        for (var i = 0; i < unit_fields.length; i++)
          if (unit_fields[i].logic) targetFilters.push(unit_fields[i].name);

        for (var i = 0; i < building_fields.length; i++)
          if (building_fields[i].logic && !targetFilters.contains(building_fields[i].name))
            targetFilters.push(building_fields[i].name);

        targetFilters.push();

        var list_unit_fields = {};
        for (var i = 0; i < unit_fields.length; i++)
          list_unit_fields[unit_fields[i].name] = unit_fields[i];

        var list_building_fields = {};
        for (var i = 0; i < building_fields.length; i++)
          list_building_fields[building_fields[i].name] = building_fields[i];

        var list_ability_fields = {};
        for (var i = 0; i < ability_fields.length; i++)
          list_ability_fields[ability_fields[i].name] = ability_fields[i];

        var list_upgrade_fields = {};
        for (var i = 0; i < upgrade_fields.length; i++)
          list_upgrade_fields[upgrade_fields[i].name] = upgrade_fields[i];

        var list_modifiers_fields = {};
        for (var i = 0; i < modifiers_fields.length; i++)
          list_modifiers_fields[modifiers_fields[i].name] = modifiers_fields[i];

        var list_graphic_fields = {};
        for (var i = 0; i < imgs_fields.length; i++)
          list_graphic_fields[imgs_fields[i].name] = imgs_fields[i];

        function Player(
          name,
          controller,
          number,
          team,
          aiRandomizer,
          custom_ai_index,
          no_ai_update,
          dances,
          noAI
        ) {
          this.name = name;
          this.controller = controller; // Human, remote, cpu, none
          this.gold = game.getStartGold();
          this.number = number;
          this.supply = 0; // current supply
          this.lastAttackMessage = 0; // for ai
          this.team = game.teams[team] ? game.teams[team] : game.teams[0];
          this.team.hasPlayers = true;
          this.originalTeam = this.team; // gotta be stored, cuz when the game ends, the team of a player changes to 0 (so he gets full vision), but then when the replay is saved, the team needs to be his original team in the replay file
          this.aiUpdate = !no_ai_update ? true : false;
          this.isRevealed = false;
          this.noAI = noAI;
          this.isAlive = true;

          // global game variables (supply, tech requirements, ...)
          this.maxSupply = 0;
          this.realMaxSupply = 0;
          this.supplyCap = game.getMaxSupply();
          this.buildings = {}; // format: {id_string: count}
          this.buildingsUC = {}; // (under construction) format: {id_string: count}
          this.pseudoBuildings = {}; // format: {id_string: level}
          this.upgrades = {}; // format: {id_string: level}
          this.upgradeMods = {}; // all modified fields from upgrades (format: unitType: {fieldName: mod, fieldName2: mod})

          // statistics
          this.apm = 0;
          this.minedGold = 0;
          this.unspentGold = 0;

          // randomize AI; if randomizer number was passd use that to choose the strategy
          if (this.controller == CONTROLLER.COMPUTER);
          {
            this.randomAI = aiRandomizer
              ? Math.floor(aiRandomizer + number) % 4
              : Math.floor(Math.random() * 3);
            this.aiObject = {};

            if (custom_ai_index >= 0) this.aiObject.update = customAIFunctions[custom_ai_index];

            // else
            //	this.aiObject.update = ouchyAI;

            this.scope = new Scope(this);
          }

          this.dances = dances ? dances : "";

          // ai variables
          if (this.randomAI == 0) {
            this.unitCountToAttack = 9;
            this.makeTowerAtStart = true;
            this.expand = false;
            this.raxAt1Base = 2;
            this.raxAt2Base = 2;
            this.AIName = "2rax allin";
          } else if (this.randomAI == 1) {
            this.unitCountToAttack = 14;
            this.raxAt1Base = 0;
            this.raxAt2Base = 4;
            this.makeTowerAtStart = false;
            this.expand = true;
            this.AIName = "greedy expansion";
          } else if (this.randomAI == 2) {
            this.unitCountToAttack = 8;
            this.makeTowerAtStart = true;
            this.raxAt1Base = 1;
            this.raxAt2Base = 4;
            this.expand = true;
            this.AIName = "safe expansion";
          } else {
            this.makeWolves = true;
            this.raxAt1Base = 1;
            this.raxAt2Base = 3;
            this.unitCountToAttack = 5;
            this.makeTowerAtStart = false;
            this.expand = true;
            this.makeRaxAtStart = true;
            this.AIName = "beast";
          }
        }

        Player.prototype.die = function () {
          this.isAlive = false;
          message += "plDie$" + this.number + "~";
          game.killAllUnitsOfPlayer(this);
        };

        // called for example when a unit / building is created, dies, updated some variables that are used for example for tech requirements
        Player.prototype.updateGlobalVariables = function () {
          this.buildings = {};
          this.buildingsUC = {};
          this.pseudoBuildings = {};

          // check all buildings by this player
          for (var i = 0; i < game.buildings.length; i++) {
            var b = game.buildings[i];

            if (b.owner == this && !b.isUnderConstruction)
              this.buildings[b.type.id_string] = this.buildings[b.type.id_string]
                ? this.buildings[b.type.id_string] + 1
                : 1;
            else if (b.owner == this && b.isUnderConstruction)
              this.buildingsUC[b.type.id_string] = this.buildingsUC[b.type.id_string]
                ? this.buildingsUC[b.type.id_string] + 1
                : 1;
          }

          // check all finished buildings by this player
          for (var i = 0; i < game.units.length; i++)
            if (game.units[i].owner == this) {
              var u = game.units[i];
              for (var k = 0; k < u.pseudoBuildings.length; k++)
                this.pseudoBuildings[u.pseudoBuildings[k].type.id_string] = this.pseudoBuildings[
                  u.pseudoBuildings[k].type.id_string
                ]
                  ? this.pseudoBuildings[u.pseudoBuildings[k].type.id_string] + 1
                  : 1;
            }

          // check revealed
          if (this.number >= 1) {
            var isRevealed = true;
            _.each(this.buildingsUC, function (val, key) {
              if (lists.types[key] && lists.types[key].preventsReveal) isRevealed = false;
            });
            _.each(this.buildings, function (val, key) {
              if (lists.types[key] && lists.types[key].preventsReveal) isRevealed = false;
            });
            this.isRevealed = isRevealed;
          }

          message +=
            "techUpd$" +
            this.number +
            "$" +
            JSON.stringify(this.buildings) +
            "$" +
            JSON.stringify(this.buildingsUC) +
            "$" +
            JSON.stringify(this.pseudoBuildings) +
            "$" +
            (isRevealed ? "1" : "0") +
            "~";
        };

        Player.prototype.getCostOfNextInstanceForBuilding = function (type) {
          if (!type.costIncrease) return type.cost;

          var cost = type.cost;
          if (type.costIncreaseGroup)
            for (var i = 0; i < type.costIncreaseGroup.length; i++) {
              cost +=
                (this.buildings[type.costIncreaseGroup[i].id_string]
                  ? this.buildings[type.costIncreaseGroup[i].id_string]
                  : 0) * type.costIncrease;
              cost +=
                (this.buildingsUC[type.costIncreaseGroup[i].id_string]
                  ? this.buildingsUC[type.costIncreaseGroup[i].id_string]
                  : 0) * type.costIncrease;
              cost +=
                (this.pseudoBuildings[type.costIncreaseGroup[i].id_string]
                  ? this.pseudoBuildings[type.costIncreaseGroup[i].id_string]
                  : 0) * type.costIncrease;
            }

          return cost;
        };

        // returns a modifier for a given unit field, based on which upgrades this player has researched
        Player.prototype.getValueModifier = function (value, type, alsoUnderConstruction) {
          var mod =
            this.upgradeMods[type.id_string] && this.upgradeMods[type.id_string][value]
              ? this.upgradeMods[type.id_string][value]
              : 0;

          if (alsoUnderConstruction)
            for (var i = 0; i < game.upgrades.length; i++) {
              var u = game.upgrades[i];
              var count = this.upgradeCountInResearch(u);

              for (var k = 0; k < u.effectsTypes.length; k++) {
                if (u.effectsFields[k] == value && u.effectsTypes[k] == type)
                  mod += u.effectsModifications[k] * count;

                if (u.effectsModsMultiplier && k in u.effectsModsMultiplier)
                  for (var j = 0; j < count; j++)
                    mod += type[value] * (u.effectsModsMultiplier[k] - 1);
              }
            }

          return mod;
        };

        Player.prototype.modifyUpgrade = function (upg, level) {
          this.upgrades[upg.id_string] = this.upgrades[upg.id_string]
            ? this.upgrades[upg.id_string] + level
            : level;

          for (var k = 0; k < upg.effectsTypes.length; k++)
            if (upg.effectsTypes[k] && upg.effectsFields[k]) {
              var type = upg.effectsTypes[k];
              var fieldName = upg.effectsFields[k];
              var dataField = upg.effectsTypes[k].getDataFields()[fieldName];

              if (
                dataField &&
                (dataField.type == "float" ||
                  dataField.type == "integer" ||
                  dataField.type == "bool")
              ) {
                if (upg.effectsModifications && upg.effectsModifications[k]) {
                  if (!this.upgradeMods[type.id_string]) this.upgradeMods[type.id_string] = {};

                  this.upgradeMods[type.id_string][fieldName] = this.upgradeMods[type.id_string][
                    fieldName
                  ]
                    ? this.upgradeMods[type.id_string][fieldName] + upg.effectsModifications[k]
                    : upg.effectsModifications[k];
                }

                if (
                  upg.effectsModsMultiplier &&
                  k in upg.effectsModsMultiplier &&
                  (dataField.type == "float" || dataField.type == "integer")
                ) {
                  if (!this.upgradeMods[type.id_string]) this.upgradeMods[type.id_string] = {};

                  this.upgradeMods[type.id_string][fieldName] = this.upgradeMods[type.id_string][
                    fieldName
                  ]
                    ? this.upgradeMods[type.id_string][fieldName] +
                      (upg.effectsModsMultiplier[k] - 1) * type[fieldName]
                    : (upg.effectsModsMultiplier[k] - 1) * type[fieldName];
                }

                // var newVal = type.getValue(fieldName, this);
                // var checkVal = checkField(dataField, newVal, true);

                // if(checkVal != newVal)
                //	this.upgradeMods[type.id_string][fieldName] -= newVal - checkVal;
              }
            }

          message +=
            "setUpg$" +
            this.number +
            "$" +
            JSON.stringify(this.upgrades) +
            "$" +
            JSON.stringify(this.upgradeMods) +
            "~";
        };

        Player.prototype.getUpgradeLevel = function (upg) {
          return this.upgrades[upg.id_string] ? this.upgrades[upg.id_string] : 0;
        };

        Player.prototype.modifyGold = function (i) {
          this.gold += Math.max(i, -this.gold);
          message += "modPlVal$" + this.number + "$gold$" + this.gold + "~";
        };

        Player.prototype.modifySupply = function (i) {
          this.realMaxSupply += i;
          this.maxSupply = Math.min(this.realMaxSupply, this.supplyCap);
          message += "modPlVal$" + this.number + "$maxSupply$" + this.maxSupply + "~";
        };

        Player.prototype.setValAndSync = function (field, i) {
          this[field] = i;
          message += "modPlVal$" + this.number + "$" + field + "$" + this[field] + "~";
        };

        Player.prototype.isEnemyOfPlayer = function (player) {
          if (game.globalVars.isPassiveNeutral) {
            return this.team.number != 0 && player.team.number != 0 && this.team != player.team;
          } else {
            return this.team != player.team;
          }
        };

        // for AI
        Player.prototype.youAreAttackedAtPosition = function (pos) {
          /*
    if(this.aiObject)
      return;
    
    
    // react, if last attack msg was more than 5 sec ago
    if(this.lastAttackMessage + 99 < ticksCounter)
    {
      this.lastAttackMessage = ticksCounter;
      
      // get all fighting units
      var fightingUnits = this.getUnitsOfTypeOfPlayer(lists.types.soldier, this).concat(this.getUnitsOfTypeOfPlayer(lists.types.archer, this));
      
      // order them to amove there
      for(var i = 0; i < fightingUnits.length; i++)
        if(fightingUnits[i].order.type == COMMAND.IDLE)
          fightingUnits[i].issueOrder(lists.types.amove, pos);
      
      // if player has no fighting units, send workers to attack
      if(fightingUnits.length == 0)
      {
        // get all workers sorted by their distance to the attacking position
        var workersSortedByDistToAttPos = _.sortBy(this.getUnitsOfTypeOfPlayer(lists.types.worker, this), function(worker){ return worker.pos.distanceTo2(pos); });
        
        // order ~half of them to attack
        var units = [];
        for(var i = 0; i < workersSortedByDistToAttPos.length * 0.6; i++)
          units.push(workersSortedByDistToAttPos[i]);
        
        game.issueOrderToUnits2(units, lists.types.amove, pos.add3((ticksCounter / 7) % 1, (ticksCounter / 31) % 1));
      }
      
      this.setValAndSync("apm", this.apm + 1);
    }
    */
        };

        Player.prototype.upgradeCountInResearch = function (upgrade) {
          var c = 0;

          for (var i = 0; i < game.buildings.length; i++) {
            var b = game.buildings[i];
            if (b.owner == this)
              for (var k = 0; k < BUILDING_QUEUE_LEN; k++)
                if (b.queue && b.queue[k] == upgrade) c++;
          }

          return c;
        };

        // is called every ~sec or so if this is a cpu player, does all the AI stuff
        Player.prototype.AIUpdate = function () {
          if (this.noAI) return;

          if (this.aiObject && this.aiObject.update) {
            this.aiObject.update(this.scope);
            return;
          }

          // ouchyAI(this.scope);
          // return;

          var ccs = this.getUnitsOfTypeOfPlayer(lists.types.castle, this);
          var rax = this.getUnitsOfTypeOfPlayer(lists.types.barracks, this).concat(
            this.getUnitsOfTypeOfPlayer(lists.types.wolvesden, this)
          );
          var towers = this.getUnitsOfTypeOfPlayer(lists.types.watchtower, this);
          var houses = this.getUnitsOfTypeOfPlayer(lists.types.house, this);

          var workers = this.getUnitsOfTypeOfPlayer(lists.types.worker, this);
          var soldiers = this.getUnitsOfTypeOfPlayer(lists.types.soldier, this);
          var wolves = this.getUnitsOfTypeOfPlayer(lists.types.wolf, this);
          var riflemen = this.getUnitsOfTypeOfPlayer(lists.types.archer, this);
          var mages = this.getUnitsOfTypeOfPlayer(lists.types.mage, this);
          var fightingUnits = soldiers.concat(riflemen, mages, wolves);

          // find mines but remove empty mines from list
          var mines = this.getUnitsOfTypeOfPlayer(lists.types.goldmine);
          for (var i = 0; i < mines.length; i++)
            if (!mines[i].gold) {
              mines.splice(i, 1);
              i--;
            }

          var enemyCCs = [];
          for (var i = 1; i <= MAX_PLAYERS; i++)
            if (game.players[i] && game.players[i].isEnemyOfPlayer(this))
              enemyCCs = enemyCCs.concat(
                this.getUnitsOfTypeOfPlayer(lists.types.castle, game.players[i])
              );

          var enemyBaseCenter =
            enemyCCs.length > 0
              ? enemyCCs[0].pos
              : new Field((ticksCounter % 60) + 20, (ticksCounter % 60) + 2, true);

          // make workers
          for (var i = 0; i < ccs.length; i++)
            if (!ccs[i].queue[0] && workers.length < 9 * ccs.length) {
              ccs[i].orderMake(lists.types.trainworker);
              this.setValAndSync("apm", this.apm + 1);
            }

          // make units
          for (var i = 0; i < rax.length; i++)
            if (!rax[i].queue[0]) {
              rax[i].orderMake(
                ticksCounter % 13 > 6 ? lists.types.trainsoldier : lists.types.trainarcher
              );
              this.setValAndSync("apm", this.apm + 1);
            }

          // send idle workers to work
          if (mines.length > 0)
            for (var i = 0; i < workers.length; i++)
              if (workers[i].order.type == COMMAND.IDLE) {
                workers[i].issueOrder(lists.types.mine, this.getClosestUnit(workers[i].pos, mines));
                this.setValAndSync("apm", this.apm + 1);
              }

          // make houses if needed
          if (
            ((this.supply >= this.maxSupply - 4 && this.maxSupply < this.supplyCap) ||
              houses.length == 0) &&
            ccs.length >= 1 &&
            workers.length > 0
          ) {
            var place = ccs[0].pos.add3(
              ((ticksCounter / 21) % 16) - 8,
              ((ticksCounter / 17) % 16) - 8
            );

            // if random place it not close to a mine (might block mining path)
            if (mines.length > 0 && this.getClosestUnit(place, mines).pos.distanceTo2(place) > 7) {
              var worker = this.getClosestUnit(place, workers, true);

              if (worker) {
                worker.issueOrder(lists.types.buildhouse, place);
                this.setValAndSync("apm", this.apm + 1);
              }
            }
          }

          // expand
          if (this.gold > 350 && workers.length > 0 && ccs.length <= 1 && this.expand) {
            var mineOfChoice = null;
            var allCCs = ccs.concat(enemyCCs);
            var freeMines = [];

            // find all free mines
            if (allCCs.length > 0)
              for (var i = 0; i < mines.length; i++)
                if (mines[i].distanceTo(this.getClosestUnit(mines[i].pos, allCCs)) > 12)
                  freeMines.push(mines[i]);

            // find closest free mine
            var closestPathLen = 99999;
            for (var i = 0; i < freeMines.length; i++) {
              var pathLen = workers[0].pos.distanceTo2(freeMines[i].pos);
              if (pathLen < closestPathLen) {
                closestPathLen = pathLen;
                mineOfChoice = freeMines[i];
              }
            }

            // if we found a free mine, expand there
            if (mineOfChoice) {
              // search the next worker
              var workerOfChoice = this.getClosestUnit(mineOfChoice.pos, workers, true);

              if (workerOfChoice) {
                var originPos = workerOfChoice.pos;
                var placeToMakeMine = mineOfChoice.pos;

                // search for place next to the gold mine
                var i = 0;
                while (!lists.types.castle.couldBePlacedAt(placeToMakeMine) && i < 5) {
                  placeToMakeMine = mineOfChoice.pos.addNormalizedVector(originPos, 6);

                  var k = 0;
                  while (
                    !lists.types.castle.couldBePlacedAt(placeToMakeMine) &&
                    placeToMakeMine.distanceTo(mineOfChoice.pos) < 11 &&
                    k < 10
                  ) {
                    placeToMakeMine = placeToMakeMine.addNormalizedVector(originPos, 1);
                    k++;
                  }

                  // if we couldnt find a pos, try approaching the mine from a different (random) angle
                  originPos = mineOfChoice.pos.add3(
                    ((ticksCounter / 33) % 38) - 19,
                    ((ticksCounter / 4) % 38) - 19
                  );
                  i++;
                }

                // if we found a valid place, issue order
                if (lists.types.castle.couldBePlacedAt(placeToMakeMine)) {
                  workerOfChoice.issueOrder(lists.types.buildcastle, placeToMakeMine);
                  this.setValAndSync("apm", this.apm + 1);
                }
              }
            }
          }

          // make rax
          if (
            this.gold >=
              (!this.makeWolves ? lists.types.barracks.cost : lists.types.wolvesden.cost) &&
            this.buildings.house &&
            workers.length > 0 &&
            ccs.length > 0 &&
            rax.length < (ccs.length == 1 ? this.raxAt1Base : this.raxAt2Base)
          ) {
            var place = ccs[0].pos.add3(
              ((ticksCounter / 21) % 19) - 9,
              ((ticksCounter / 17) % 19) - 9
            );

            // if random place it not close to a mine (might block mining path)
            if (mines.length > 0)
              if (this.getClosestUnit(place, mines).pos.distanceTo2(place) > 7) {
                var worker = this.getClosestUnit(place, workers, true);

                if (worker) {
                  worker.issueOrder(lists.types.buildbarracks, place);
                  this.setValAndSync("apm", this.apm + 1);
                }
              }
          }

          // make tower
          if (
            (this.gold >= 500 && ccs.length > 0 && workers.length > 6 && towers.length < 2) ||
            (this.makeTowerAtStart &&
              this.gold >= lists.types.watchtower.cost &&
              ccs.length > 0 &&
              workers.length > 1 &&
              towers.length < 1)
          ) {
            var place = ccs[0].pos.addNormalizedVector(enemyBaseCenter, 10);
            place = place.add3(((ticksCounter / 21) % 12) - 6, ((ticksCounter / 17) % 12) - 6);

            var worker = this.getClosestUnit(place, workers, true);

            if (worker) {
              worker.issueOrder(lists.types.buildwatchtower, place);
              this.setValAndSync("apm", this.apm + 1);
            }
          }

          // attack
          var units = [];
          if (fightingUnits.length > this.unitCountToAttack)
            for (var i = 0; i < fightingUnits.length; i++)
              if (fightingUnits[i].order.type == COMMAND.IDLE) units.push(fightingUnits[i]);

          game.issueOrderToUnits2(units, lists.types.amove, enemyBaseCenter);

          if (units.length > 0) {
            game.issueOrderToUnits2(units, lists.types.amove, enemyBaseCenter);
            this.setValAndSync("apm", this.apm + 1);
          }
        };

        // from all units in units, return the one that is closest to pos (should maybe not be a method of "Player", but instead of "Game")
        Player.prototype.getClosestUnit = function (pos, units, onlyIdleOrMining) {
          var bestUnit = null;
          var bestDist = 999999;

          for (var i = 0; i < units.length; i++)
            if (
              (!onlyIdleOrMining ||
                !units[i].order ||
                units[i].order.type == COMMAND.IDLE ||
                units[i].order.type == COMMAND.MINE) &&
              units[i].pos.distanceTo2(pos) < bestDist
            ) {
              bestUnit = units[i];
              bestDist = units[i].pos.distanceTo2(pos);
            }

          return bestUnit;
        };

        // get all units of type of player (should maybe not be a method of "Player", but instead of "Game")
        Player.prototype.getUnitsOfTypeOfPlayer = function (type, player) {
          var units = [];
          var unitsAndBuildings = game.units.concat(game.buildings);

          for (var i = 0; i < unitsAndBuildings.length; i++)
            if (
              (!player || unitsAndBuildings[i].owner == player) &&
              unitsAndBuildings[i].type == type
            )
              units.push(unitsAndBuildings[i]);

          return units;
        };
        // parent class for all map objects (units, buildings, doodads / tiles)
        function MapObject() {
          this.isActive = true; // is false, when the unit is in a gold mine for example
          this.isAlive = true;
          this.targetUnit = null;
          this.hitCycle = 0; // when attacking, this gets ++ on every tick, to check when the actual attack happens and to check for cooldown
          this.tickOfDeath = 0; // when did the unit die, used for playing dead animation
          this.nextTickToCheckForNextEnemyUnit = 0; // we save this, because we dont wanna check every tick, but only every 5 ticks or so
          this.hadTargetLastRound = false;
          this.provisionalTargetUnit = null;
          this.kills = 0;
          this.isDetectedUntil = -1;
          this.customAttackEffect = null;
          this.level = 1;
          this.countLearnedAbilities = 0;
          this.queueFinish = 0; // when will the current producing unit will be finished
          this.queueStarted = false;
        }

        MapObject.prototype.learn = function (cmd) {
          var abilityLvl = this.abilityLevels[cmd.id];
          if (
            this.countLearnedAbilities < this.level &&
            cmd.id < this.abilityLevels.length &&
            cmd.requiredLevels &&
            cmd.requiredLevels[abilityLvl] >= 0 &&
            this.level >= cmd.requiredLevels[abilityLvl] &&
            cmd.requiredLevels.length > abilityLvl
          ) {
            this.setArrayValAndSync("abilityLevels", cmd.id, abilityLvl + 1);
            this.setValAndSync("countLearnedAbilities", this.countLearnedAbilities + 1);
          }
        };

        MapObject.prototype.canBeRepaired = function () {
          return (
            !this.isUnderConstruction &&
            (this.type.isBuilding || this.type.isMechanical) &&
            this.hp < this.type.hp
          );
        };

        MapObject.prototype.syncWaypoint = function () {
          var waypointstr = "";
          if (this.waypoint)
            for (var i = 0; i < this.waypoint.length; i++)
              waypointstr += this.waypoint[i].isField
                ? "$" + this.waypoint[i].px + "$" + this.waypoint[i].py + "$-1"
                : "$-1$-1$" + this.waypoint[i].id;

          message += "setWP$" + this.id + waypointstr + "~";
        };

        MapObject.prototype.initAutocast = function () {
          var arr = [];

          _.each(this.type.commands, function (cmd) {
            if (cmd.hasAutocast && cmd.autocastDefault) arr.push(cmd.id);
          });

          return arr;
        };

        MapObject.prototype.setAndSyncAutocast = function (order, on) {
          if (!this.type.commands[order.id_string]) return;

          if (on) {
            if (!this.autocast.contains(order.id)) this.autocast.push(order.id);
          } else this.autocast.erease(order.id);

          message += "autoCast$" + order.id + "$" + (on ? "1" : "0") + "$" + this.id + "~";
        };

        MapObject.prototype.setValAndSync = function (field, val) {
          this[field] = val;
          message += "uUpdFld$" + this.id + "$" + field + "$" + val + "~";
        };

        MapObject.prototype.setArrayValAndSync = function (field, index, val) {
          this[field][index] = val;
          message += "uUpdArr$" + this.id + "$" + field + "$" + index + "$" + val + "~";
        };

        MapObject.prototype.setPosAndSync = function (field, pos) {
          this[field] = pos;
          message +=
            "setUPos$" +
            this.id +
            "$" +
            field +
            "$" +
            (pos ? pos.px + "$" + pos.py : "-1$-1") +
            "~";
        };

        MapObject.prototype.setUnitAndSync = function (field, unit) {
          this[field] = unit;
          message += "uUpdU$" + this.id + "$" + field + "$" + (unit ? unit.id : -1) + "~";
        };

        MapObject.prototype.setOrderAndSync = function (field, order) {
          if (this[field] != order) {
            this[field] = order;
            message += "uUpdOdr$" + this.id + "$" + field + "$" + order.id_string + "~";
          }
        };

        MapObject.prototype.getValue = function (value) {
          return (
            this.type[value] +
            this.owner.getValueModifier(value, this.type) +
            (this.modifierMods[value] ? this.modifierMods[value] : 0)
          );
        };

        MapObject.prototype.includesField = function (x, y) {
          return (
            x >= this.x &&
            y >= this.y &&
            x <= this.x + this.type.sizeX - 1 &&
            y <= this.y + this.type.sizeX - 1
          );
        };

        MapObject.prototype.canSeePos = function (x, y) {
          return (
            Math.sqrt(Math.pow(this.pos.x - x, 2) + Math.pow(this.pos.y - y, 2)) <= this.vision &&
            game.getHMValue5(this.pos.x, this.pos.y) + this.type.visionHeightBonus + 0.5 >=
              game.getHMValue5(x, y)
          );
        };

        MapObject.prototype.die = function (otherUnit, cargo, causesFlameDeath) {
          if (this.type.isBuilding) while (this.queue[0]) this.cancelQueueElement();

          game.units2.erease(this);

          // reward
          var goldReward = this.getValue("goldReward");
          if (
            goldReward &&
            otherUnit &&
            (otherUnit.owner.isEnemyOfPlayer(this.owner) ||
              otherUnit.owner.team.number == 0 ||
              this.type.alliesGetGold)
          ) {
            otherUnit.owner.modifyGold(goldReward);

            if (otherUnit.owner == PLAYING_PLAYER)
              message += "fltTxt$" + this.id + "$" + (goldReward > 0 ? "+" : "") + goldReward + "~";
          }

          message +=
            "units2kill$" +
            this.id +
            "$" +
            (otherUnit ? otherUnit.id : -1) +
            "$" +
            (cargo ? 1 : 0) +
            "$" +
            (causesFlameDeath ? "1" : "0") +
            "~";

          this.owner.unitDeaths++;

          if (otherUnit && otherUnit.owner.isEnemyOfPlayer(this.owner)) otherUnit.kills++;

          if (this.type.uniqueAndHeroic) game.units4.push(this);

          this.isAlive = false;

          this.owner.setValAndSync("supply", this.owner.supply - this.type.supply);

          if (!(this.type.isBuilding && this.isUnderConstruction))
            this.owner.modifySupply(-this.type.supplyProvided);

          // exp
          var exp = this.getValue("experience");
          if (exp)
            for (var i = 0; i < game.units.length; i++)
              if (
                game.units[i].type.experienceLevels &&
                (!game.units[i].type.expOnlyFromOwnKills || game.units[i] == otherUnit) &&
                game.units[i].type.experienceLevels.length > 0 &&
                this.distanceTo(game.units[i]) <= game.units[i].type.experienceRange &&
                (this.type.alliesGetExperience ||
                  game.units[i].owner.team.number == 0 ||
                  game.units[i].owner.isEnemyOfPlayer(this.owner))
              ) {
                var u = game.units[i];
                var oldLevel = u.getLevel();
                u.setValAndSync("exp", u.exp + exp);
                var newLevel = u.getLevel();

                if (newLevel > oldLevel) {
                  if (u.type.modifiersPerLevel && u.type.modifiersPerLevel.length > 0)
                    for (var k = oldLevel; k < newLevel; k++)
                      u.applyModifiers(u.type.modifiersPerLevel, u);

                  u.setValAndSync("level", newLevel);
                  message += "fltTxt$" + u.id + "$level Up~";
                  message += "attEff$spell$" + u.id + "$-1$-1$-1$2.5$0$2~";
                }
              }
        };

        // the units gets hit / damaged by another unit (if other unit is null, hit does high damage (always kill)), if dmg is set, use this dmg value instead of the other units dmg value
        MapObject.prototype.hit = function (
          otherUnit,
          dmg,
          ignoreArmor,
          noSound,
          causesFlameDeath,
          noSpecials
        ) {
          if (!this.isActive || (otherUnit && this.getValue("isInvincible"))) return;

          var dmg_ = dmg;
          if (typeof dmg === "undefined") {
            if (otherUnit) {
              var percDmg = otherUnit.getValue("percDmg");
              dmg_ = otherUnit.getValue("dmg") + (percDmg ? percDmg * this.getValue("hp") : 0);
            } else dmg_ = this.hp + 999;

            // dmg modifiers
            if (otherUnit && otherUnit.type.dmgModifierAttributes)
              for (var i = 0; i < otherUnit.type.dmgModifierAttributes.length; i++)
                if (this.type[otherUnit.type.dmgModifierAttributes[i]]) {
                  if (
                    otherUnit.type.dmgModifierMultiplier &&
                    otherUnit.type.dmgModifierMultiplier[i]
                  )
                    dmg_ *= otherUnit.type.dmgModifierMultiplier[i];

                  if (otherUnit.type.dmgModifierAddition && otherUnit.type.dmgModifierAddition[i])
                    dmg_ += otherUnit.type.dmgModifierAddition[i];
                }
          }

          // reduce armor
          if (!ignoreArmor)
            dmg_ = Math.max(
              dmg_ -
                Math.max(
                  this.getValue("armor") - (otherUnit ? otherUnit.getValue("armorPenetration") : 0),
                  0
                ),
              otherUnit ? otherUnit.getValue("dmgCap") : 1
            );

          // heal damages undead
          if (dmg_ < 0 && this.type.isUndead) dmg_ *= -1;

          // lifesteal
          var lifesteal =
            !noSpecials && otherUnit && dmg_ > 0 ? otherUnit.getValue("lifesteal") : null;
          if (lifesteal) {
            otherUnit.setValAndSync(
              "hp",
              Math.min(otherUnit.hp + dmg_ * lifesteal, otherUnit.getValue("hp"))
            );
            if (otherUnit.hp <= 0) otherUnit.hit();
          }

          // display warning ping on minimap
          if (this.owner == PLAYING_PLAYER && dmg_ > 0) {
            if (
              this.type.id_string == "healingward" ||
              this.type.id_string == "shroudfield" ||
              (this.type.id_string == "slowingfield" && !otherUnit)
            ) {
              //no attack ping
            } else {
              message += "attPing$" + this.pos.px + "$" + this.pos.py + "~";
            }
          }

          // send alert to computer players (for AI)
          if (this.owner.controller == CONTROLLER.COMPUTER)
            this.owner.youAreAttackedAtPosition(this.pos);

          this.setValAndSync("hp", Math.min(this.hp - dmg_, this.getValue("hp")));

          // if unit dies
          if (this.hp <= 0) {
            // kill all cargo
            if (this.cargo)
              for (var i = 0; i < this.cargo.length; i++) this.cargo[i].die(otherUnit, true);

            this.die(otherUnit, false, causesFlameDeath);

            this.remove();

            if (this.type.isBuilding) game.updateGlobalPlayerVariables();
            else this.resetMakeBuilding();
          }

          // make it bounce
          else if (
            !noSpecials &&
            otherUnit &&
            otherUnit.type.bouncePower &&
            this.type.isUnit &&
            this.isAlive &&
            !this.type.flying &&
            (!this.type.power || otherUnit.type.bouncePower > this.type.power)
          )
            game.bashUnit(this, otherUnit.pos, otherUnit.type);

          // play hit sound & push unit a little bit
          if (this.type.isUnit && PLAYING_PLAYER.team.canSeeUnit(this) && dmg_ > 0) {
            if (otherUnit && !this.type.noMoveWhenHit)
              message += "setHitOffs$" + this.id + "$" + otherUnit.id + "~";

            if (!noSound && dmg_ > 0) {
              // play "pain" sounds
              if (this.type.painSound)
                message +=
                  "playSnd$" +
                  this.type.painSound +
                  "$" +
                  this.type.painSoundVolume +
                  "$" +
                  this.pos.px +
                  "$" +
                  this.pos.py +
                  "~";

              if (this.type.painSound2)
                message +=
                  "playSnd$" +
                  this.type.painSound2 +
                  "$" +
                  this.type.painSoundVolume2 +
                  "$" +
                  this.pos.px +
                  "$" +
                  this.pos.py +
                  "~";
            }
          }

          // play building hit sound
          if (this.type.isBuilding && PLAYING_PLAYER.team.canSeeUnit(this, true) && dmg_ > 0) {
            message +=
              "playSnd$" + SOUND.BUILDING_PAIN + "$0.8$" + this.pos.px + "$" + this.pos.py + "~";

            // if hp fell under 25%, create some dust effects
            if (this.hp < this.type.hp * 0.25 && this.hp + dmg_ >= this.type.hp * 0.25) {
              message +=
                "playSnd$" + SOUND.BUILDING_DEATH + "$0.3$" + this.pos.px + "$" + this.pos.py + "~";
              message += "bldDstEff$" + this.id + "~";
            }
          }

          if (
            otherUnit &&
            (otherUnit.type == lists.types.mage || otherUnit.type == lists.types.dragon) &&
            PLAYING_PLAYER.team.canSeeUnit(this, true) &&
            dmg_ > 0
          )
            message +=
              "playSnd$" + SOUND.MAGE_IMPACT + "$0.85$" + this.pos.px + "$" + this.pos.py + "~";
        };

        MapObject.prototype.getLevel = function () {
          if (
            !this.type.experienceLevels ||
            !this.type.experienceLevels.length ||
            this.type.experienceLevels.length <= 0
          )
            return 0;

          for (var i = this.type.experienceLevels.length - 1; i >= 0; i--)
            if (this.exp >= this.type.experienceLevels[i]) return i + 2;

          return 1;
        };

        // get attack prio of this unit; fighting units and attacking workers have highest prio, then non attacking workers and then buildings (tower has prio of fighting unit)
        MapObject.prototype.getAttackPrio = function (level2) {
          var prio = this.getValue("attackPrio");

          if (
            this.type == lists.types.worker &&
            this.order.type != COMMAND.AMOVE &&
            this.order.type != COMMAND.ATTACK
          )
            // workers, that are not attacking, have prio reduced by 2
            return prio - 2;

          return this.isUnderConstruction ? prio - 3 : prio; // under construction things have 3 less prio
        };

        // remove the unit from the game. Most of the time, when it dies, but also when it enters a building
        MapObject.prototype.remove = function (noTell) {
          this.isActive = false;

          game.units.erease(this);
          game.buildings.erease(this);

          if (!noTell) message += "rmvU$" + this.id + "~";

          this.owner.team.updateVisionUnitDie(this);

          if (this.type.isUnit)
            game.unitDieBucket(this, this.lastTicksPosition.x, this.lastTicksPosition.y);

          // delete from waypoints and target unitz
          var units = game.units2.concat(game.buildings);
          for (var i = 0; i < units.length; i++) {
            if (units[i].waypoint)
              for (var k = 0; k < units[i].waypoint.length; k++)
                if (units[i].waypoint[k] == this) {
                  units[i].waypoint.splice(k, 1);
                  k--;
                }

            if (units[i].targetUnit == this) {
              units[i].targetUnit = null;
              units[i].nextTickToCheckForNextEnemyUnit = ticksCounter + 1;
            }
          }

          if (this.type.isBuilding) {
            // free blocked fields
            this.switchBlocking(false);

            // reslice map
            game.refreshAreaMapFromBuilding(this);

            // update global player variables
            this.owner.updateGlobalVariables();
          }

          // check if game is over
          if (ticksCounter >= 20 && game_state != GAME.EDITOR) game.checkIfGameHasEnded();
        };

        MapObject.prototype.canLoad = function () {
          return this.type.cargoSpace > 0;
        };

        // performs a hit at target unit, if melee, just hit it, if ranged, launch a projectile
        MapObject.prototype.performHit = function (targetUnit) {
          if (this.type.shootingReveals && this.revealedToTeamUntil)
            this.setArrayValAndSync(
              "revealedToTeamUntil",
              targetUnit.owner.team.number,
              ticksCounter + 60
            );

          // if melee
          if (this.getValue("range") < 1) {
            targetUnit.hit(this);

            if (this.type.modifiers && this.type.modifiers.length > 0)
              targetUnit.applyModifiers(this.type.modifiers, this);

            if (PLAYING_PLAYER.team.canSeeUnit(this, true) && this.type.meleeHitSound)
              message +=
                "playSnd$" +
                this.type.meleeHitSound +
                "$" +
                this.type.meleeHitVolume +
                "$" +
                this.pos.px +
                "$" +
                this.pos.py +
                "~";
          }

          // if ranged
          else this.performRangedHit(targetUnit);

          // if this unit has self modifiers, apply those motherfuckers
          if (this.type.modifiersSelf && this.type.modifiersSelf.length > 0)
            this.applyModifiers(this.type.modifiersSelf, this);
        };

        MapObject.prototype.performRangedHit = function (target) {
          var isHeatSeek = this.type.isHeatSeeking && target.type;
          var aoeRadius = this.getValue("aoeRadius");
          var projectileSpeed = this.getValue("projectileSpeed");
          var projectileID = parseInt(Math.random() * 99999999);
          var target_ = null;

          // heatseek
          if (isHeatSeek) {
            if (aoeRadius <= 0)
              game.projectiles.push(
                new Projectile(
                  this.pos,
                  target.pos,
                  projectileSpeed,
                  function () {
                    this.targetUnit.hit(this.originUnit);
                    if (this.originUnit && this.originUnit.type.modifiers)
                      this.targetUnit.applyModifiers(
                        this.originUnit.type.modifiers,
                        this.originUnit
                      );
                  },
                  {
                    targetUnit: target,
                    originUnit: this,
                    hitscan: this.type.hitscan && !target.type.ignoreEnemyHitscan,
                    id: projectileID,
                  }
                )
              );
            else
              game.projectiles.push(
                new Projectile(
                  this.pos,
                  target.pos,
                  projectileSpeed,
                  function () {
                    var units = game.units.concat(game.buildings);
                    for (var i = 0; i < units.length; i++) {
                      var u = units[i];
                      if (
                        (u.type.isBuilding
                          ? u.distanceToPos(this.targetUnit.pos) <= this.radius - 0.1
                          : u.pos.distanceTo2(target.pos) <= this.radius + u.type.radius) &&
                        this.hitAir == u.type.flying &&
                        this.originUnit.aoeHitsUnit(u)
                      ) {
                        u.hit(this.originUnit);
                        if (this.originUnit && this.originUnit.type.modifiers)
                          u.applyModifiers(this.originUnit.type.modifiers, this.originUnit);
                      }
                    }
                  },
                  {
                    radius: aoeRadius,
                    originUnit: this,
                    hitAir: target.type.flying,
                    targetUnit: target,
                    hitscan: this.type.hitscan && !target.type.ignoreEnemyHitscan,
                    id: projectileID,
                  }
                )
              );
          }

          // no heatseek
          else {
            target_ = target.type ? target.pos : target;

            if (this.getValue("maximizeRangeWhenShooting"))
              target_ = this.pos.addNormalizedVector(target_, this.getValue("range", this));

            game.projectiles.push(
              new Projectile(
                this.pos,
                target_,
                projectileSpeed,
                function () {
                  var units = game.units.concat(game.buildings);
                  for (var i = 0; i < units.length; i++) {
                    var u = units[i];
                    if (
                      (u.type.isBuilding
                        ? u.distanceToPos(this.to) <= this.radius - 0.1
                        : u.pos.distanceTo2(this.to) <= this.radius + u.type.radius) &&
                      ((this.originUnit.type.canAttackGround && !u.type.flying) ||
                        (this.originUnit.type.canAttackFlying && u.type.flying)) &&
                      this.originUnit.aoeHitsUnit(u)
                    ) {
                      u.hit(this.originUnit);
                      if (this.originUnit && this.originUnit.type.modifiers)
                        u.applyModifiers(this.originUnit.type.modifiers, this.originUnit);
                    }
                  }
                },
                {
                  radius: aoeRadius,
                  originUnit: this,
                  hitscan: this.type.hitscan && (!target.type || !target.type.ignoreEnemyHitscan),
                  targetUnit: target_,
                  id: projectileID,
                }
              )
            );
          }

          // play sound
          if (PLAYING_PLAYER.team.canSeeUnit(this, true) && this.type.attackLaunchSound)
            message +=
              "playSnd$" +
              this.type.attackLaunchSound +
              "$1$" +
              this.pos.px +
              "$" +
              this.pos.py +
              "~";

          if (target_) target = target_;

          // create graphic effect
          if (this.type.attackEffect || this.customAttackEffect) {
            message +=
              "attEff$" +
              (this.customAttackEffect ? this.customAttackEffect : this.type.attackEffect) +
              "$" +
              this.id +
              "$";
            message +=
              isHeatSeek || (target.type && target.type.isBuilding)
                ? target.id + "$-1$-1"
                : "-1$" +
                  (target.type ? target.pos.px + "$" + target.pos.py : target.px + "$" + target.py);
            message += "$0$" + projectileSpeed + "$0$0$0$0$0$" + projectileID + "~";
          }
        };

        MapObject.prototype.hasInQueue = function (type) {
          if (!this.queue) return false;

          for (var i = 0; i < this.queue.length; i++) if (this.queue[i] == type) return true;

          return false;
        };

        MapObject.prototype.canAttackUnit = function (unit) {
          return (
            ((!unit.type.flying && this.type.canAttackGround) ||
              (unit.type.flying && this.type.canAttackFlying)) &&
            !unit.getValue("isInvincible")
          );
        };

        MapObject.prototype.getCmd2ConstructBuilding = function (building) {
          var cmd = null;

          _.each(this.type.commands, function (command) {
            if (command.unitType == building) cmd = command;
          });

          return cmd;
        };

        MapObject.prototype.applyModifiers = function (modifiers, originUnit, duration) {
          var modIdArray = "";

          if (Object.prototype.toString.call(modifiers) !== "[object Array]")
            modifiers = [modifiers];

          for (var i = 0; i < modifiers.length; i++) {
            var mod = modifiers[i];

            // check if already max stack reached
            var stack = 0;
            var smallestTime = 999999999;
            var smallestIndex = 0;

            for (var k = 0; k < this.modifiers.length; k++)
              if (this.modifiers[k].modifier == mod) {
                stack++;

                var removeAt = this.modifiers[k].removeAt;

                if ((removeAt ? removeAt : 99999999) < smallestTime) {
                  smallestTime = removeAt;
                  smallestIndex = k;
                }
              }

            // maxStack reached, remove the mod, that has the smallest time left
            if (mod.maxStack > 0 && stack >= mod.maxStack) {
              this.modifiers[smallestIndex].removeAt = duration
                ? ticksCounter + duration
                : mod.duration && mod.duration > 0
                ? ticksCounter + mod.getValue("duration", this.owner)
                : -1;
              message +=
                "setModTm$" +
                this.id +
                "$" +
                smallestIndex +
                "$" +
                this.modifiers[smallestIndex].removeAt +
                "~";
            } else {
              modIdArray += "$" + mod.id_string;

              this.modifiers.push({
                modifier: mod,
                originUnit: originUnit,
                removeAt: duration
                  ? ticksCounter + duration
                  : mod.duration && mod.duration > 0
                  ? ticksCounter + mod.getValue("duration", this.owner)
                  : -1,
              });
            }

            if (mod.killModifiers && mod.killModifiers.length > 0)
              for (var k = 0; k < mod.killModifiers.length; k++)
                for (var j = 0; j < this.modifiers.length; j++)
                  if (this.modifiers[j].modifier == mod.killModifiers[k]) {
                    this.killModifier(j);
                    j = this.modifiers.length;
                  }
          }

          message += "aplMods$" + this.id + "$" + originUnit.id + modIdArray + "~";

          this.checkUpgrades();
        };

        MapObject.prototype.autoAttackAIEnabled = function () {
          return (
            this.type.commands.amove &&
            this.type.commands.attack &&
            !this.disabledCommands.amove &&
            !this.disabledCommands.attack
          );
        };

        MapObject.prototype.checkUpgrades = function () {
          this.modifierMods = {};
          this.disabledCommands = {};

          var dataFields = this.type.getDataFields();

          var customAttackEffect = null;

          for (var i = 0; i < this.modifiers.length; i++) {
            var mod = this.modifiers[i].modifier;
            var dataField = dataFields[field];

            if (mod.fields)
              for (var k = 0; k < mod.fields.length; k++)
                if (dataFields[mod.fields[k]]) {
                  var field = mod.fields[k];
                  var dataField = dataFields[field];

                  if (
                    dataField.type == "float" ||
                    dataField.type == "integer" ||
                    dataField.type == "bool"
                  ) {
                    if (
                      mod.modificationsMultiplier &&
                      k in mod.modificationsMultiplier &&
                      (dataField.type == "float" || dataField.type == "integer")
                    )
                      this.modifierMods[field] = this.modifierMods[field]
                        ? this.modifierMods[field] +
                          (mod.modificationsMultiplier[k] - 1) * this.type[field]
                        : (mod.modificationsMultiplier[k] - 1) * this.type[field];

                    if (mod.modifications && mod.modifications[k])
                      this.modifierMods[field] = this.modifierMods[field]
                        ? this.modifierMods[field] + mod.modifications[k]
                        : mod.modifications[k];
                  }
                }

            if (mod.disabledCommands)
              for (var k = 0; k < mod.disabledCommands.length; k++)
                this.disabledCommands[mod.disabledCommands[k].id_string] =
                  mod.disabledCommands[k].id_string;

            if (mod.attackEffect && mod.changeAttackEffect && this.type.isUnit)
              customAttackEffect = mod.attackEffect;
          }

          this.customAttackEffect = customAttackEffect;

          /*
    var thisReference = this;
    _.each(this.modifierMods, function(mod, field){
      
      var newVal = thisReference.getValue(field);
      var checkVal = checkField(dataFields[field], newVal, true);
      
      if(checkVal != newVal)
        thisReference.modifierMods[field] -= newVal - checkVal;
      
    });
    */

          if (this.hp > this.getValue("hp")) this.setValAndSync("hp", this.getValue("hp"));

          if (this.mana > this.getValue("mana")) this.setValAndSync("mana", this.getValue("mana"));
        };

        MapObject.prototype.killModifier = function (i) {
          var mod = this.modifiers[i].modifier;

          message += "rmvMod$" + this.id + "$" + i + "~";

          this.modifiers.splice(i, 1);

          this.checkUpgrades();
        };

        MapObject.prototype.initHPAndMana = function () {
          var maxHP = this.getValue("hp");
          var startHP = this.getValue("startHp");
          this.hp = startHP ? startHP : maxHP;
          if (this.hp > maxHP) this.hp = maxHP;

          var maxMana = this.getValue("mana");
          var startMana = this.getValue("startMana");
          this.mana = startMana ? startMana : 0;
          if (this.mana > maxMana) this.mana = maxMana;
        };

        // order to train unit or upgrade
        MapObject.prototype.orderMake = function (cmd, autocast) {
          var type = null;

          if (cmd.unitType && cmd.type == COMMAND.MAKEUNIT) type = cmd.unitType;
          else if (cmd.upgrade && cmd.type == COMMAND.UPGRADE) type = cmd.upgrade;
          else if (cmd.improvedBuilding && cmd.type == COMMAND.BUILDING_UPGRADE)
            type = cmd.improvedBuilding;

          if (!type) return;

          // check if this building can make this unit
          var canMakeUnit = false;
          _.each(this.type.commands, function (val) {
            if (val.unitType == type || val.upgrade == type || val.improvedBuilding == type)
              canMakeUnit = true;
          });

          if (!this.isUnderConstruction && canMakeUnit && type) {
            // find lowest free queue slot
            var i = 0;
            while (this.queue[i]) i++;

            if (i < BUILDING_QUEUE_LEN) {
              // if we found free queue spot (queue not full)
              if (type.isBuilding && this.queue)
                // if upgrade building, check if already happening, and if yes, cancel, because it doesnt make sense if happening multiple times
                for (var k = 0; k < this.queue.length; k++) if (this.queue[k] == type) return;

              if (
                type.isUpgrade &&
                this.owner.upgradeCountInResearch(type) + this.owner.getUpgradeLevel(type) >=
                  type.maxLevel
              )
                return;

              if (type.noParallelResearch && this.owner.upgradeCountInResearch(type) > 0) return;

              // limit
              var limit = type.getValue("limit", this.owner);
              if (limit) {
                var count = 0;

                for (var k = 0; k < game.units2.length; k++)
                  if (game.units2[k].type == type && game.units2[k].owner == this.owner) count++;

                for (var k = 0; k < game.buildings.length; k++)
                  if (game.buildings[k].queue && game.buildings[k].owner == this.owner)
                    for (var j = 0; j < game.buildings[k].queue.length; j++)
                      if (game.buildings[k].queue[j] == type) count++;

                if (count >= limit) {
                  if (this.owner == PLAYING_PLAYER && !autocast) {
                    message +=
                      "addMsg$you can only have " +
                      limit +
                      " instances of this unit$red$attentionmark~";
                    message += "playSnd$" + SOUND.NEGATIVE + "$1~";
                  }

                  return;
                }
              }

              var cost = type.getValue("cost", this.owner, true);
              var manaCost = cmd.getValue("manaCost", this);

              if (this.owner.gold >= cost) {
                if (this.mana >= manaCost) {
                  // if queue was empty, set building time, cuz this unit will be starting to be made now
                  if (i == 0) {
                    this.queueFinish = type.getValue("buildTime", this.owner, true) + ticksCounter;
                    this.queueStarted = false;
                  }

                  this.queue[i] = type;
                  this.owner.modifyGold(-cost);
                  this.setValAndSync("mana", this.mana - manaCost);

                  message += "addEl2Q$" + this.id + "$" + type.id_string + "$" + i + "~";
                }
                // player doesnt have enough mana
                else if (this.owner == PLAYING_PLAYER && !autocast) {
                  message += "addMsg$not enough mana$red$attentionmark~";
                  message += "playSnd$" + SOUND.NEGATIVE + "$1~";
                }
              }

              // player doesnt have enough gold
              else if (this.owner == PLAYING_PLAYER && !autocast) {
                message +=
                  "addMsg$not enough gold (" +
                  Math.ceil(cost - this.owner.gold) +
                  " missing)$red$attentionmark~";
                message += "playSnd$" + SOUND.NEGATIVE + "$1~";
              }
            }
          }
        };

        MapObject.prototype.aoeHitsUnit = function (target) {
          var isEnemy = this.owner.isEnemyOfPlayer(target.owner);
          return (isEnemy && this.type.hitsEnemy) || (!isEnemy && this.type.hitsFriendly);
        };

        MapObject.prototype.hitscan = function (unit) {
          if (!this.type.hitscan || unit.type.ignoreEnemyHitscan) return true;

          if (this.pos.distanceTo2(unit.pos) - this.type.size / 2 - unit.type.size / 2 < 0.5)
            return true;

          if (unit.type.isBuilding) unit.switchBlocking(false, true);

          var returnVal = this.pos
            .addNormalizedVector(unit.pos, this.type.size / 2 + 0.25)
            .raytrace(unit.pos, 0.1, true, null, unit);

          if (unit.type.isBuilding) unit.switchBlocking(true, true);

          return returnVal;
        };

        MapObject.prototype.canPerformDance = function (cmd) {
          return false;
        };

        MapObject.prototype.handleAutocast = function () {
          if (
            this.autocast.length > 0 &&
            (!this.order ||
              this.order.type == COMMAND.IDLE ||
              this.order.type == COMMAND.MINE ||
              this.order.type == COMMAND.AMOVE ||
              this.autocast.contains(this.order.id)) &&
            ticksCounter % 20 == this.id % 20
          )
            for (var i = 0; i < this.autocast.length; i++) {
              var cmd = game.commands[this.autocast[i]];

              if ((this.autocast.contains(this.order.id) && cmd != this.order) || cmd == this.order)
                return;

              if (
                ticksCounter >
                  this.lastTickAbilityUsed[cmd.id] + Math.max(cmd.getValue("cooldown2", this), 1) &&
                this.mana >= cmd.getValue("manaCost", this)
              ) {
                if (cmd.isInstant) {
                  if (this.order && this.queueOrder && this.queueTarget) {
                    this.queueOrder.splice(0, 0, this.order);
                    this.queueTarget.splice(0, 0, null);
                    message += "pushQEl$" + this.id + "~";
                  }
                  this.issueOrder(cmd, null, true);
                } else {
                  var units = game.units.concat(game.buildings);
                  var bestUnit = null;
                  var bestDist = 99999;

                  for (var i = 0; i < units.length; i++) {
                    var u = units[i];
                    var dist = this.distanceTo(u);

                    if (
                      dist <= this.type.vision &&
                      dist < bestDist &&
                      this.owner.team.canSeeUnit(u) &&
                      (!cmd.autocastCondition || cmd.autocastCondition(u, this)) &&
                      cmd.canTargetUnit(u)
                    ) {
                      bestDist = dist;
                      bestUnit = u;
                    }
                  }

                  if (bestUnit) {
                    if (this.order && this.queueOrder && this.queueTarget) {
                      this.queueOrder.splice(0, 0, this.order);
                      this.queueTarget.splice(0, 0, this.target);
                      message += "pushQEl$" + this.id + "~";
                    }
                    this.issueOrder(cmd, bestUnit, true);
                  }
                }
              }
            }
        };

        MapObject.prototype.universalOrder = function () {
          var targetPos = null;

          if (this.order.isInstant) targetPos = this.pos;
          else if (this.order.targetIsPoint && this.target) targetPos = this.target;
          else if (this.order.targetIsUnit && this.targetUnit && this.targetUnit.pos)
            targetPos = this.targetUnit.pos;
          // no valid target pos found, cancel the order, because somethign must be wrong (target dies or dissappeared most likely)
          else {
            this.issueOrder(lists.types.stop, null, true);
            return;
          }

          // we are in range
          var dist = this.pos.distanceTo2(targetPos);
          var range = this.order.getValue("range", this);
          var minRange = this.order.getValue("minRange", this);

          if (dist <= range && dist >= minRange) {
            if (this.disabledCommands[this.order.id_string]) {
              // when this order is diabled (by a modifier), then cancel
              this.issueOrder(lists.types.stop, null, true);
              return;
            }

            this.setValAndSync(
              "hitCycle",
              this.lastAttackingTick != ticksCounter - 1 ? 0 : this.hitCycle + 1
            );
            this.setValAndSync("lastAttackingTick", ticksCounter);

            if (
              this.hitCycle == 1 &&
              PLAYING_PLAYER.team.canSeeField(this.pos.x, this.pos.y) &&
              this.order.attackEffectInit
            )
              message +=
                "attEff$" +
                this.order.attackEffectInit +
                "$" +
                this.id +
                "$-1$-1$-1$" +
                this.type.size +
                "~";

            // if we can launch this tick
            if (
              this.hitCycle >= this.order.getValue("castingDelay", this) &&
              ticksCounter >=
                this.lastTickAbilityUsed[this.order.id] + Math.max(this.order.cooldown, 1) + 1
            ) {
              // if the unit can hit this frame
              // check mana and gold again, and if not cool, abort
              if (
                this.mana < this.order.getValue("manaCost", this) ||
                this.owner.gold < this.order.goldCost
              ) {
                this.issueOrder(lists.types.stop, null, true);
                return;
              }

              if (
                (PLAYING_PLAYER.team.canSeeField(targetPos.x, targetPos.y) ||
                  PLAYING_PLAYER.team.canSeeField(this.pos.x, this.pos.y)) &&
                this.order.launchSound &&
                (!this.order.playLaunchSoundOnce ||
                  ticksCounter >
                    this.lastTickAbilityUsed[this.order.id] + Math.max(this.order.cooldown, 1) + 2)
              )
                message +=
                  "playSnd$" +
                  this.order.launchSound +
                  "$1$" +
                  this.pos.px +
                  "$" +
                  this.pos.py +
                  "~";

              if (this.order.maximizeRangeWhenCasting)
                targetPos = this.pos.addNormalizedVector(
                  targetPos,
                  this.order.getValue("range", this) + 1
                );

              var projectileID = parseInt(Math.random() * 99999999);
              game.projectiles.push(
                new Projectile(
                  this.pos,
                  targetPos,
                  this.order.projectileSpeed,
                  function () {
                    var target =
                      this.targetUnit && this.targetUnit.pos ? this.targetUnit.pos : this.to;

                    if (this.radius_ > 0 || !this.targetUnit || !this.targetUnit.type) {
                      var units = game.units.concat(game.buildings);
                      for (var i = 0; i < units.length; i++)
                        if (
                          units[i].pos.distanceTo2(target) - units[i].type.radius <= this.radius_ &&
                          this.order.aoeHitsUnit(this.originUnit, units[i])
                        ) {
                          var u = units[i];

                          u.hit(
                            this.originUnit,
                            this.dmg_ ? this.dmg_ : 0,
                            true,
                            false,
                            false,
                            true
                          );

                          if (this.order.modifiers && this.order.modifiers.length > 0)
                            u.applyModifiers(
                              this.order.getValue("modifiers", this.originUnit),
                              this.originUnit
                            );

                          if (
                            u.type.isUnit &&
                            u.isAlive &&
                            !u.type.flying &&
                            this.order.bouncePower &&
                            (!u.type.power || this.order.bouncePower > u.type.power)
                          )
                            game.bashUnit(u, target, this.order);
                        }
                    } else {
                      this.targetUnit.hit(
                        this.originUnit,
                        this.dmg_ ? this.dmg_ : 0,
                        true,
                        false,
                        false,
                        true
                      );

                      if (this.order.modifiers && this.order.modifiers.length > 0)
                        this.targetUnit.applyModifiers(
                          this.order.getValue("modifiers", this.originUnit),
                          this.originUnit
                        );

                      if (
                        this.targetUnit.type.isUnit &&
                        this.targetUnit.isAlive &&
                        this.order.bouncePower &&
                        (!this.targetUnit.type.power ||
                          this.order.bouncePower > this.targetUnit.type.power)
                      )
                        game.bashUnit(this.targetUnit, this.originUnit.pos, this.order);
                    }
                  },
                  {
                    originUnit: this,
                    dmg_: this.order.getValue("damage", this),
                    radius_: this.order.getValue("aoeRadius", this),
                    order: this.order,
                    causesFlameDeath: this.order.causesFlameDeath,
                    targetUnit: this.targetUnit,
                    damageWhileFlying: this.order.getValue("projectileDamage", this),
                    damageRadius: this.order.getValue("projectileAoeRadius", this),
                    id: projectileID,
                  },
                  this.order.duration
                )
              );

              if (this.order.attackEffect) {
                message +=
                  "attEff$" +
                  this.order.attackEffect +
                  "$" +
                  this.id +
                  "$" +
                  (this.targetUnit ? this.targetUnit.id : "-1") +
                  "$" +
                  targetPos.px +
                  "$" +
                  targetPos.py +
                  "$";
                message +=
                  this.order.effectScale +
                  "$" +
                  this.order.getValue("projectileSpeed", this) +
                  "$0$" +
                  this.order.duration +
                  "$" +
                  this.pos.px +
                  "$" +
                  this.pos.py +
                  "$" +
                  (this.order.getValue("damage", this) ? 0 : 1) +
                  "$" +
                  projectileID +
                  "~";
              }

              if (this.order.modifiersSelf) {
                var mod = this.order.getValue("modifiersSelf", this);
                if (mod) this.applyModifiers([mod], this);
              }

              var summoningBlocked = false;
              var type = this.order.getValue("summonedUnits", this);

              if (type && type.isUnit) {
                if (
                  !type.supply ||
                  this.owner.supply + type.supply <= this.owner.maxSupply ||
                  this.order.ignoreSupplyCheck
                ) {
                  var pos = type.getNextFreePositionFrom(
                    targetPos,
                    this.order.requiresVision ? this.owner.team : null
                  );

                  if (pos) {
                    var u = new Unit({
                      x: pos.px,
                      y: pos.py,
                      type: type,
                      owner: this.owner,
                    });

                    message += "uUpdFld$" + u.id + "$forcedAnimation$special1~";
                    message += "uUpdFld$" + u.id + "$forcedAnimationStart$" + ticksCounter + "~";
                    message +=
                      "uUpdFld$" +
                      u.id +
                      "$forcedAnimationStop$" +
                      (ticksCounter + type.summonTime) +
                      "~";

                    u.isStunnedTill = ticksCounter + 40;

                    // if waypoint, order unit to go there
                    if (this.order.summonsUseWaypoint && this.waypoint && u)
                      this.waypointSpawn(u, this.order.summonsWaypointAMove);
                  } else if (this.owner == PLAYING_PLAYER) {
                    message += "addMsg$no space to spawn unit$red$attentionmark~";
                    message += "playSnd$" + SOUND.NEGATIVE + "$1~";
                    summoningBlocked = true;
                  }
                } else {
                  message += "addMsg$not enough supply$red$attentionmark~";
                  message += "playSnd$" + SOUND.NEGATIVE + "$1~";
                  summoningBlocked = true;
                }
              }

              if (!summoningBlocked) {
                this.setValAndSync("mana", this.mana - this.order.getValue("manaCost", this));
                this.owner.modifyGold(-this.order.goldCost);
              }

              this.setArrayValAndSync("lastTickAbilityUsed", this.order.id, ticksCounter);
              this.setValAndSync("tickOfLastWeaponFired", ticksCounter);
            }

            // order intern stop, when we did a spell a moment ago (dont do this immediately, so the animation looks smoother)
            else if (
              (!this.order.isChanneled ||
                this.mana < this.order.getValue("manaCost", this) ||
                this.owner.gold < this.order.goldCost) &&
              parseInt(
                this.lastTickAbilityUsed[this.order.id] + Math.max(this.order.cooldown, 1)
              ) == ticksCounter
            )
              this.issueOrder(lists.types.stop, null, true);

            this.blocking = true; // unit is attacking, so its not pushable

            return true;
          } else if (dist < minRange) {
            // if were closer than min range, order intern stop
            this.issueOrder(lists.types.stop, null, true);
            return;
          } else if (
            !this.path ||
            this.path.length < 1 ||
            (this.order.targetIsUnit && this.path[0].distanceTo2(targetPos) > 1.5)
          ) {
            // were not in range yet and we dont have a path or path does not lead to target (cuz moved), calculate it
            if (this.type.isBuilding) {
              this.issueOrder(lists.types.stop, null, true);

              if (this.owner == PLAYING_PLAYER) {
                message += "addMsg$Out of range$red$attentionmark~";
                message += "playSnd$" + SOUND.NEGATIVE + "$1~";
              }
            } else if (targetPos)
              this.setAndSyncPath(
                game.astar.getPath(this.pos, targetPos.pos ? targetPos.pos : targetPos, this.type)
              );
          }
        };

        // checks if there was make building commands in the command queue, if yes, refund gold, and kill dummy buildings
        MapObject.prototype.resetMakeBuilding = function (onlyFirst) {
          // check if make building orders were queued, if yes, give back the money, because theyre cancelled
          if (this.order.type == COMMAND.MAKEBUILDING && this.pseudoBuildings[0]) {
            this.owner.modifyGold(this.pseudoBuildings[0].cost);
            this.owner.setValAndSync(
              "supply",
              this.owner.supply - this.pseudoBuildings[0].type.supply
            );

            if (this.pseudoBuildings.length > 0) {
              message += "killPsdBld$" + this.pseudoBuildings[0].id + "~";
              this.pseudoBuildings.splice(0, 1);
              this.owner.updateGlobalVariables();
            }
          }

          if (onlyFirst) return;

          // delete elements from game's pseudoBuildings array, refund money and delete this pseudoBuildings array
          for (var i = 0; i < this.pseudoBuildings.length; i++) {
            this.owner.modifyGold(this.pseudoBuildings[i].cost);
            this.owner.setValAndSync(
              "supply",
              this.owner.supply - this.pseudoBuildings[i].type.supply
            );
            message += "killPsdBld$" + this.pseudoBuildings[i].id + "~";
          }

          if (this.pseudoBuildings.length > 0) {
            this.owner.updateGlobalVariables();
            this.pseudoBuildings = [];
          }
        };

        MapObject.prototype.makeBuildingUpdate = function () {
          var range = this.order.unitType.radius + this.order.getValue("range", this);

          // if unit has reached target location, it can start to actually make the building
          if (this.type.isBuilding || this.pos.distanceTo2(this.path[0]) <= range) {
            // if were too far from the actual target location, then its obv unreachable, so cancel
            if (
              this.pos.distanceTo2(
                new Field(
                  this.target.x + this.order.unitType.radius - 1,
                  this.target.y + this.order.unitType.radius - 1,
                  true
                )
              ) > range
            ) {
              this.resetMakeBuilding(true);
              this.issueOrder(lists.types.stop, null, true);
              return;
            }

            // check for enemy and friendly blocking units
            var blocked = false;
            var friendlyBlockingUnits = [];
            var enemyUnitsBlockThisBuilding = false;

            for (var i = 0; i < game.units.length; i++) {
              var u = game.units[i];

              if (
                !u.doesntCollideWithBuildings() &&
                u.owner == this.owner &&
                u != this &&
                this.order.unitType.distanceToPotentialBuilding(u.pos, this.target) -
                  u.type.radius <
                  0.0
              )
                friendlyBlockingUnits.push(game.units[i]);

              if (
                !u.doesntCollideWithBuildings() &&
                u.owner != this.owner &&
                this.order.unitType.distanceToPotentialBuilding(u.pos, this.target) -
                  u.type.radius <
                  0.0
              )
                enemyUnitsBlockThisBuilding = true;
            }

            // check if no static blocks or enemy mobile blocks in the way; if yes cancel the order
            if (!this.order.unitType.couldBePlacedAt(this.target) || enemyUnitsBlockThisBuilding) {
              if (this.owner == PLAYING_PLAYER) {
                message += "addMsg$No space for building$red$attentionmark~";
                message += "playSnd$" + SOUND.NEGATIVE + "$0.6~";
              }

              this.resetMakeBuilding(true);
              this.issueOrder(lists.types.stop, null, true);
              return;
            }

            // if mobile, friendly units in the way, send em away
            if (friendlyBlockingUnits.length > 0) {
              for (var i = 0; i < friendlyBlockingUnits.length; i++)
                if (friendlyBlockingUnits[i].order.type == COMMAND.IDLE)
                  friendlyBlockingUnits[i].issueOrder(
                    lists.types.amove,
                    this.path[0].addNormalizedVector(friendlyBlockingUnits[i].pos, 5)
                  );
              return true;
            }

            // check limit
            var limit = this.order.unitType.getValue("limit", this.owner);
            if (limit) {
              var count = 0;
              for (var k = 0; k < game.buildings.length; k++) {
                if (
                  game.buildings[k].type == this.order.unitType &&
                  game.buildings[k].owner == this.owner
                )
                  count++;

                if (game.buildings[k].queue && game.buildings[k].owner == this.owner)
                  for (var j = 0; j < game.buildings[k].queue.length; j++)
                    if (game.buildings[k].queue[j] == this.order.unitType) count++;
              }

              if (count >= limit) {
                if (this.owner == PLAYING_PLAYER) {
                  message +=
                    "addMsg$you can only have " +
                    limit +
                    " instances of this building$red$attentionmark~";
                  message += "playSnd$" + SOUND.NEGATIVE + "$1~";
                }

                this.resetMakeBuilding(true);
                this.issueOrder(lists.types.stop, null, true);
                return;
              }
            }

            // create the actual building and set it as the target if this unit
            var b = new Building({
              x: this.target.x,
              y: this.target.y,
              type: this.order.unitType,
              owner: this.owner,
              buildFirst: true,
              initialCost: this.pseudoBuildings[0]
                ? this.pseudoBuildings[0].cost
                : this.order.unitType.cost,
            });
            this.setUnitAndSync("targetUnit", b);

            if (this.pseudoBuildings.length > 0) {
              message += "killPsdBld$" + this.pseudoBuildings[0].id + "~";
              this.pseudoBuildings.splice(0, 1);
              this.owner.updateGlobalVariables();
            }

            if (!this.type.isBuilding) {
              var newPos = this.type.getNextFreePositionFromPosAtBuilding(
                this.pos,
                this.targetUnit
              );
              newPos = newPos ? newPos : this.type.getNextFreePositionFrom(this.pos);

              if (newPos) this.reposition(newPos);
            }

            this.setValAndSync("mana", this.mana - this.order.getValue("manaCost", this));
            this.owner.modifyGold(-this.order.goldCost);

            this.setOrderAndSync("order", lists.types.repair);

            return;
          }
        };

        MapObject.prototype.queueUpdate = function () {
          if (this.queue[0] && !this.queueStarted) {
            if (
              (this.queue[0].supply &&
                this.owner.supply + this.queue[0].supply <= this.owner.maxSupply) ||
              !this.queue[0].supply
            ) {
              this.queueStarted = true;
              message += "qStart$" + this.id + "~";

              if (this.queue[0].isBuilding && PLAYING_PLAYER.team.canSeeUnit(this))
                message +=
                  "playSnd$" + SOUND.BUILD + "$0.5$" + this.pos.px + "$" + this.pos.py + "~";

              if (this.queue[0].supply)
                this.owner.setValAndSync("supply", this.owner.supply + this.queue[0].supply);
            } else this.queueFinish++;
          }

          // if a new unit finishes building this tick
          if (this.queue[0] && this.queueFinish <= ticksCounter) {
            var type = this.queue[0];

            if (type.isUnit) {
              var u = null;

              var spawnPoint = this.pos;

              // if waypoint is field, move from center of building a little bit in the direction of the wp, so the unit spawns on the corresponding side of the building
              if (this.waypoint && this.waypoint[0] && this.waypoint[0].isField)
                spawnPoint = spawnPoint.addNormalizedVector(this.waypoint[0], 0.5);
              // if no waypoint, move spawn point south, so unit spawns at the bottom of the building
              else if (!this.waypoint || this.waypoint.length == 0)
                spawnPoint = spawnPoint.add3(0, 1);
              // if waypoint is unit
              else if (this.waypoint && this.waypoint[0] && this.waypoint[0].type)
                spawnPoint = spawnPoint.addNormalizedVector(this.waypoint[0].pos, 0.5);

              var spawnPoints2 = this.type.isBuilding
                ? type.getNextFreePositionFromPosAtBuilding(spawnPoint, this)
                : null;
              spawnPoint = spawnPoints2 ? spawnPoints2 : type.getNextFreePositionFrom(spawnPoint);

              if (type.uniqueAndHeroic && spawnPoint)
                for (var i = 0; i < game.units4.length; i++)
                  if (game.units4[i].type == type && game.units4[i].owner == this.owner) {
                    u = game.units4[i];
                    game.units4.splice(i, 1);
                    i = game.units4.length;

                    u.hp = u.getValue("hp");
                    u.pos = spawnPoint;
                    u.owner.modifySupply(u.type.supplyProvided);
                    u.order = lists.types.stop;
                    u.path = [];
                    u.target = null;
                    u.queueOrder = [];
                    u.queueTarget = [];
                    u.lastFramePos1 = u.pos.getCopy();
                    u.lastFramePos2 = u.pos.getCopy();
                    u.lastTicksPosition = u.pos.getCopy();
                    u.isActive = true;
                    u.isAlive = true;

                    game.units.push(u);
                    game.units2.push(u);
                    game.unitSpawnBucket(u, u.pos.x, u.pos.y); // add unit to bucket
                    u.owner.team.updateVisionUnitSpawn(u);

                    message += "reviveUnit$" + u.id + "$" + u.pos.px + "$" + u.pos.py + "~";
                  }

              if (!u && spawnPoint)
                u = new Unit({
                  x: spawnPoint.px,
                  y: spawnPoint.py,
                  type: type,
                  owner: this.owner,
                  noSupplyInit: true,
                });

              // if waypoint, order unit to go there
              if (this.waypoint && u) this.waypointSpawn(u, this.getValue("spawnWithAMove"));

              this.queueElementFinishes();
            }

            // if upgrade
            else if (type.isUpgrade) {
              this.owner.modifyUpgrade(type, 1);

              // interface msg
              if (this.owner == PLAYING_PLAYER) {
                message += "addMsg$Research finished$#34DA34$research~";
                message += "playSnd$" + SOUND.BUILDING_FINISHED + "$0.8~";
              }

              this.queueElementFinishes();

              this.owner.updateGlobalVariables();
            }

            // if building upgrade
            else if (type.isBuilding) {
              // interface msg
              if (this.owner == PLAYING_PLAYER) {
                message += "addMsg$Building upgrade finished$#34DA34$hammer~";
                message += "playSnd$" + SOUND.BUILDING_FINISHED + "$0.8~";
                message += "massSmk$" + this.id + "~";
              }

              // get old hp relation
              var hpRelation = this.hp / this.getValue("hp");

              // switch building type to new type
              this.type = type;
              message += "swpBldType$" + this.id + "$" + type.name + "~";

              // readjust hp
              this.setValAndSync("hp", hpRelation * this.getValue("hp"));

              this.autocast = this.initAutocast();

              this.queueElementFinishes();

              game.updateGlobalPlayerVariables();
            } else if (type.isCommand) {
              if (type.modifiers && type.modifiers.length > 0)
                this.applyModifiers(type.modifiers, this);
            }
          }
        };

        MapObject.prototype.waypointSpawn = function (u, useAMove) {
          // if waypoint, order unit to go there
          if (this.waypoint && u)
            for (var i = 0; i < this.waypoint.length; i++) {
              var order = lists.types.move;

              // if waypoint is field, move from center of building a little bit in the direction of the wp, so the unit spawns on the corresponding side of the building
              if (this.waypoint[i].isField && useAMove) order = lists.types.amove;

              // if waypoint is unit
              if (this.waypoint[i].type)
                order =
                  u.type.commands.mine && this.waypoint[i].gold
                    ? lists.types.mine
                    : lists.types.moveto; // if worker spawns and waypoint is set to goldmine => command is mine gold

              u.issueOrder(order, this.waypoint[i], false, i > 0);
            }
        };

        MapObject.prototype.canIssueOrder = function (command, target) {
          if (!this.type.commands[command.id_string]) return;

          // check for mana
          if (this.mana < command.getValue("manaCost", this)) return false;

          // check for gold
          if (this.owner.gold < command.getValue("goldCost", this)) return false;

          // check for max lvl
          if (
            command.upgrade &&
            this.owner.getUpgradeLevel(command.upgrade) +
              this.owner.upgradeCountInResearch(command.upgrade) >=
              command.upgrade.maxLevel
          )
            return false;

          // if no parallel research allowed and already researching, ...
          if (
            command.upgrade &&
            command.upgrade.noParallelResearch &&
            this.owner.upgradeCountInResearch(command.upgrade) > 0
          )
            return false;

          if (command.requirementType)
            for (var i = 0; i < command.requirementType.length; i++) {
              var t = command.requirementType[i];
              if (
                (t &&
                  t.isBuilding &&
                  (this.owner.buildings[t.id_string] ? this.owner.buildings[t.id_string] : 0) <
                    command.requirementLevel[i]) ||
                (t.isUpgrade &&
                  (this.owner.upgrades[t.id_string] ? this.owner.upgrades[t.id_string] : 0) <
                    command.requirementLevel[i])
              )
                return false;
            }

          // check if not disabled
          if (this.disabledCommands[command.id_string]) return false;

          // target requirement
          if (target && target.type && !command.canTargetUnit(target)) return false;

          return true;
        };

        MapObject.prototype.updateModifiers = function () {
          for (var i = 0; i < this.modifiers.length; i++)
            if (
              this.modifiers[i].removeAt &&
              this.modifiers[i].removeAt > 0 &&
              this.modifiers[i].removeAt <= ticksCounter
            ) {
              this.killModifier(i);
              i--;
            }
        };

        MapObject.prototype.mapObjectUpdate = function () {
          // if lifetime
          if (this.getValue("lifetime")) {
            this.setValAndSync("lifetime", this.lifetime - 1);

            if (this.lifetime <= 0) {
              this.hit();
              return;
            }
          }

          // hp regeneration
          if (this.getValue("hpRegenerationRate")) {
            this.setValAndSync(
              "hp",
              Math.min(this.hp + this.getValue("hpRegenerationRate"), this.getValue("hp"))
            );

            if (this.hp <= 0) this.hit();
          }

          // mana regeneration
          if (this.getValue("manaRegenerationRate"))
            this.setValAndSync(
              "mana",
              Math.max(
                Math.min(this.mana + this.getValue("manaRegenerationRate"), this.getValue("mana")),
                0
              )
            );

          // detection
          if (this.getValue("hasDetection") && (ticksCounter + this.tickOfCreation) % 10 == 1) {
            var units = game.units.concat(game.buildings);
            for (var i = 0; i < units.length; i++)
              if (
                units[i].getValue("isInvisible") &&
                units[i].owner.isEnemyOfPlayer(this.owner) &&
                this.pos.distanceTo2(units[i].pos) <= this.getValue("vision")
              )
                units[i].setValAndSync("isDetectedUntil", ticksCounter + 20);
          }

          // autobuild units
          if ((this.tickOfCreation + ticksCounter) % 11 == 1 && !this.queue[0])
            for (var i = 0; i < this.autocast.length; i++) {
              var cmd = game.commands[this.autocast[i]];

              if (
                cmd &&
                cmd.type == COMMAND.MAKEUNIT &&
                cmd.unitType &&
                this.canIssueOrder(cmd) &&
                this.owner.gold >= cmd.unitType.cost &&
                (!cmd.unitType.uniqueAndHeroic ||
                  !game.unitOfTypeExistsOrIsMade(cmd.unitType, this.owner))
              )
                this.orderMake(cmd, true);
              else if (
                cmd &&
                cmd.type == COMMAND.UPGRADE &&
                cmd.upgrade &&
                this.canIssueOrder(cmd) &&
                this.owner.gold >= cmd.upgrade.cost
              )
                this.orderMake(cmd, true);
            }

          // auras
          if (
            this.modifiers &&
            this.modifiers.length > 0 &&
            (this.tickOfCreation + ticksCounter) % 21 == 4
          ) {
            var units = game.units.concat(game.buildings);

            for (var k = 0; k < this.modifiers.length; k++) {
              var mod = this.modifiers[k].modifier;
              if (mod.auraModifiers && mod.auraRange)
                for (var j = 0; j < mod.auraModifiers.length; j++)
                  if (mod.auraModifiers[j] && mod.auraRange[j])
                    for (var i = 0; i < units.length; i++)
                      if (
                        units[i].distanceTo(this) <= mod.auraRange[j] &&
                        mod.aoeHitsUnit(this, units[i])
                      )
                        units[i].applyModifiers(
                          [mod.auraModifiers[j]],
                          this,
                          mod.auraModifiers[j].getValue("duration", this.owner)
                        );
            }
          }
        };

        // blocks / unblocks all the containing fields of this building / tile. Usually used before and after searching a path to (the center of) this building. For this, is has to not block the pathfinding.
        // Also used on creation or when killed
        MapObject.prototype.switchBlocking = function (on, dontRefreshNBs) {
          if (this.type.isUnit || !this.x || !this.y) return;

          // block / unblock fields
          for (var x = this.x; x < this.x + this.type.sizeX; x++)
            for (var y = this.y; y < this.y + this.type.sizeY; y++)
              game.blockArray[x][y] = on ? false : true;

          if (dontRefreshNBs) return;

          // refresh neightbours of blocked / unblocked fields
          for (var x = this.x - 1; x < this.x + this.type.sizeX + 1; x++)
            for (var y = this.y - 1; y < this.y + this.type.sizeY + 1; y++)
              game.refreshNBSOfField(game.fields[x][y]);

          // refresh neightbours of blocked / unblocked fields 2x2
          for (
            var x = Math.max(this.x - 2, 1);
            x < Math.min(this.x + this.type.sizeX + 2, game.x);
            x++
          )
            for (
              var y = Math.max(this.y - 2, 1);
              y < Math.min(this.y + this.type.sizeY + 2, game.y);
              y++
            )
              game.refreshNBSOfField2x2(game.fields2x2[x][y]);
        };

        MapObject.prototype.cancelQueueElement = function () {
          // find highest unit making slot
          var i = 0;
          while (this.queue[i]) i++;
          i--;

          var type = this.queue[i];

          if (type) {
            this.queue[i] = null;
            this.owner.modifyGold(type.getValue("cost", this.owner, true)); // refund the money
            if (type.supply && this.queueStarted && i == 0)
              this.owner.setValAndSync("supply", this.owner.supply - type.supply);
            message += "killQEl2$" + this.id + "$" + i + "~";
          }
        };

        MapObject.prototype.queueElementFinishes = function () {
          // update queue
          for (var i = 0; i < BUILDING_QUEUE_LEN - 1; i++) this.queue[i] = this.queue[i + 1];
          this.queue[BUILDING_QUEUE_LEN - 1] = null;

          // if more units in queue, set build time according to their build time, else 0
          this.queueFinish = this.queue[0]
            ? this.queue[0].getValue("buildTime", this.owner) + ticksCounter
            : 0;
          this.queueStarted = false;

          message += "qUFnsh$" + this.id + "~";
        };

        // Class repreesenting a (movable) unit
        Unit.prototype = new MapObject();
        function Unit(data) {
          this.modifiers = [];
          this.modifiersSelf = [];
          this.modifierMods = {};
          this.disabledCommands = {};

          // basic attributes
          this.pos = new Field(data.x, data.y, true);
          this.type = data.type;
          this.owner = data.owner;

          this.id = game.global_id++;

          if (!data.noSupplyInit)
            this.owner.setValAndSync("supply", this.owner.supply + this.type.supply);
          this.owner.modifySupply(this.type.supplyProvided);

          // everything regarding the current order
          this.order = lists.types.stop;
          this.path = []; // the current path (array of fields)
          this.target = null; // the current target; can be a field or a unit
          this.carriedGoldAmount = 0;
          this.goldMine = null; // the goldmine currently mining from
          this.lastAttackingTick = -999; // the last tick, when this unit was attacking
          this.tickOfLastWeaponFired = -999; // the last tick, when this unit was exactly doing damage
          this.targetLockingUnit = null; // when a unit starts attacking, it locks on a unit (and will continue the current attack cycle, even if this unit moves out of range)
          this.vision = this.type.vision;
          this.miningAmount = 0;
          this.lastDropTick = -999;
          this.asyncDrop = false;
          this.cargo = [];
          this.freeCargo = this.type.cargoSpace;
          this.pseudoBuildings = []; // if building orders queued, store pseudo objects of buildings here
          this.autocast = this.initAutocast(); // ids of abilities that are on autocast
          this.tickOfCreation = ticksCounter;

          // resets every tick
          this.numberOfRepairers; // Number of units that have repaired this unit - to track repair inefficny

          // order queue
          this.queueOrder = [];
          this.queueTarget = [];
          this.waypoint = [];

          // making units stuff
          this.queue = []; // references to the unit types that are in production

          // pushing / blocking
          this.blocking = false; // can be pushed by friendly units (false when hold position for example)
          this.pushPrio = 0; // prio regarding pushing friendly unit; when 2 units push each other and seem to be stuck, push prio is pseudo randomly changed, so one pushes the other aside
          this.lastTickSetPushPrio = 0;
          this.lastTicksPosition = this.pos.getCopy(); // we need this for example to interpolate between last ticks and this ticks position when drawing (for more smooth looking movement)
          this.timesPushedThisTick = 0; // how often this unit has been pushed by friendly units due to movement this tick
          this.lastTickPathRecalculated = 0;
          this.lastFramePos1 = this.pos.getCopy();
          this.lastFramePos2 = this.pos.getCopy();

          game.units.push(this);
          game.units2.push(this);
          game.unitSpawnBucket(this, this.pos.x, this.pos.y); // add unit to bucket
          this.owner.team.updateVisionUnitSpawn(this);

          this.lastMiningTick = -1;
          this.tickOfLastLoadIn = -1;

          this.revealedToTeamUntil = new Array(MAX_PLAYERS);

          this.cooldowns = new Array(game.commands.length);
          this.lastTickAbilityUsed = new Array(game.commands.length);
          this.abilityLevels = new Array(game.commands.length);
          for (var i = 0; i < game.commands.length; i++) {
            this.lastTickAbilityUsed[i] = -9999;
            this.abilityLevels[i] =
              game.commands[i] &&
              game.commands[i].requiredLevels &&
              game.commands[i].requiredLevels.length > 0
                ? 0
                : 1;
          }

          this.isStunnedTill = -1;
          this.isInactiveTill = -1;
          if (this.type.lifetime)
            this.lifetime = this.type.lifetime + this.owner.getValueModifier("lifetime", this.type);

          message +=
            "creaU$" +
            this.type.name +
            "$" +
            this.pos.px +
            "$" +
            this.pos.py +
            "$" +
            this.owner.number +
            "~";

          this.syncWaypoint();

          this.level = this.type.experienceLevels && this.type.experienceLevels.length > 0 ? 1 : 0;
          this.exp = 0;

          // init modifiers
          if (this.type.spawnModifiers && this.type.spawnModifiers.length > 0)
            this.applyModifiers(this.type.spawnModifiers, this);

          this.initHPAndMana();
        }

        // return true, if the unit does collide with other units (not currently, but in general; units that are mining currently, ignore collision, also unit that have noCollision attribute set, dont collide)
        Unit.prototype.collides = function () {
          return !this.type.noCollision && (!this.order || this.order.type != COMMAND.MINE);
        };

        Unit.prototype.doesntCollideWithBuildings = function () {
          return this.type.noCollision || this.type.flying;
        };

        // this is called when a unit wants to move to a new position; it checks for units that will be collided on the new position and calls this method on them,
        // so they are pushed away in the according directio (recursive)
        // returns a block state (not blocked, blocked by units or blocked by static objects)
        Unit.prototype.push2 = function (pushingUnit, pos) {
          var blockState = BLOCK_STATE.UNBLOCKED;

          // if target pos is not accessible, check for best alternative pos
          if (
            !this.type.couldStandAt(pos) ||
            this.collides() ||
            game.unitAtPosWouldCollideWithUnits(pos, this.type.radius, this.owner)
          ) {
            // find free position in the direction we want to move (in case theres something static blocking)
            var dist = this.pos.distanceTo2(pos);
            var checkPos = null;

            var v1 = this.pos.vectorTo(pos);

            for (var i = 0; i < pushDistances.length; i++)
              for (var k = 0; k < pushPosAngles.length; k++) {
                checkPos = this.pos.add(
                  v1
                    .add(new Field(v1.py * pushPosAngles[k], -1 * v1.px * pushPosAngles[k], true))
                    .normalize(pushDistances[i] * dist)
                );
                if (this.type.couldStandAt(checkPos)) {
                  if (
                    !this.collides() ||
                    !game.unitAtPosWouldCollideWithUnits(checkPos, this.type.radius, this.owner)
                  ) {
                    this.pos = checkPos;
                    i = pushDistances.length;
                    k = pushPosAngles.length;
                  } else blockState = BLOCK_STATE.BLOCKED_BY_UNITS;
                } else
                  blockState =
                    blockState == BLOCK_STATE.UNBLOCKED
                      ? BLOCK_STATE.BLOCKED_BY_STATIC_OBJECTS
                      : blockState;
              }
          } else this.pos = pos;

          // check if collide with other units and push them, if yes
          var units = game.getPossiblyCollidingUnitsFromPos(this.pos);
          for (var i = 0; i < units.length; i++) {
            var unit = units[i];
            if (
              !unit.type.flying &&
              unit != this &&
              this.owner == unit.owner &&
              this.distanceTo(unit) < 0 &&
              unit.collides() &&
              this.collides() &&
              !unit.blocking &&
              (this.pushPrio >= unit.pushPrio || unit.order.type == COMMAND.IDLE) &&
              this.timesPushedThisTick < 2
            ) {
              this.timesPushedThisTick++;
              unit.push2(
                this,
                this.pos.addNormalizedVector(unit.pos, this.type.radius + unit.type.radius)
              );
            }
          }

          // if not just done and pushed by another unit, check if we can raytrace to the 2nd-next waypoint, and if yes, remove the very next one
          // the problem here is, sometimes (mostly at corners), when a couple #of units push each other, one unit gets pushed over its next waypoint, then it tries to go "back" to this waypoint,
          // because it did not exactly reach it, but actually it could just move to the 2nd-next one; and then it blocks movement of the units behind it, because it moves back (which it would not need to)
          if (
            pushingUnit &&
            this.lastTickPathRecalculated + 10 < ticksCounter &&
            this.path.length > 1
          ) {
            this.lastTickPathRecalculated = ticksCounter;

            // remove target unit while searching path, so it doesnt block the path
            if (this.targetUnit && this.targetUnit.isAlive) this.targetUnit.switchBlocking(false);

            if (this.pos.raytrace(this.path[this.path.length - 2], this.type.radius))
              this.path.pop();

            // remove target unit while searching path, so it doesnt block the path
            if (this.targetUnit && this.targetUnit.isAlive) this.targetUnit.switchBlocking(true);
          }

          return blockState;
        };

        Unit.prototype.setAndSyncPath = function (newPath, originalTarget) {
          if (!newPath) return;

          this.path = newPath;

          if (newPath.length && newPath.length > 0)
            message +=
              "updUPath$" +
              this.id +
              "$" +
              (originalTarget ? originalTarget.px : newPath[0].px) +
              "$" +
              (originalTarget ? originalTarget.py : newPath[0].py) +
              "~";
          else message += "updUPath$" + this.id + "-1$-1~";
        };

        Unit.prototype.hasPath = function () {
          return this.path.length > 0;
        };

        // remove add to game array
        Unit.prototype.switchBlocking = function (on) {
          if (on) game.units.push(this);
          else game.units.erease(this);
        };

        Unit.prototype.distanceTo = function (otherUnit) {
          if (!otherUnit) return 999999;

          return otherUnit.type.isBuilding
            ? otherUnit.distanceTo(this)
            : this.pos.distanceTo2(otherUnit.pos) - this.type.radius - otherUnit.type.radius;
        };

        // issue an order to this unit (intern: dont put it at the end of the order-queue, but execute it immediately, while not killing the queue; used for some special sutiations; shift: if shift: put it at the end of the queue)
        Unit.prototype.issueOrder = function (order, target, intern, shift, tolerance) {
          // if amove and unit cant amove, but move, then make it move instead
          if (order.type == COMMAND.AMOVE && !this.autoAttackAIEnabled() && this.type.commands.move)
            order = lists.types.move;

          // if requirements are not met for this order or this unit can not perform this order at all, return
          if (
            (!this.canIssueOrder(order, target) || this.abilityLevels[order.id] == 0) &&
            order.type != COMMAND.DANCE &&
            order.type != COMMAND.IDLE
          )
            return;

          if (
            order.type == COMMAND.UNLOAD2 &&
            this.cargo &&
            this.cargo.length > 0 &&
            this.cargo.length >= target - 1
          ) {
            this.dropAUnit(target);
            return;
          }

          // if target not seen (or dead and known), then return
          if (
            target &&
            target.type &&
            target.type.isBuilding &&
            !target.seenBy[this.owner.team.number]
          )
            return;

          // if intern command, dont reset queues and stuff
          if (!intern) {
            if (!shift) this.resetMakeBuilding();

            if (order.type == COMMAND.MAKEBUILDING) {
              var buildingType = order.unitType;
              var cost = this.owner.getCostOfNextInstanceForBuilding(buildingType);

              if (
                this.owner.gold >= cost &&
                buildingType &&
                buildingType.isBuilding &&
                (!buildingType.supply ||
                  buildingType.supply <= this.owner.maxSupply - this.owner.supply)
              ) {
                this.owner.modifyGold(-cost);
                this.owner.setValAndSync("supply", this.owner.supply + buildingType.supply);
                var id = game.pseudoBuildingsId++;
                this.pseudoBuildings.push({
                  id: id,
                  cost: cost,
                  type: buildingType,
                });

                if (this.owner == PLAYING_PLAYER)
                  message +=
                    "crtPsdBld$" +
                    id +
                    "$" +
                    target.x +
                    "$" +
                    target.y +
                    "$" +
                    this.owner.number +
                    "$" +
                    buildingType.name +
                    "~";

                this.owner.updateGlobalVariables();
              } else return;
            }

            if (shift) {
              if (this.queueOrder.length < 19) {
                this.queueOrder.push(order);
                this.queueTarget.push(target);
                message +=
                  "pushOdrQ$" +
                  this.id +
                  "$" +
                  order.id +
                  "$" +
                  (target && target.isField ? target.px : -1) +
                  "$" +
                  (target && target.isField ? target.py : -1) +
                  "$" +
                  (target && target.type ? target.id : -1) +
                  "~";
              }
              return;
            }

            // reset shift queues
            this.queueOrder = [];
            this.queueTarget = [];
            message += "killOdrQ$" + this.id + "~";
          }

          if (order.type == COMMAND.IDLE && this.queue[0]) {
            this.cancelQueueElement();
            return;
          }

          if (
            order.cooldown2 &&
            this.lastTickAbilityUsed[order.id] + order.getValue("cooldown2", this) > ticksCounter
          )
            return;

          if (!(this.order.type == COMMAND.UNLOAD && order.type == COMMAND.MOVE)) {
            if (this.order != order && order.cooldown) {
              this.setValAndSync("hitCycle", -1);
              message += "uUpdFld$" + this.id + "$tickOfLastWeaponFired$" + -999 + "~";
            }

            this.setOrderAndSync("order", order);
          }

          if (order.type != COMMAND.UNLOAD) this.setAndSyncPath([]);

          this.setValAndSync("targetUnit", null);
          this.tolerance = tolerance;
          this.blocking = false;

          // play sound
          if (game.lastYesSound + 60 < ticksCounter && this.owner == PLAYING_PLAYER && !intern) {
            message += "playYesSnd$" + this.id + "~";
            game.lastYesSound = ticksCounter;
          }

          if (order.type == COMMAND.ATTACK) this.setUnitAndSync("targetUnit", target);
          else if (order.type == COMMAND.ATTACK_GROUND) {
            if (order.targetIsPoint) this.setPosAndSync("target", target);
            else if (order.targetIsUnit) this.setUnitAndSync("targetUnit", target);
          } else if (order.type == COMMAND.AMOVE) {
            this.setPosAndSync("target", target);
            this.nextTickToCheckForNextEnemyUnit = ticksCounter;
          } else if (order.type == COMMAND.UNLOAD) {
            if (target && target.isField) {
              var pos = this.type.getNextFreePositionFrom(target);

              if (pos) {
                this.setPosAndSync("target", this.type.getNextFreePositionFrom(target));
                this.setAndSyncPath(
                  game.astar.getPath(this.pos, this.target, this.type),
                  this.target
                );
                this.asyncDrop = false;
              }
            } else this.asyncDrop = true;
          } else if (order.type == COMMAND.MOVE)
            this.setAndSyncPath(game.astar.getPath(this.pos, target, this.type), target);
          else if (order.isInstant) this.setPosAndSync("target", null);
          else if (order.type == COMMAND.MAKEBUILDING) {
            var moveTarget = new Field(
              target.x + order.unitType.radius - 1,
              target.y + order.unitType.radius - 1,
              true
            );
            this.setAndSyncPath(game.astar.getPath(this.pos, moveTarget, this.type), moveTarget);
            this.setPosAndSync("target", target);
          }

          // TODO: Find out how order.type could be COMMAND.MINE while the target is a field instead of a goldmine instead of adding the second condition that it is one
          else if (
            order.type == COMMAND.MINE &&
            target &&
            target.type &&
            target.type.goldPerDelivery > 0
          ) {
            this.goldMine = target;
          } else if ((order.type == COMMAND.MOVETO || order.type == COMMAND.REPAIR) && target) {
            this.setUnitAndSync("targetUnit", target);
            this.setAndSyncPath(game.astar.getPath(this.pos, target.pos, this.type, target));
          } else if (order.type == COMMAND.UNIVERSAL) {
            if (order.targetIsPoint) this.setPosAndSync("target", target);
            else if (order.targetIsUnit) this.setUnitAndSync("targetUnit", target);
          } else if (order.type == COMMAND.TELEPORT) this.setPosAndSync("target", target);
        };

        Unit.prototype.getRepaired = function (byUnit) {
          var repairRate =
            byUnit.getValue("repairRate") *
            (1 - byUnit.getValue("repairIneffiency")) ** this.numberOfRepairers;
          var repairCost = byUnit.getValue("repairCost");

          if (repairRate && repairRate > 0 && byUnit.owner.gold >= repairCost) {
            byUnit.owner.modifyGold(-repairCost);
            this.setValAndSync("hp", Math.min(this.getValue("hp"), this.hp + repairRate));
            this.numberOfRepairers++;
          } else byUnit.issueOrder(lists.types.stop, null, true);
        };

        // no unit = use first unit
        Unit.prototype.dropAUnit = function (index) {
          if (index !== undefined && !this.cargo[index]) index = 0;

          if (this.lastDropTick + 10 <= ticksCounter && this.cargo.length > 0) {
            var u =
              index !== undefined ? this.cargo[parseInt(index)] : this.cargo[this.cargo.length - 1];
            var pos = u.type.getNextFreePositionFrom(this.pos);

            if (!pos || pos.distanceTo2(this.pos) > 2) return;

            this.lastDropTick = ticksCounter;
            this.cargo.erease(u);
            u.isActive = true;
            game.units.push(u);
            u.pos = pos.add3(((ticksCounter % 20) - 10) * 0.01, ((ticksCounter % 17) - 8) * 0.01);
            u.lastTicksPosition = u.pos;
            message += "killCrg$" + this.id + "$" + u.id + "$" + u.pos.px + "$" + u.pos.py + "~";
            game.unitSpawnBucket(u, u.pos.x, u.pos.y); // add unit to bucket
            this.freeCargo += u.type.cargoUse;

            // regenerate health and mana that the unit would have regenerated in the time it was loaded
            var totalLoadTicks = ticksCounter - u.tickOfLastLoadIn - 1;

            // hp regeneration
            if (u.getValue("hpRegenerationRate"))
              u.setValAndSync(
                "hp",
                Math.min(u.hp + u.getValue("hpRegenerationRate") * totalLoadTicks, u.type.hp)
              );

            // mana regeneration
            if (u.getValue("manaRegenerationRate"))
              u.setValAndSync(
                "mana",
                Math.min(u.mana + u.getValue("manaRegenerationRate") * totalLoadTicks, u.type.mana)
              );
          }
        };

        Unit.prototype.loadAUnit = function (unit) {
          if (unit.type.cargoUse >= 0 && unit != this && this.freeCargo >= unit.type.cargoUse) {
            unit.issueOrder(lists.types.stop);
            unit.remove();
            this.freeCargo -= unit.type.cargoUse;
            this.cargo.push(unit);
            unit.tickOfLastLoadIn = ticksCounter;

            message += "addCrg$" + this.id + "$" + unit.id + "~";
          }
        };

        Unit.prototype.canPerformDance = function (cmd) {
          for (var i = 0; i < dances.length; i++)
            if (
              dances[i].unit_id_string == this.type.id_string &&
              cmd.chat_str == dances[i].chat_str &&
              (dances[i].free ||
                (dances[i].dbPos &&
                  this.owner.dances.length >= dances[i].dbPos &&
                  this.owner.dances.substr(this.owner.dances.length - dances[i].dbPos, 1) == "1"))
            )
              return true;

          return false;
        };

        Unit.prototype.update = function () {
          this.updateModifiers();
          this.mapObjectUpdate();
          if (this.hp <= 0) {
            this.remove();
            return;
          }

          this.numberOfRepairers = 0;

          this.blocking = !this.type.commands.move || this.getValue("movementSpeed") <= 0;
          this.timesPushedThisTick = 0;

          // clear orders with a unit, that you cant see the target of
          if (
            this.targetUnit &&
            this.targetUnit.type &&
            this.targetUnit.type.isUnit &&
            !this.owner.team.canSeeUnit(this.targetUnit)
          )
            this.setUnitAndSync("targetUnit", null);

          for (var i = 0; i < this.queueTarget.length; i++)
            if (
              this.queueTarget[i] &&
              this.queueTarget[i].type &&
              this.queueTarget[i].type.isUnit &&
              !this.owner.team.canSeeUnit(this.queueTarget[i])
            ) {
              this.queueOrder.splice(i, 1);
              this.queueTarget.splice(i, 1);
              message += "killQEl$" + this.id + "$" + i + "~";
              i--;
            }

          // if inactive, return
          if (this.isInactiveTill >= ticksCounter) {
            if (this.isInactiveTill == ticksCounter) {
              game.units.push(this);
              game.units3.erease(this);
              this.isActive = true;
              game.unitSpawnBucket(this, this.pos.x, this.pos.y);
              this.owner.team.updateVisionUnitSpawn(this);
            }
            return;
          }

          this.queueUpdate();

          // if stunned, return
          if (
            this.isStunnedTill >= ticksCounter ||
            (this.order && this.order.type == COMMAND.DANCE)
          )
            return;

          if (this.queue[0])
            // if dis unit is build'n sumth'n, return, because nutt'n else is dun
            return;

          this.handleAutocast();

          // if moveto / repair and the unit has reached the target
          if (
            this.order.type == COMMAND.MOVETO ||
            this.order.type == COMMAND.REPAIR ||
            this.order.type == COMMAND.LOAD
          ) {
            if (
              !this.targetUnit ||
              !this.targetUnit.isActive ||
              this.targetUnit == this ||
              !this.owner.team.canSeeUnitInvisible(this.targetUnit)
            ) {
              this.issueOrder(lists.types.stop, null, true);
              return;
            }

            var distance = this.distanceTo(this.targetUnit);
            var repairOrConstruct = false;
            var dontStop = false;

            // load
            if (
              this.type.cargoUse >= 0 &&
              this.type.cargoUse <= this.targetUnit.freeCargo &&
              !this.targetUnit.isUnderConstruction &&
              this.owner == this.targetUnit.owner &&
              this.order.type != COMMAND.REPAIR
            ) {
              if (distance <= 0) {
                this.targetUnit.loadAUnit(this);
                return;
              }

              dontStop = true;
            }

            // load reverse (were the dropship and other unit is cargo)
            else if (
              this.targetUnit.type.cargoUse >= 0 &&
              this.targetUnit.type.cargoUse <= this.freeCargo &&
              this.owner == this.targetUnit.owner &&
              this.order.type != COMMAND.REPAIR
            ) {
              if (distance <= 0) {
                this.loadAUnit(this.targetUnit);
                this.issueOrder(lists.types.stop, null, true);
                return;
              }

              dontStop = true;
            }

            // repair
            else if (
              this.targetUnit.canBeRepaired() &&
              this.targetUnit.hp < this.targetUnit.type.hp &&
              this.owner.gold >= this.getValue("repairCost")
            ) {
              if (distance <= lists.types.repair.getValue("range", this) + 0.25)
                repairOrConstruct = true;
              else dontStop = true;
            }

            // construct
            else if (this.targetUnit.isUnderConstruction) {
              var cmd = this.getCmd2ConstructBuilding(this.targetUnit.type);
              if (cmd) {
                if (distance <= cmd.getValue("range", this) + 0.25) repairOrConstruct = true;
                else dontStop = true;
              }
            }

            if (repairOrConstruct) {
              this.blocking = true; // while repairing, the unit can not be pushed
              this.targetUnit.getRepaired(this);
              this.setOrderAndSync("order", lists.types.repair);
              this.setValAndSync("hitCycle", this.hitCycle + 1);

              // repair sound
              if (
                this.hitCycle % this.type.weaponCooldown == 2 &&
                PLAYING_PLAYER.team.canSeeUnit(this)
              )
                message +=
                  "playSnd$" + SOUND.REPAIR + "$0.9$" + this.pos.px + "$" + this.pos.py + "~";

              return;
            }

            // target unit has moved away from actual target point, so recalculate path
            if (this.path.length > 0 && this.path[0].distanceTo2(this.targetUnit.pos) >= 0.5)
              this.setAndSyncPath(game.astar.getPath(this.pos, this.targetUnit.pos, this.type));
            else if (!dontStop && distance <= 0.25) this.issueOrder(lists.types.stop, null, true);
          }

          if (this.order.type == COMMAND.UNIVERSAL) {
            if (this.universalOrder()) return;
          } else if (this.order.type == COMMAND.TELEPORT) {
            this.setValAndSync(
              "hitCycle",
              this.lastAttackingTick != ticksCounter - 1 ? 0 : this.hitCycle + 1
            );
            this.setValAndSync("lastAttackingTick", ticksCounter);

            // if we can launch this tick
            if (
              this.hitCycle >= this.order.getValue("castingDelay", this) &&
              ticksCounter >=
                this.lastTickAbilityUsed[this.order.id] + Math.max(this.order.cooldown, 1) + 1
            ) {
              // if the unit can hit this frame
              // check mana and gold again, and if not cool, abort
              if (
                this.mana < this.order.getValue("manaCost", this) ||
                this.owner.gold < this.order.goldCost
              ) {
                this.issueOrder(lists.types.stop, null, true);
                return;
              }

              var range = this.order.getValue("range", this);
              this.target = this.pos.addNormalizedVector(
                this.target,
                Math.min(range, this.pos.distanceTo2(this.target))
              );
              var targetField = this.target;

              // find target field
              var len = 0.02;
              var i = 0;
              while (
                (!this.type.couldStandAt(targetField) ||
                  game.unitAtPosWouldCollideWithUnits(
                    targetField,
                    this.type.radius,
                    null,
                    null,
                    true
                  ) ||
                  targetField.distanceTo2(this.pos) > range ||
                  !this.owner.team.canSeeField(targetField.x, targetField.y)) &&
                len < Math.min(20, range)
              ) {
                targetField = this.target.add(
                  new Field(angleOffsets[i][0], angleOffsets[i][1], true).normalize(len)
                );
                len += 0.02;
                i = (i + 1) % angleOffsets.length;
              }

              if (len >= Math.min(20, range)) targetField = this.pos;

              if (
                (PLAYING_PLAYER.team.canSeeField(targetField.x, targetField.y) ||
                  PLAYING_PLAYER.team.canSeeField(this.pos.x, this.pos.y)) &&
                this.order.launchSound &&
                (!this.order.playLaunchSoundOnce ||
                  ticksCounter >
                    this.lastTickAbilityUsed[this.order.id] + Math.max(this.order.cooldown, 1) + 2)
              )
                message +=
                  "playSnd$" +
                  this.order.launchSound +
                  "$1$" +
                  this.pos.px +
                  "$" +
                  this.pos.py +
                  "~";

              this.setArrayValAndSync("lastTickAbilityUsed", this.order.id, ticksCounter);
              this.setValAndSync("tickOfLastWeaponFired", ticksCounter);

              if (this.order.attackEffect) {
                message +=
                  "attEff$" +
                  this.order.attackEffect +
                  "$" +
                  this.id +
                  "$-1$" +
                  targetField.px +
                  "$" +
                  targetField.py +
                  "$" +
                  this.order.effectScale +
                  "~";
                message +=
                  "attEff$" +
                  this.order.attackEffect +
                  "$" +
                  this.id +
                  "$-1$" +
                  this.pos.px +
                  "$" +
                  this.pos.py +
                  "$" +
                  this.order.effectScale +
                  "~";
              }

              this.reposition(targetField, false, true);

              if (this.order.modifiersSelf) {
                var mod = this.order.getValue("modifiersSelf", this);
                if (mod) this.applyModifiers([mod], this);
              }

              this.issueOrder(lists.types.stop, null, true);
            }

            return true;
          } else if (this.order.type == COMMAND.MINE) {
            // if we carry gold, we are looking for a CC
            if (this.carriedGoldAmount) {
              // we have a path
              if (this.path.length > 0) {
                if (
                  this.targetUnit &&
                  this.distanceTo(this.targetUnit) < this.order.getValue("range", this)
                ) {
                  // if we have reached the cc
                  this.miningAmount++;

                  if (this.miningAmount >= 2) {
                    this.owner.modifyGold(this.carriedGoldAmount);
                    this.owner.setValAndSync(
                      "minedGold",
                      this.owner.minedGold + this.carriedGoldAmount
                    );
                    this.setValAndSync("carriedGoldAmount", 0);
                    this.miningAmount = 0;
                    this.setAndSyncPath([]);
                  }

                  return;
                }
              }

              // we need to calculate a path
              else {
                var nearestCC = game.getNextBuildingOfType(this.pos, this.owner, true, "takesGold");

                // we found the next CC
                if (nearestCC) {
                  rndRange = Math.min(2.5, nearestCC.type.size);
                  this.setAndSyncPath(
                    game.astar.getPath(
                      this.pos,
                      nearestCC.pos.add3(
                        ((ticksCounter / 3) % rndRange) - rndRange / 2,
                        (((ticksCounter + this.id) / 4) % rndRange) - rndRange / 2
                      ),
                      this.type,
                      nearestCC
                    )
                  );
                  this.setUnitAndSync("targetUnit", nearestCC);
                }

                // there seems to be no friendly cc anymore on the map, so order stop
                else this.issueOrder(lists.types.stop, null, true);
              }
            }

            // were looking for a Mine
            else {
              // we have a path
              if (this.path.length > 0 && this.targetUnit) {
                if (
                  this.targetUnit &&
                  this.distanceTo(this.targetUnit) < this.order.getValue("range", this)
                ) {
                  // if we have reached the mine
                  if (this.targetUnit.gold <= 0) this.issueOrder(lists.types.stop, null, true);
                  else this.targetUnit.workingWorkers.push(this);

                  return;
                }
              }

              // we need to calculate a path
              else {
                if (!this.goldMine)
                  this.goldMine = game.getNextBuildingOfType(
                    this.pos,
                    null,
                    false,
                    null,
                    lists.types.goldmine,
                    true
                  );

                if (this.goldMine) {
                  rndRange = Math.min(2.5, this.goldMine.type.size);
                  this.setAndSyncPath(
                    game.astar.getPath(
                      this.pos,
                      this.goldMine.pos.add3(
                        ((ticksCounter / 3) % rndRange) - rndRange / 2,
                        (((ticksCounter + this.id) / 4) % rndRange) - rndRange / 2
                      ),
                      this.type,
                      this.goldMine
                    )
                  );
                  this.setUnitAndSync("targetUnit", this.goldMine);
                }
              }
            }
          } else if (this.order.type == COMMAND.MAKEBUILDING) {
            if (this.makeBuildingUpdate()) return;
          }

          // attack
          else if (this.order.type == COMMAND.ATTACK || this.order.type == COMMAND.ATTACK_GROUND) {
            if (!this.type.commands.attack || this.disabledCommands.attack) {
              this.issueOrder(lists.types.stop, null, true);
              return;
            }

            // target unit is dead or non existant or invis
            if (
              this.order.type == COMMAND.ATTACK &&
              (!this.targetUnit ||
                !this.owner.team.canSeeUnitInvisible(this.targetUnit) ||
                (!this.targetUnit.isActive && this.targetUnit.type && this.targetUnit.type.isUnit))
            ) {
              if (this.lastAttackingTick + 10 < ticksCounter) {
                if (this.queueOrder.length > 0) {
                  this.issueOrder(this.queueOrder[0], this.queueTarget[0], true);
                  this.queueOrder.splice(0, 1);
                  this.queueTarget.splice(0, 1);
                  message += "killQEl$" + this.id + "$0~";
                } else this.issueOrder(lists.types.stop, null, true);
              }

              return;
            }

            // if this unit can hit target unit (rangewise)
            var dist = this.order.targetIsUnit
              ? this.distanceTo(this.targetUnit)
              : this.pos.distanceTo2(this.target) - 1;
            if (
              ((dist <= this.getValue("range") && dist >= this.getValue("minRange")) ||
                (this.order.type == COMMAND.ATTACK &&
                  this.targetUnit == this.targetLockingUnit &&
                  this.lastAttackingTick == ticksCounter - 1)) &&
              (!this.targetUnit || !this.targetUnit.type || this.hitscan(this.targetUnit))
            ) {
              // if target not attackable (for example it is flying, and were melee), then intern stop
              if (this.order.targetIsUnit && !this.canAttackUnit(this.targetUnit)) {
                this.issueOrder(lists.types.stop, null, true);
                return;
              }

              this.setValAndSync(
                "hitCycle",
                this.lastAttackingTick != ticksCounter - 1 ? 0 : this.hitCycle + 1
              );
              this.setValAndSync("lastAttackingTick", ticksCounter);

              // if new target lock has to be applied
              if (
                this.order.targetIsUnit &&
                dist <= this.getValue("range") &&
                dist >= this.getValue("minRange") &&
                ticksCounter - this.tickOfLastWeaponFired >=
                  this.getValue("weaponCooldown") - this.getValue("weaponDelay")
              )
                this.targetLockingUnit = this.targetUnit;

              // if the unit can hit this tick
              if (
                this.hitCycle >= this.getValue("weaponDelay") &&
                ticksCounter >= this.tickOfLastWeaponFired + this.getValue("weaponCooldown")
              ) {
                this.setValAndSync("tickOfLastWeaponFired", ticksCounter);
                this.setArrayValAndSync("lastTickAbilityUsed", this.order.id, ticksCounter);

                if (this.order.type == COMMAND.ATTACK) this.performHit(this.targetUnit);
                else this.performRangedHit(this.order.targetIsUnit ? this.targetUnit : this.target);

                this.targetLockingUnit = null;

                this.setValAndSync("mana", this.mana - this.order.getValue("manaCost", this));
                this.owner.modifyGold(-this.order.goldCost);
              }

              this.blocking = true; // unit is attacking, so its not pushable

              return;
            }

            // unit has a min range and dist is lower that the min range, return, because we dont wanna move any closer
            else if (dist < this.getValue("minRange")) {
              if (this.order.type == COMMAND.ATTACK_GROUND)
                // if attack ground, then intern stop
                this.issueOrder(lists.types.stop, null, true);

              return;
            }

            // path needs to be recalculated (either it has not been calculated yet or target unit has moved)
            if (
              this.path.length == 0 ||
              (this.targetUnit && this.path[0].distanceTo2(this.targetUnit.pos) > 1)
            ) {
              var newPath = game.astar.getPath(
                this.pos,
                this.order.targetIsUnit ? this.targetUnit.pos : this.target,
                this.type,
                this.targetUnit
              );

              if (newPath && newPath[0] && newPath[0].distanceTo2(this.pos) > 0.1)
                this.setAndSyncPath(newPath);
              // were already as close to the target as possible, intern stop
              else this.issueOrder(lists.types.stop, null, true);
            }
          }

          // a move / idle / hold position
          else if (
            this.order.type == COMMAND.AMOVE ||
            this.order.type == COMMAND.IDLE ||
            this.order.type == COMMAND.HOLDPOSITION ||
            (this.order.type == COMMAND.MOVE && this.getValue("shootWhileMoving"))
          ) {
            var range = this.getValue("range");
            var minRange = this.getValue("minRange");

            if (this.order.type == COMMAND.HOLDPOSITION) this.blocking = true;

            // idle workers dont attack on their own
            if (
              (this.getValue("isPassive") && this.order.type == COMMAND.IDLE) ||
              !this.autoAttackAIEnabled() ||
              (this.targetUnit && !this.owner.team.canSeeUnitInvisible(this.targetUnit))
            )
              this.setUnitAndSync("targetUnit", null);
            // look for best target
            else if (this.nextTickToCheckForNextEnemyUnit <= ticksCounter) {
              var prio =
                this.targetUnit &&
                this.distanceTo(this.targetUnit) <= range &&
                this.hitscan(this.targetUnit)
                  ? this.targetUnit.getAttackPrio()
                  : 0;
              var newTarget = game.getHighestPrioEnemyUnitInRange(
                this,
                this.order.type == COMMAND.HOLDPOSITION ? range : Math.max(this.type.vision, range),
                minRange,
                prio
              );

              if (newTarget) this.setUnitAndSync("targetUnit", newTarget);

              this.nextTickToCheckForNextEnemyUnit = ticksCounter + 10;
            }

            if (!this.type.commands.attack || this.disabledCommands.attack)
              this.setUnitAndSync("targetUnit", null);

            // if this unit can hit target unit (rangewise)
            var dist = this.targetUnit ? this.distanceTo(this.targetUnit) : 0;
            var canHitRangewise = dist <= range && dist >= minRange;

            if (
              this.targetUnit &&
              ((this.targetUnit == this.targetLockingUnit &&
                this.lastAttackingTick == ticksCounter - 1) ||
                canHitRangewise) &&
              this.type.commands.attack &&
              this.hitscan(this.targetUnit)
            ) {
              // if target not attackable (for example it is flying, and were melee), then intern stop
              if (!this.canAttackUnit(this.targetUnit)) {
                this.issueOrder(lists.types.stop, null, true);
                return;
              }

              this.setValAndSync(
                "hitCycle",
                this.lastAttackingTick != ticksCounter - 1 ? 0 : this.hitCycle + 1
              );
              this.setValAndSync("lastAttackingTick", ticksCounter);

              // if new target lock has to be applied
              if (
                canHitRangewise &&
                ticksCounter - this.tickOfLastWeaponFired >=
                  this.getValue("weaponCooldown") - this.getValue("weaponDelay")
              )
                this.targetLockingUnit = this.targetUnit;

              // if the unit can hit this tick
              if (
                this.hitCycle >= this.getValue("weaponDelay") &&
                ticksCounter >= this.tickOfLastWeaponFired + this.getValue("weaponCooldown")
              ) {
                this.setValAndSync("tickOfLastWeaponFired", ticksCounter);
                this.performHit(this.targetUnit);
                this.targetLockingUnit = null;
              }

              if (!this.getValue("shootWhileMoving")) {
                this.blocking = true; // unit is attacking, so its not pushable
                return;
              }
            }

            // if enemy in vision but no or wrong path to it, calculate new path (only if no hold position)
            if (
              this.targetUnit &&
              this.order.type != COMMAND.HOLDPOSITION &&
              (this.path.length == 0 || this.path[0].distanceTo2(this.targetUnit.pos) > 1) &&
              dist > minRange
            ) {
              // is enemy in range and order was idle, issue amove cmd to this current position, so unit comes back after attacking
              if (this.order.type == COMMAND.IDLE) {
                this.order = lists.types.amove;
                this.setOrderAndSync("order", lists.types.amove);
                this.setPosAndSync("target", this.pos.getCopy());
              }

              if (!this.getValue("shootWhileMoving")) {
                this.setAndSyncPath(
                  game.astar.getPath(
                    this.pos,
                    this.targetUnit.pos,
                    this.type,
                    this.targetUnit.type.isBuilding ? this.targetUnit : null
                  )
                );
              }
            }

            // if no enemy unit in vision range and no path to target is set
            if (
              this.order.type == COMMAND.AMOVE &&
              this.target &&
              (!this.targetUnit ||
                this.getValue("shootWhileMoving") ||
                this.distanceTo(this.targetUnit) > this.type.vision) &&
              (this.path.length == 0 || !this.path[0].equals(this.target))
            ) {
              this.setAndSyncPath(
                game.astar.getPath(this.pos, this.target, this.type),
                this.target
              );
              this.setPosAndSync("target", this.path[0] ? this.path[0].getCopy() : null); // set new target, because if target not reachable, replace it with nearest reachable point
            }

            // if reached tolercance zone and no target unit in sight, stop
            if (
              (!this.targetUnit || this.distanceTo(this.targetUnit) > this.type.vision) &&
              this.pos.distanceTo2(this.path[0]) < this.tolerance
            )
              this.issueOrder(lists.types.stop, null, true);
          }

          // Drop
          else if (this.order.type == COMMAND.UNLOAD) {
            if (this.asyncDrop) {
              this.dropAUnit();

              if (this.cargo.length == 0) this.setOrderAndSync("order", lists.types.move);
            } else {
              if (!this.hasPath()) {
                this.dropAUnit();

                if (this.cargo.length == 0) this.issueOrder(lists.types.stop, null, true);
              }
            }
          }

          // move
          if (
            this.path.length > 0 &&
            (this.getValue("shootWhileMoving") ||
              this.tickOfLastWeaponFired + 8 < ticksCounter ||
              (this.order.type != COMMAND.AMOVE &&
                this.order.type != COMMAND.ATTACK &&
                this.order.type != COMMAND.IDLE))
          ) {
            // if the next node is undefined or null, kill it (this can happen due to a bug, i couldnt find yet. So this at least prevents the client from crashing)
            while (!this.path[this.path.length - 1]) this.path.pop();

            var vec_to_next_node = this.pos.vectorTo(this.path[this.path.length - 1]);
            var dist = vec_to_next_node.getLen();

            // if unit can reach next node this tick, remove this node
            if (dist <= Math.max(this.getValue("movementSpeed"), 0)) this.path.pop();

            if (dist > 0) {
              // push2 -> move the unit while pushing colliding units away; returns the block state; depending on the block state (not blocked, blocked by units, blocked by static obj.)
              var blockState = BLOCK_STATE.UNBLOCKED;
              if (this.doesntCollideWithBuildings())
                this.pos = this.pos.add(
                  vec_to_next_node.normalize(Math.min(this.getValue("movementSpeed"), dist))
                );
              else
                var blockState = this.push2(
                  null,
                  this.pos.add(
                    vec_to_next_node.normalize(Math.min(this.getValue("movementSpeed"), dist))
                  )
                );

              // check if unit would collide with a blocking unit soon
              var willBeBlocked = false;
              var checkPos = null;
              if (
                blockState == BLOCK_STATE.UNBLOCKED &&
                this.path.length > 0 &&
                this.pos.distanceTo2(this.path[this.path.length - 1]) > 1 &&
                !this.type.flying
              ) {
                var checkPos = this.pos.addNormalizedVector(this.path[this.path.length - 1], 1);
                if (
                  !this.targetUnit ||
                  !this.targetUnit.isAlive ||
                  !this.targetUnit.type.isUnit ||
                  checkPos.distanceTo2(this.targetUnit.pos) >
                    this.type.radius + this.targetUnit.type.radius
                ) {
                  if (
                    this.collides() &&
                    game.unitAtPosWouldCollideWithUnits(
                      checkPos,
                      this.type.radius,
                      this.owner,
                      this.targetUnit
                    )
                  )
                    willBeBlocked = true;
                }
              }

              // if units are blocking, search a path around em
              if (
                (willBeBlocked ||
                  (blockState == BLOCK_STATE.BLOCKED_BY_UNITS && this.path.length > 0)) &&
                this.lastTickPathRecalculated + 20 < ticksCounter
              ) {
                this.lastTickPathRecalculated = ticksCounter;

                // remove target unit while searching path, so it doesnt block the path
                if (this.targetUnit && this.targetUnit.isAlive)
                  this.targetUnit.switchBlocking(false);

                checkPos = blockState != BLOCK_STATE.BLOCKED_BY_UNITS ? checkPos : this.pos;
                var path = [[checkPos], [checkPos]];
                while (
                  this.path.length > 1 &&
                  this.pos.distanceTo2(this.path[this.path.length - 1]) < 5
                )
                  this.path.pop();

                // a lot of magic happens here; basically we search a path around some blocking (not pushable) units
                for (var i = 0; i <= 1; i++) {
                  var p = path[i];

                  var startNode = checkPos;
                  var targetNode = this.path[this.path.length - 1];

                  var v1 = [targetNode.px - startNode.px, targetNode.py - startNode.py];
                  var v2 = [(targetNode.py - startNode.py) * -1, targetNode.px - startNode.px];

                  while (
                    p.length < 30 &&
                    !startNode.raytrace(
                      targetNode,
                      this.type.radius,
                      true,
                      this.owner,
                      this.targetUnit
                    )
                  ) {
                    var counter = 0;
                    var a = 0;

                    var nextNode = startNode.add(
                      new Field(
                        v1[0] * checkAngles[0][0] + v2[0] * checkAngles[0][1],
                        v1[1] * checkAngles[0][0] + v2[1] * checkAngles[0][1]
                      ).normalize(0.5)
                    );

                    while (
                      this.type.couldStandAt(nextNode) &&
                      !game.unitAtPosWouldCollideWithUnits(
                        nextNode,
                        this.type.radius,
                        this.owner,
                        this.targetUnit
                      ) &&
                      counter < 16
                    ) {
                      counter++;
                      a = i == 0 ? a + 1 : a - 1;
                      if (a < 0) a += 16;
                      nextNode = startNode.add(
                        new Field(
                          v1[0] * checkAngles[a % 16][0] + v2[0] * checkAngles[a % 16][1],
                          v1[1] * checkAngles[a % 16][0] + v2[1] * checkAngles[a % 16][1]
                        ).normalize(0.5)
                      );
                    }

                    while (
                      (!this.type.couldStandAt(nextNode) ||
                        game.unitAtPosWouldCollideWithUnits(
                          nextNode,
                          this.type.radius,
                          this.owner,
                          this.targetUnit
                        )) &&
                      counter < 16
                    ) {
                      counter++;
                      a = i == 0 ? a + 1 : a - 1;
                      if (a < 0) a += 16;
                      nextNode = startNode.add(
                        new Field(
                          v1[0] * checkAngles[a % 16][0] + v2[0] * checkAngles[a % 16][1],
                          v1[1] * checkAngles[a % 16][0] + v2[1] * checkAngles[a % 16][1]
                        ).normalize(0.5)
                      );
                    }

                    p.push(nextNode);
                    startNode = nextNode;
                  }
                }

                // if we removed target unit earlier, we have to put it back now
                if (this.targetUnit && this.targetUnit.isAlive)
                  this.targetUnit.switchBlocking(true);

                var bestPath =
                  getLenOfPath(this.pos, path[0]) < getLenOfPath(this.pos, path[1])
                    ? path[0]
                    : path[1];
                for (i = bestPath.length - 1; i > 0; i--) this.path.push(bestPath[i]);

                // self.postMessage("printPath$" + JSON.stringify(this.path.concat([this.pos])));

                // path smoothing
                var exactStart = this.path[this.path.length - 1];
                var index = this.path.length - 2; // highest Field, that has to be checked
                while (index >= 0) {
                  if (
                    exactStart.raytrace(
                      this.path[index],
                      this.type.radius,
                      true,
                      this.owner,
                      this.targetUnit
                    )
                  )
                    this.path.splice(index + 1, 1);
                  else exactStart = this.path[index + 1];
                  index--;
                }
              }

              // if not just done and blocked by static objects, recalculate path
              if (
                blockState == BLOCK_STATE.BLOCKED_BY_STATIC_OBJECTS &&
                this.lastTickPathRecalculated + 20 < ticksCounter &&
                this.path.length > 0
              ) {
                this.lastTickPathRecalculated = ticksCounter;
                if (this.path.length > 2) {
                  var newPath = game.astar.getPath(
                    this.pos,
                    this.path[this.path.length - 2],
                    this.type,
                    this.targetUnit
                  );
                  this.path.splice(this.path.length - 2, 2);
                  this.path = this.path.concat(newPath);
                } else
                  this.setAndSyncPath(
                    game.astar.getPath(this.pos, this.path[0], this.type, this.targetUnit),
                    this.path[0]
                  );
              }
            }

            // if reached tolercance zone, stop
            if (
              this.order.type == COMMAND.MOVE &&
              this.pos.distanceTo2(this.path[0]) < this.tolerance
            )
              this.issueOrder(lists.types.stop, null, true);
          }

          // no more waypoints -> stop
          if (
            this.path.length == 0 &&
            this.order.type != COMMAND.HOLDPOSITION &&
            this.order.type != COMMAND.UNLOAD
          )
            this.setOrderAndSync("order", lists.types.stop);

          // no orders, but orders in queue, issue first order from queue
          if (this.order.type == COMMAND.IDLE && this.queueOrder.length > 0) {
            this.issueOrder(this.queueOrder[0], this.queueTarget[0], true);
            this.queueOrder.splice(0, 1);
            this.queueTarget.splice(0, 1);
            message += "killQEl$" + this.id + "$0~";
          }
        };

        Unit.prototype.reposition = function (newPos, noSpawnBucket, beam) {
          game.unitDieBucket(this, this.lastTicksPosition.x, this.lastTicksPosition.y);
          var oldPos = this.pos;
          this.pos = newPos;
          this.lastTicksPosition = this.pos;
          this.lastFramePos1 = this.pos;
          this.lastFramePos2 = this.pos;
          this.owner.team.updateVisionUnitDie(this, oldPos);
          this.owner.team.updateVisionUnitSpawn(this);
          if (beam) message += "beamUnit$" + this.id + "$" + this.pos.px + "$" + this.pos.py + "~";
          if (!noSpawnBucket) game.unitSpawnBucket(this, this.pos.x, this.pos.y);
        };
        Building.prototype = new MapObject();
        function Building(data) {
          this.waypoint = [];

          _.extend(this, data);

          if (this.type.alwaysNeutral) this.owner = game.players[0];

          this.isUnderConstruction = this.buildFirst ? true : false;
          this.buildTicksLeft = 0; // when under construction, when will it finish
          this.seenBy = new Array(MAX_PLAYERS + 1); // contains a value, determing in which state this building has been seen by player [index] the last time he saw it
          this.seenByAsBuildingType = new Array(MAX_PLAYERS + 1); // buildings can transform, so here the building type is stored in which this building has been seen by player [index]
          this.vision = this.buildFirst ? 3 : this.type.vision;
          this.order = lists.types.stop;
          this.state = BUILDING_STATE.NORMAL;
          this.hasBeenCancelled = false;
          this.lastRepairedTick = -1;
          this.timesRepairedThisTick = 0;

          // neutral buildings are always seen by all players
          if (this.owner.controller == CONTROLLER.NONE)
            for (var i = 0; i < this.seenBy.length; i++) this.seenBy[i] = BUILDING_STATE.NORMAL;

          // team 0 always sees everything
          if (game_state == GAME.EDITOR) this.seenBy[0] = BUILDING_STATE.NORMAL;

          // making units stuff
          this.queue = []; // references to the unit types that are in production

          this.pos = new Field(
            this.x - 1 + this.type.size / 2,
            this.y - 1 + this.type.size / 2,
            true
          ); // = center

          // in case of gold mine, store gold value
          if (this.type.startGold) this.gold = this.type.startGold;

          if (this.type.lifetime) this.lifetime = this.type.lifetime;

          game.buildings.push(this);
          game.buildings2.push(this);
          this.switchBlocking(true, this.dontRefreshNBs); // mark the fields in the grid as blocked
          this.owner.team.updateVisionUnitSpawn(this);
          this.id = game.global_id++; // ids are used to identify the building in network games
          this.autocast = this.initAutocast(); // ids of abilities that are on autocast
          this.tickOfCreation = ticksCounter;
          this.lastWorkerCount = 0;
          this.pseudoBuildings = []; // if building orders queued, store pseudo objects of buildings here

          this.abilityLevels = new Array(game.commands.length);
          this.lastTickAbilityUsed = new Array(game.commands.length);
          for (var i = 0; i < game.commands.length; i++) {
            this.lastTickAbilityUsed[i] = -9999;
            this.abilityLevels[i] =
              game.commands[i] &&
              game.commands[i].requiredLevels &&
              game.commands[i].requiredLevels.length > 0
                ? 0
                : 1;
          }

          this.targetsQueue = [];
          this.workingWorkers = [];
          this.modifiers = [];
          this.modifiersSelf = [];
          this.modifierMods = {};
          this.disabledCommands = {};

          message +=
            "creaB$" +
            this.type.name +
            "$" +
            this.x +
            "$" +
            this.y +
            "$" +
            this.owner.number +
            "$" +
            (this.buildFirst ? "1" : "0") +
            "~";

          this.syncWaypoint();

          // init modifiers
          if (this.type.spawnModifiers && this.type.spawnModifiers.length > 0)
            this.applyModifiers(this.type.spawnModifiers, this);

          this.initHPAndMana();

          // if building is beeing constructed (when made in game and not on map load)
          if (this.buildFirst) {
            this.buildTicksLeft = this.getValue("buildTime");
            this.hp *= BUILDING_START_HP_PERCENTAGE;
            this.state = BUILDING_STATE.UNDER_CONSTRUCTION;

            game.refreshAreaMapFromBuilding(this);
          } else this.owner.modifySupply(this.type.supplyProvided);

          this.owner.updateGlobalVariables();
        }

        Building.prototype.refreshState = function () {
          if (!this.isAlive) this.state = BUILDING_STATE.DEAD;
          else if (this.isUnderConstruction) this.state = BUILDING_STATE.UNDER_CONSTRUCTION;
          else if (this.queue && this.queue[0] && this.queue[0].isBuilding)
            this.state =
              this.hp > this.type.hp * 0.25
                ? BUILDING_STATE.UPGRADING
                : BUILDING_STATE.UPGRADING_DAMAGED;
          else if (this.hp > this.type.hp * 0.25 && this.queue && this.queue[0])
            this.state = BUILDING_STATE.BUSY;
          else if (this.hp > this.type.hp * 0.25)
            this.state =
              this.type.startGold && !this.gold ? BUILDING_STATE.EMPTY : BUILDING_STATE.NORMAL;
          else if (this.queue && this.queue[0]) this.state = BUILDING_STATE.BUSY_DAMAGED;
          else this.state = BUILDING_STATE.DAMAGED;
        };

        Building.prototype.isReachableFromPos = function (pos, x2) {
          const fields = x2 ? game.fields2x2 : game.fields;
          const areaCode = fields[pos.x]?.[pos.y]?.areaCode ?? -1;

          if (areaCode == -1) return false;

          for (let x = this.x; x < this.x + this.type.sizeX; x++) {
            if (fields[x] && fields[x][this.y - 1] && fields[x][this.y - 1].areaCode == areaCode)
              return true;
          }

          for (let x = this.x; x < this.x + this.type.sizeX; x++) {
            if (
              fields[x] &&
              fields[x][this.y + this.type.sizeY] &&
              fields[x][this.y + this.type.sizeY].areaCode == areaCode
            )
              return true;
          }

          for (let y = this.y; y < this.y + this.type.sizeY; y++) {
            if (
              fields[this.x - 1] &&
              fields[this.x - 1][y] &&
              fields[this.x - 1][y].areaCode == areaCode
            )
              return true;
          }

          for (let y = this.y; y < this.y + this.type.sizeY; y++) {
            if (
              fields[this.x + this.type.sizeX] &&
              fields[this.x + this.type.sizeX][y] &&
              fields[this.x + this.type.sizeX][y].areaCode == areaCode
            )
              return true;
          }

          return false;
        };

        Building.prototype.getRepaired = function (byUnit) {
          var maxHP = this.getValue("hp");
          var maxUnitsToRepair = this.getValue("maxUnitsToRepair");

          if (this.isUnderConstruction) {
            // if the building has not been constructed yet this tick
            if (
              maxUnitsToRepair > 0 &&
              (this.lastRepairedTick != ticksCounter ||
                this.timesRepairedThisTick < maxUnitsToRepair)
            ) {
              this.timesRepairedThisTick =
                this.lastRepairedTick == ticksCounter ? this.timesRepairedThisTick + 1 : 1;
              this.setValAndSync("lastRepairedTick", ticksCounter);
              this.setValAndSync(
                "hp",
                Math.min(
                  this.hp +
                    (maxHP - maxHP * BUILDING_START_HP_PERCENTAGE) / this.getValue("buildTime"),
                  maxHP
                )
              );
              this.setValAndSync("buildTicksLeft", this.buildTicksLeft - 1);
            } else byUnit.issueOrder(lists.types.stop, null, true);

            // if construction finishing this frame
            if (this.buildTicksLeft <= 0) {
              // give an additional 3 hp, so we reach 100% for sure (sometimes its not, because of rouding errors)
              this.setValAndSync("hp", Math.min(this.hp + 3, maxHP));

              if (this.owner == PLAYING_PLAYER) {
                message += "playSnd$" + SOUND.BUILDING_FINISHED + "$0.8~";
                message += "addMsg$Construction finished (" + this.type.name + ")$#34DA34$hammer~";
                message += "massSmk$" + this.id + "~";
              }

              this.setValAndSync("isUnderConstruction", false);

              this.owner.modifySupply(this.type.supplyProvided);

              message += "cclB$" + this.id + "~";

              // refresh vision
              this.setValAndSync("vision", this.type.vision);
              this.owner.team.updateVisionUnitSpawn(this);

              // when a building has finished, game needs to check global variables like max supply and tech conditions, because they might have changed
              game.updateGlobalPlayerVariables();

              // order intern stop to constructing worker
              byUnit.issueOrder(lists.types.stop, null, true);
            }
          } else {
            var repairRate = byUnit.getValue("repairRate");
            var repairCost = byUnit.getValue("repairCost");

            if (
              repairRate &&
              repairRate > 0 &&
              byUnit.owner.gold >= repairCost &&
              maxUnitsToRepair > 0 &&
              (this.lastRepairedTick != ticksCounter ||
                this.timesRepairedThisTick < maxUnitsToRepair)
            ) {
              this.timesRepairedThisTick =
                this.lastRepairedTick == ticksCounter ? this.timesRepairedThisTick + 1 : 1;
              this.setValAndSync("lastRepairedTick", ticksCounter);
              byUnit.owner.modifyGold(-repairCost);
              this.setValAndSync("hp", Math.min(maxHP, this.hp + repairRate));
            } else byUnit.issueOrder(lists.types.stop, null, true);
          }
        };

        // issue an order to this building
        Building.prototype.issueOrder = function (order, target, intern, shift) {
          if (order.type == COMMAND.MOVETO) order = lists.types.repair;

          if (!this.canIssueOrder(order, target) && order.type != COMMAND.CANCEL) {
            // if not enough mana or cmd is disabled, order stop and get the fuck outta here
            this.setOrderAndSync("order", lists.types.stop);
            return;
          }

          if (order.type == COMMAND.ATTACK && this.canAttackUnit(target)) {
            if (shift) {
              if (this.targetsQueue.length < 10) {
                this.targetsQueue.push(target);
                message += "bldQPsh$" + this.id + "$" + target.id + "~";
              }
            } else {
              this.setUnitAndSync("targetUnit", target);
              message += "bldQKill$" + this.id + "~";
              this.targetsQueue = [];
            }
          } else if (order.type == COMMAND.IDLE) {
            this.setValAndSync("targetUnit", null);
            this.setOrderAndSync("order", lists.types.stop);
          } else if (order.type == COMMAND.CANCEL) {
            // if building was under construction, cancel the construction
            if (this.isUnderConstruction && !this.hasBeenCancelled) {
              message += "massSmk$" + this.id + "~";
              message += "cclB$" + this.id + "~";

              this.hasBeenCancelled = true;
              this.owner.modifyGold(this.initialCost * 0.75); // refund a certain amount of the money
              this.owner.setValAndSync("supply", this.owner.supply - this.type.supply);
              this.remove();
              this.setValAndSync("isAlive", false);
            }

            // if a unit was in the making, cancel this unit
            else if (this.queue[0]) this.cancelQueueElement();
          } else if (order.type == COMMAND.MAKEBUILDING) {
            var buildingType = order.unitType;

            if (!buildingType) return;

            var range = buildingType.radius + order.getValue("range", this);
            var cost = this.owner.getCostOfNextInstanceForBuilding(buildingType);

            if (!target || this.pos.distanceTo2(target) > range) {
              if (this.owner == PLAYING_PLAYER) {
                message += "addMsg$Out of range$red$attentionmark~";
                message += "playSnd$" + SOUND.NEGATIVE + "$0.6~";
              }
              return;
            }

            if (
              this.owner.gold >= cost &&
              buildingType.isBuilding &&
              (!buildingType.supply ||
                buildingType.supply <= this.owner.maxSupply - this.owner.supply)
            ) {
              this.owner.modifyGold(-cost);
              this.owner.setValAndSync("supply", this.owner.supply + buildingType.supply);
              var id = game.pseudoBuildingsId++;
              this.pseudoBuildings.push({
                id: id,
                cost: cost,
                type: buildingType,
              });
              this.setPosAndSync("target", target);
              this.setOrderAndSync("order", order);

              if (this.owner == PLAYING_PLAYER)
                message +=
                  "crtPsdBld$" +
                  id +
                  "$" +
                  target.x +
                  "$" +
                  target.y +
                  "$" +
                  this.owner.number +
                  "$" +
                  buildingType.name +
                  "~";

              this.owner.updateGlobalVariables();
            }
          } else if (order.type == COMMAND.REPAIR) {
            this.setPosAndSync("targetUnit", target);
            this.setOrderAndSync("order", order);
          } else if (order.type == COMMAND.UNIVERSAL) {
            this.setOrderAndSync("order", order);
            this.setValAndSync("hitCycle", -1);

            if (order.targetIsPoint) this.setPosAndSync("target", target);
            else if (order.targetIsUnit) this.setUnitAndSync("targetUnit", target);
          }
        };

        Building.prototype.distanceTo = function (otherUnit) {
          return (
            this.type.distanceToPotentialBuilding(otherUnit.pos, this) -
            (otherUnit.type.isUnit ? otherUnit.type.radius : otherUnit.type.size / 2)
          );
        };

        Building.prototype.distanceToPos = function (pos) {
          return this.type.distanceToPotentialBuilding(pos, this);
        };

        // gets calles every tick
        Building.prototype.update = function () {
          this.updateModifiers();

          if (!this.isUnderConstruction) {
            this.mapObjectUpdate();
            this.queueUpdate();
            this.handleAutocast();

            if (this.order.type == COMMAND.UNIVERSAL) this.universalOrder();
            else if (this.order.type == COMMAND.MAKEBUILDING) this.makeBuildingUpdate();

            // if moveto / repair and the unit has reached the target
            if (this.order.type == COMMAND.REPAIR) {
              if (
                !this.targetUnit ||
                !this.targetUnit.isActive ||
                this.targetUnit == this ||
                !this.owner.team.canSeeUnitInvisible(this.targetUnit)
              ) {
                this.issueOrder(lists.types.stop, null, true);
                return;
              }

              var distance = this.distanceTo(this.targetUnit);
              var repairOrConstruct = false;
              var dontStop = false;

              // repair
              if (
                this.targetUnit.canBeRepaired() &&
                this.getValue("repairRate") &&
                this.type.commands.repair &&
                !this.disabledCommands.repair &&
                this.targetUnit.hp < this.targetUnit.type.hp &&
                this.owner.gold >= 0.05 &&
                distance <= lists.types.repair.getValue("range", this) + 0.25
              )
                repairOrConstruct = true;
              // construct
              else if (this.targetUnit.isUnderConstruction) {
                var cmd = this.getCmd2ConstructBuilding(this.targetUnit.type);
                if (cmd && distance <= cmd.getValue("range", this) + 0.25) repairOrConstruct = true;
              }

              if (repairOrConstruct) {
                this.blocking = true; // while repairing, the unit can not be pushed
                this.targetUnit.getRepaired(this);
                this.setOrderAndSync("order", lists.types.repair);
                this.setValAndSync("hitCycle", this.hitCycle + 1);

                // repair sound
                if (
                  this.hitCycle % this.type.weaponCooldown == 2 &&
                  PLAYING_PLAYER.team.canSeeUnit(this)
                )
                  message +=
                    "playSnd$" + SOUND.REPAIR + "$0.9$" + this.pos.px + "$" + this.pos.py + "~";
              } else this.issueOrder(lists.types.stop, null, true);
            }

            // if this unit can attack
            else if (this.type.commands.attack) {
              var range = this.getValue("range");

              if (
                this.targetUnit &&
                this.targetUnit.distanceTo(this) <= range &&
                this.targetUnit.isActive &&
                this.owner.team.canSeeUnitInvisible(this.targetUnit)
              )
                this.provisionalTargetUnit = this.targetUnit;
              else {
                if (this.targetUnit) this.setValAndSync("targetUnit", null);

                if (this.targetsQueue.length > 0) {
                  this.setUnitAndSync("targetUnit", this.targetsQueue[0]);
                  this.targetsQueue.splice(0, 1);
                  message += "splTrgQ$" + this.id + "$0~";
                }
              }

              // we have to check for a new target ?
              if (!this.targetUnit && this.nextTickToCheckForNextEnemyUnit <= ticksCounter) {
                this.provisionalTargetUnit = game.getHighestPrioEnemyUnitInRange(
                  this,
                  range,
                  this.getValue("minRange")
                );
                this.nextTickToCheckForNextEnemyUnit = this.provisionalTargetUnit
                  ? ticksCounter + this.getValue("weaponCooldown") - this.hitCycle
                  : ticksCounter + 10;
              }

              // if we have a target
              if (this.provisionalTargetUnit) {
                this.setValAndSync("hitCycle", (this.hitCycle + 1) % this.type.weaponCooldown);
                if (this.hitCycle == Math.floor(this.getValue("weaponDelay")))
                  // if the unit can hit this frame
                  this.performHit(this.provisionalTargetUnit);
              } else this.setValAndSync("hitCycle", 0);
            }

            if (this.workingWorkers && this.workingWorkers.length > 0) {
              var sortedWorkers = _.sortBy(this.workingWorkers, function (w) {
                return -w.miningAmount;
              });

              for (var i = 0; i < sortedWorkers.length && i < this.getValue("maxWorkers"); i++) {
                var w = sortedWorkers[i];

                w.miningAmount += Math.max(
                  Math.pow(this.getValue("miningEfficiencyCoefficient"), i),
                  this.getValue("minMiningRate")
                );
                w.setValAndSync("lastMiningTick", ticksCounter);
                w.setValAndSync("hitCycle", w.hitCycle + 1);

                // repair sound
                if (w.hitCycle % w.type.weaponCooldown == 2 && PLAYING_PLAYER.team.canSeeUnit(w))
                  message += "playSnd$" + SOUND.MINE + "$0.65$" + w.pos.px + "$" + w.pos.py + "~";
              }

              for (var i = 0; i < sortedWorkers.length; i++) {
                var w = sortedWorkers[i];

                if (w.miningAmount >= this.getValue("timeToMine")) {
                  w.setAndSyncPath([]);
                  w.miningAmount = 0;
                  w.setValAndSync("carriedGoldAmount", this.getValue("goldPerDelivery"));
                  this.setValAndSync(
                    "gold",
                    Math.max(this.gold - this.getValue("goldPerDelivery"), 0)
                  ); // lower the remaining gold

                  if (this.gold <= 0) {
                    this.workingWorkers = [];

                    if (w.owner == PLAYING_PLAYER) {
                      message += "addMsg$Goldmine is depleted$yellow$attentionmarkYellow~";
                      message += "playSnd$" + SOUND.NEGATIVE + "$0.6~";
                    }
                  }
                }
              }
            }

            // Goldmine workload calculation
            if (this.gold) {
              var workerCount = 0;
              for (var i = 0; i < this.workingWorkers.length; i++)
                if (
                  this.workingWorkers[i].owner == PLAYING_PLAYER ||
                  PLAYING_PLAYER.controller == CONTROLLER.SPECTATOR
                )
                  workerCount++;

              if (workerCount != this.lastWorkerCount) goldmineUpdate[this.id] = workerCount;

              this.workingWorkers = [];
              this.lastWorkerCount = workerCount;
            }
          }
        };
        var BLOCK_STATE = Object.freeze({
          UNBLOCKED: 0,
          BLOCKED_BY_UNITS: 1,
          BLOCKED_BY_STATIC_OBJECTS: 2,
        });

        KEY = Object.freeze({});

        var GAME = Object.freeze({
          LOGIN: 0,
          REGISTER: 1,
          PLAYING: 3,
          SKIRMISH: 4,
          EDITOR: 5,
          LOBBY: 6,
          RECOVERY: 8,
          ACCEPT_AGB: 9,
        });

        function updateGameLogic() {
          var startTime = Date.now();

          // check if its time to calculate the next game tick
          if (
            (game_state == GAME.PLAYING || game_state == GAME.EDITOR) &&
            !game_paused &&
            (!network_game || incomingOrders[ticksCounter]) &&
            (!game.replay_mode || game.replayTicksCounter >= ticksCounter)
          ) {
            timeOfLastUpdate = startTime;

            if (game.replay_mode) {
              // display "replay complete" msg, when its a replay and its complete
              if (ticksCounter + 1 == game.replayTicksCounter) {
                self.postMessage("addMsg$Replay complete$yellow");
                self.postMessage("playSnd$" + SOUND.POSITIVE);
              }
            }

            // load orders from this tick
            var orders = incomingOrders[ticksCounter] ? incomingOrders[ticksCounter] : [];

            // player lefts
            if (playerLefts[ticksCounter])
              for (var j = 0; j < playerLefts[ticksCounter].length; j++) {
                var player = game.getPlayerWithIndex(playerLefts[ticksCounter][j]);
                if (player.number > 0) {
                  // check, if theres another player in this team, if yes, give him all the units, if not, kill them
                  var unitsGivenToAlly = false;
                  if (player.team.number > 0)
                    for (var i = 0; i < game.players.length; i++)
                      if (
                        game.players[i] &&
                        game.players[i].isAlive &&
                        i != player.number &&
                        player.team == game.players[i].team
                      ) {
                        // supply
                        var newSupply = parseInt(game.getMaxSupply() / 2);
                        game.players[i].supplyCap += newSupply;

                        game.players[i].setValAndSync(
                          "supply",
                          game.players[i].supply + player.supply
                        );

                        // change ownership of all units / buildings
                        var units = game.units2.concat(game.buildings);
                        for (var k = 0; k < units.length; k++)
                          if (units[k].owner == player) {
                            units[k].owner = game.players[i];
                            game.players[i].modifySupply(units[k].type.supplyProvided);
                            message += "chOwn$" + units[k].id + "$" + i + "~";
                          }

                        // gold
                        var gold_ = player.gold;
                        game.players[i].modifyGold(gold_);
                        player.modifyGold(gold_);

                        game.players[i].updateGlobalVariables();

                        unitsGivenToAlly = true;
                        game.checkIfGameHasEnded();

                        message +=
                          "addMsg$All units and buildings of " +
                          player.name +
                          " are now under " +
                          (game.players[i].name == networkPlayerName
                            ? "your control!"
                            : "the control of " + game.players[i].name) +
                          "$yellow$attentionmarkYellow~";

                        if (game.players[i].name == networkPlayerName)
                          message +=
                            "addMsg$Your max supply cap has been raised by " +
                            newSupply +
                            ". You received " +
                            gold_ +
                            " gold from " +
                            player.name +
                            "$yellow$attentionmarkYellow~";

                        i = game.players.length;
                      }

                  if (!unitsGivenToAlly) game.killAllUnitsOfPlayer(player);
                }
              }

            // execute all the orders
            for (var i = 0; i < orders.length; i++) {
              var order = orders[i];

              var target = null;
              var targetAvailable = true;
              var playerNr = order[0];

              // k is the array pos where the units, that the order is given to, starts. It depends on the type of the order
              var k = 4;

              if (order[1] == "unit") {
                target = game.getUnitById(order[4]);
                targetAvailable = target ? true : false;
                k = 5;
              } else if (order[1] == "field") {
                target = new Field(order[4], order[5], true);
                k = 6;
              } else if (order[1] == "int") {
                target = parseInt(order[4]);
                k = 5;
              } else if (order[1] == "ac")
                // autocast
                k = 4;
              else if (order[1] == "learn")
                // learn
                k = 3;

              // make array from arraystring for units and find the actual units from the id's
              var units = [];
              var cmd = game.commands[order[2]];
              for (; k < order.length && typeof order[k] == "number"; k++) {
                const newUnit = game.getUnitById(order[k]);
                const playerOwnsUnit = newUnit?.owner?.number == playerNr;
                const unitCanPerformCommand =
                  cmd?.type != COMMAND.DANCE || newUnit?.canPerformDance(cmd ?? {});

                // TODO: actually do something on desync
                const desyncMsg = `Desynced at tick ${ticksCounter}`;
                if (!newUnit) {
                  console.log(`${desyncMsg}. Reason: invalid unit referenced in command`);
                } else if (!playerOwnsUnit) {
                  console.log(`${desyncMsg}. Reason: ordered unit doesn't belong to player`);
                } else if (!cmd) {
                  console.log(`${desyncMsg}. Reason: failed to find matching command`);
                } else if (!unitCanPerformCommand) {
                  console.log(
                    `${desyncMsg}. Reason: command is a dance command and the user can't perform a dance`
                  );
                } else {
                  units.push(newUnit);
                }
              }

              // Issue order if possible
              if (targetAvailable) {
                game.issueOrderToUnits2(
                  units,
                  cmd,
                  target,
                  order[3],
                  order[1] == "ac",
                  order[3],
                  order[1] == "learn"
                );
              } else {
                // TODO: actually do something on desyncd
                console.log(`Failed to issue order due to missing target at tick ${ticksCounter}`);
              }
            }

            if (game_state == GAME.PLAYING) game.update();

            self.postMessage(
              message +
                "update$" +
                timeOfLastUpdate +
                "$" +
                ticksCounter +
                "~changeFog$" +
                changeFog +
                "~workload$" +
                JSON.stringify(goldmineUpdate)
            );

            message = "";
            changeFog = "";
            goldmineUpdate = {};

            ticksCounter++;

            setTimeout(updateGameLogic, TICK_TIME - (Date.now() - startTime));
            return;
          }

          setTimeout(updateGameLogic, 4);
        }

        var radialOffsets = [];
        for (var x = -50; x <= 50; x++)
          for (var y = -50; y <= 50; y++)
            radialOffsets.push({ x: x, y: y, d: Math.sqrt(x * x + y * y) });

        radialOffsets = _.sortBy(radialOffsets, function (obj) {
          return obj.d;
        });

        // units use those when they want to move and check where the next free spot is
        var pushPosAngles = [0, 1, -1, 10, -10];
        var pushDistances = [1, 0.5];

        // calculate the build time in ticks for all unit types and upgrade types
        function calculateTypesTickValues() {
          var types_ = game.buildingTypes.concat(game.unitTypes);
          for (var i = 0; i < types_.length; i++) {
            var t = types_[i];
            t.radius = t.size / 2;

            // if unit
            if (t.movementSpeed >= 0) {
              // calculate circle offsets depending on the radius (is used to check if a unit collides with a static object)
              t.circleOffsets = [];
              for (k = 0; k < checkAngles.length; k++) {
                var field = new Field(checkAngles[k][0], checkAngles[k][1], true).normalize(
                  t.radius
                );
                t.circleOffsets.push([field.px, field.py]);
              }
            }

            if (t.vision >= 0) t.setVisionFieldOffsets();

            if (t.size) {
              t.sizeX = t.size;
              t.sizeY = t.size;
            }
          }

          for (var i = 0; i < game.commands.length; i++) game.commands[i].compileCondition0();
        }

        function getLenOfPath(initField, path) {
          if (!path || !(path.length > 0)) return 0;

          var len = initField ? initField.distanceTo2(path[path.length - 1]) : 0;
          // len = 0;
          for (var i = 1; i < path.length; i++) len += path[i - 1].distanceTo2(path[i]);

          return len;
        }

        function getBucketX(x) {
          return Math.floor(Math.min(Math.max(x / 2, 0), game.buckets2x2.length - 1));
        }

        function getBucketY(y) {
          return Math.floor(Math.min(Math.max(y / 2, 0), game.buckets2x2[0].length - 1));
        }

        function getRefrectionPoint(to, pos, unitPos) {
          // to spiegelung am 0punkt
          var from = pos.addNormalizedVector(to, -to.getLen());

          // vektor von pos nach unitPos
          var vec = pos.vectorTo(unitPos);
          if (vec.px == 0) vec.px = 0.0001;
          if (vec.py == 0) vec.py = 0.0001;

          // steigung der beiden geraden
          var stg1 = vec.py / vec.px;
          var stg2 = -vec.px / vec.py;

          // punkte der beiden geraden
          var p1 = to.py - to.px * stg1;
          var p2 = from.py - from.px * stg2;

          // x koordinate des schnittpunktes
          var stgDiv = stg2 - stg1;
          if (stgDiv == 0) stgDiv = 0.0001;
          var targetX = (p1 - p2) / stgDiv;
          var targetY = stg1 * targetX + p1;

          return new Field(targetX, targetY, true);
        }
        // parent class for map object types (unit types, building typed, tile / doodas types)
        function MapObjectType() {
          this.dmg = 10;
          this.range = 0.2;
          this.weaponCooldown = 20;
          this.weaponDelay = 20;
          this.projectileSpeed = 8;
          this.canAttackGround = true;
          this.isHeatSeeking = true;
          this.aoeRadius = 0;

          this.isInvisible = false;
          this.noShow = false;
          this.hasDetection = false;
          this.controllable = true;

          this.supply = 0;
          this.supplyProvided = 0;
          this.experienceRange = 9;

          this.hitsFriendly = true;
          this.hitsEnemy = true;
          this.minRange = -999; // if no min range is set, set it to -999 (otherwise some calculations would fail)
          this.armorPenetration = 0;
          this.hpRegenerationRate = 0;
          this.manaRegenerationRate = 0;

          this.summonTime = 1 * 20;
          this.visionHeightBonus = 0;
          this.dmgCap = 1;
          this.bounceDistMax = 0;
          this.bounceDistMin = 0;

          this.outerVisionBorder = [];
          this.wholeVisionCircle = [];
          this.wholeVisionCirclePlus1 = [];
        }

        MapObjectType.prototype.replaceReferences = function () {
          var t = this;
          if (this.commands)
            _.each(this.commands, function (c, key) {
              if (typeof c == "string") t.commands[key] = lists.types[c];
            });

          if (this.modifiers)
            for (var k = 0; k < this.modifiers.length; k++)
              if (typeof this.modifiers[k] == "string")
                this.modifiers[k] = lists.types[this.modifiers[k]];

          if (this.modifiersSelf)
            for (var k = 0; k < this.modifiersSelf.length; k++)
              if (typeof this.modifiersSelf[k] == "string")
                this.modifiersSelf[k] = lists.types[this.modifiersSelf[k]];

          if (this.spawnModifiers)
            for (var k = 0; k < this.spawnModifiers.length; k++)
              if (typeof this.spawnModifiers[k] == "string")
                this.spawnModifiers[k] = lists.types[this.spawnModifiers[k]];

          if (this.modifiersPerLevel)
            for (var k = 0; k < this.modifiersPerLevel.length; k++)
              if (typeof this.modifiersPerLevel[k] == "string")
                this.modifiersPerLevel[k] = lists.types[this.modifiersPerLevel[k]];

          if (this.costIncreaseGroup)
            for (var k = 0; k < this.costIncreaseGroup.length; k++)
              if (typeof this.costIncreaseGroup[k] == "string")
                this.costIncreaseGroup[k] = lists.types[this.costIncreaseGroup[k]];
        };

        // store all the offsets of fields in vision range (and  a little bit more), so we dont have to recalculate them everytime the unit moves and the vision has to be updated
        MapObjectType.prototype.setVisionFieldOffsets = function () {
          this.outerVisionBorder = [];
          this.wholeVisionCircle = [];
          this.wholeVisionCirclePlus1 = [];

          this.vision = parseInt(this.vision);

          for (var x = -this.vision - 2; x < this.vision + 2; x++)
            for (var y = -this.vision - 2; y < this.vision + 2; y++) {
              var dist = Math.sqrt(x * x + y * y);

              if (dist > this.vision && dist <= this.vision + 1.42 /* = sqrt2 */)
                this.outerVisionBorder.push({ x: x, y: y });

              if (dist <= this.vision) this.wholeVisionCircle.push({ x: x, y: y });

              if (dist <= this.vision + 1.42 /* = sqrt2 */)
                this.wholeVisionCirclePlus1.push({ x: x, y: y });
            }
        };

        MapObjectType.prototype.getValue = function (value, owner) {
          return this[value] + owner.getValueModifier(value, this);
        };

        MapObjectType.prototype.canSeePosFromPos = function (from, to, underConstruction) {
          return (
            from.distanceTo(to) <= (underConstruction ? 3 : this.vision) &&
            game.getHMValue5(from.x, from.y) + this.visionHeightBonus + 0.5 >=
              game.getHMValue5(to.x, to.y)
          );
        };

        MapObjectType.prototype.distanceToPotentialBuilding = function (from, buildingPlacedAt) {
          var distX = 0;
          if (from.px < buildingPlacedAt.x - 1 || from.px > buildingPlacedAt.x - 1 + this.sizeX)
            distX = Math.min(
              Math.abs(from.px - (buildingPlacedAt.x - 1)),
              Math.abs(from.px - (buildingPlacedAt.x - 1 + this.sizeX))
            );

          var distY = 0;
          if (from.py < buildingPlacedAt.y - 1 || from.py > buildingPlacedAt.y - 1 + this.sizeY)
            distY = Math.min(
              Math.abs(from.py - (buildingPlacedAt.y - 1)),
              Math.abs(from.py - (buildingPlacedAt.y - 1 + this.sizeY))
            );

          return Math.sqrt(distX * distX + distY * distY);
        };

        MapObjectType.prototype.couldBePlacedAt = function (field) {
          var distanceAllowed = true;

          for (var x = field.x; x < field.x + this.sizeX; x++)
            for (var y = field.y; y < field.y + this.sizeY; y++) {
              // get the nearest CC, Goldmine and Start Location, because those are not allowed to be placed near eachother
              var f = new Field(x, y);
              var nextGoldmine = game.getNextBuildingOfType(f, null, false, "startGold");
              var nextCC = game.getNextBuildingOfType(f, null, false, "takesGold");

              if (
                this.takesGold &&
                nextGoldmine &&
                nextGoldmine.pos.distanceTo2(f) < game.getMineDistance()
              )
                distanceAllowed = false;

              if (
                this.startGold &&
                nextCC &&
                nextCC.pos.distanceTo2(field) < game.getMineDistance()
              )
                distanceAllowed = false;

              if (game.fieldIsBlockedForBuilding(x, y) || !distanceAllowed) return false;
            }
          return true;
        };

        MapObjectType.prototype.getDataFields = function () {
          return this.isUnit ? list_unit_fields : list_building_fields;
        };
        UnitType.prototype = new MapObjectType();
        function UnitType(data) {
          this.attackPrio = 10;
          this.cargoUse = -1;

          _.extend(this, data);

          // copy arrays (so they dont get only referenced)
          var thisRef = this;
          _.each(data, function (val, key) {
            thisRef[key] =
              Object.prototype.toString.call(thisRef[key]) === "[object Array]"
                ? thisRef[key].slice()
                : thisRef[key];
          });

          // copy command object
          var commands = {};
          _.each(this.commands, function (val, key) {
            commands[key] = val;
          });
          this.commands = commands;

          this.isUnit = true;
          this.id = game.unitTypeIdCounter++;
        }

        // checks if the unit could stand at a position (without beeing blocked, only checks for buildings and tiles, not units)
        UnitType.prototype.couldStandAt = function (pos) {
          if (this.flying || this.noCollision) {
            for (i = 0; i < this.circleOffsets.length; i++)
              if (
                game.fieldIsBlockedFlying(
                  Math.ceil(pos.px + this.circleOffsets[i][0]),
                  Math.ceil(pos.py + this.circleOffsets[i][1])
                )
              )
                return false;
          } else {
            for (i = 0; i < this.circleOffsets.length; i++)
              if (
                game.fieldIsBlocked(
                  Math.ceil(pos.px + this.circleOffsets[i][0]),
                  Math.ceil(pos.py + this.circleOffsets[i][1])
                )
              )
                return false;
          }

          return true;
        };

        // find the next free position where a unit of this type could stand (is pos is valid itself, return pos; only check for buildings and tiles, no units); if team is set, then this team needs to have vision at point
        UnitType.prototype.getNextFreePositionFrom = function (pos, teamToCheckVision, maxRange) {
          maxRange = maxRange ? maxRange : 10;

          if (
            this.couldStandAt(pos) &&
            (!teamToCheckVision || teamToCheckVision.canSeeField(pos.x, pos.y))
          )
            return pos;

          if (this.size <= 1 && !game.fieldIsBlocked(pos.x, pos.y)) {
            var x = 0;
            var y = 0;

            if ((pos.px % 1) - this.radius < 0 && game.fieldIsBlocked(pos.x - 1, pos.y))
              x = Math.floor(pos.px) + this.radius;
            else if ((pos.px % 1) + this.radius > 1 && game.fieldIsBlocked(pos.x + 1, pos.y))
              x = Math.ceil(pos.px) - this.radius;
            else x = pos.px;

            if ((pos.py % 1) - this.radius < 0 && game.fieldIsBlocked(pos.x, pos.y - 1))
              y = Math.floor(pos.py) + this.radius;
            else if ((pos.py % 1) + this.radius > 1 && game.fieldIsBlocked(pos.x, pos.y + 1))
              y = Math.ceil(pos.py) - this.radius;
            else y = pos.py;

            if (
              x != pos.px ||
              y != pos.py ||
              (!game.fieldIsBlocked(pos.x - 1, pos.y - 1) &&
                !game.fieldIsBlocked(pos.x - 1, pos.y + 1) &&
                !game.fieldIsBlocked(pos.x + 1, pos.y - 1) &&
                !game.fieldIsBlocked(pos.x + 1, pos.y + 1))
            ) {
              var field = new Field(x, y, true);
              if (!teamToCheckVision || teamToCheckVision.canSeeField(field.x, field.y))
                return field;
            }
          }

          var testPos = pos;
          var len = 0.02;
          var i = 0;

          while (
            !this.couldStandAt(testPos) ||
            (teamToCheckVision && !teamToCheckVision.canSeeField(testPos.x, testPos.y))
          ) {
            testPos = pos.add(
              new Field(angleOffsets[i][0], angleOffsets[i][1], true).normalize(len)
            );
            len += 0.02;
            i = (i + 1) % angleOffsets.length;

            if (len > maxRange) return null;
          }

          return testPos;
        };

        UnitType.prototype.getNextFreePositionFromPosAtBuilding = function (pos, building) {
          var testPos = building.pos;
          var len = 0.02;
          var i = 0;

          while (
            !this.couldStandAt(testPos) ||
            building.distanceToPos(testPos) > 0.5 + this.radius
          ) {
            testPos = pos.add(
              new Field(angleOffsets[i][0], angleOffsets[i][1], true).normalize(len)
            );
            len += 0.02;
            i = (i + 1) % angleOffsets.length;

            if (testPos.distanceTo2(building.pos) > building.type.size * 2 + 1) return false;
          }

          return testPos;
        };
        BuildingType.prototype = new MapObjectType();
        function BuildingType(data) {
          this.preventsReveal = true;
          this.preventsLoss = true;
          this.attackPrio = 5;
          this.maxUnitsToRepair = 1;

          _.extend(this, data);

          // copy arrays (so they dont get only referenced)
          var thisRef = this;
          _.each(data, function (val, key) {
            thisRef[key] =
              Object.prototype.toString.call(thisRef[key]) === "[object Array]"
                ? thisRef[key].slice()
                : thisRef[key];
          });

          // copy command object
          var commands = {};
          _.each(this.commands, function (val, key) {
            commands[key] = val;
          });
          this.commands = commands;

          this.isBuilding = true;

          this.id = game.buildingTypeIdCounter++;

          this.miningEfficiencyCoefficient = data.miningEfficiencyCoefficient
            ? data.miningEfficiencyCoefficient
            : 1;
          this.minMiningRate = data.minMiningRate ? data.minMiningRate : 1;
          this.radius = this.size / 2;
        }
        Tile.prototype = new MapObject();
        function Tile(data) {
          _.extend(this, data);

          if (this.type.ignoreGrid) this.pos = new Field(this.x, this.y, true);
          else
            this.pos = new Field(
              this.x - 1 + this.type.sizeX / 2,
              this.y - 1 + this.type.sizeY / 2,
              true
            );

          this.owner = game.players[0]; // tiles always belong to the neutral player

          if (this.type.blocking) {
            game.blockingTiles.push(this);
            this.switchBlocking(true, data.dontRefreshNBs);
          }

          if (data.tellRenderer)
            self.postMessage("createTile$" + this.type.name + "$" + this.x + "$" + this.y);
        }
        // represents a field in the grid or an exact position; p_mode = true => exact position, else Field
        function Field(x, y, p_mode) {
          if (p_mode) {
            this.px = x;
            this.py = y;
            this.x = Math.ceil(x);
            this.y = Math.ceil(y);
          } else {
            this.x = x;
            this.y = y;
            this.px = x - 0.5;
            this.py = y - 0.5;
          }

          this.isField = true;
        }

        // get distance to other field, using field values
        Field.prototype.distanceTo = function (otherField) {
          return otherField
            ? Math.sqrt(Math.pow(this.x - otherField.x, 2) + Math.pow(this.y - otherField.y, 2))
            : 999999;
        };

        // get distance to other field, using exact positions
        Field.prototype.distanceTo2 = function (otherField) {
          return otherField
            ? Math.sqrt(Math.pow(this.px - otherField.px, 2) + Math.pow(this.py - otherField.py, 2))
            : 999999;
        };

        // check if the direct path from this to target is free for a unit of type "type" (default only checks for static blocks)
        Field.prototype.raytrace = function (
          target,
          radius,
          alsoCheckForUnits,
          player,
          ignoreUnit
        ) {
          var dist_x = target.px - this.px;
          var dist_y = target.py - this.py;

          var steps = Math.sqrt(dist_x * dist_x + dist_y * dist_y) / 0.33;
          var offset = new Field(dist_y, -dist_x, true).normalize(radius);
          var check = this.getCopy();

          var step_x = dist_x / steps;
          var step_y = dist_y / steps;

          for (var i = 1; i < steps; i++) {
            check = check.add3(step_x, step_y);

            if (
              game.fieldIsBlocked(
                Math.ceil(check.px + offset.px),
                Math.ceil(check.py + offset.py)
              ) ||
              game.fieldIsBlocked(
                Math.ceil(check.px - offset.px),
                Math.ceil(check.py - offset.py)
              ) ||
              (alsoCheckForUnits &&
                game.unitAtPosWouldCollideWithUnits(check, radius, player, ignoreUnit))
            )
              return false;
          }

          return true;
        };

        Field.prototype.isSameGrid = function (otherField) {
          return this.x == otherField.x && this.y == otherField.y;
        };

        // get vector from here to other Field
        Field.prototype.vectorTo = function (otherField) {
          return new Field(otherField.px - this.px, otherField.py - this.py, true);
        };

        // normalize the vector to a set length
        Field.prototype.normalize = function (factor) {
          var len = Math.sqrt(this.px * this.px + this.py * this.py);
          if (len == 0) len = 0.001;

          this.px *= factor / len;
          this.py *= factor / len;
          return this;
        };

        Field.prototype.getLen = function () {
          return Math.sqrt(this.px * this.px + this.py * this.py);
        };

        // adds a vector to this one from x and y values
        Field.prototype.add = function (otherField) {
          return new Field(this.px + otherField.px, this.py + otherField.py, true);
        };

        Field.prototype.add3 = function (x, y) {
          return new Field(this.px + x, this.py + y, true);
        };

        // returns a new field, created from adding a vector from this to otherfield with a fixed length
        Field.prototype.addNormalizedVector = function (otherField, len) {
          var x = otherField.px - this.px;
          var y = otherField.py - this.py;

          var len2 = Math.sqrt(x * x + y * y);
          if (len2 == 0) len2 = 0.001;

          x *= len / len2;
          y *= len / len2;

          return new Field(this.px + x, this.py + y, true);
        };

        Field.prototype.getCopy = function () {
          return new Field(this.px, this.py, true);
        };

        Field.prototype.equals = function (otherField) {
          return this.px == otherField.px && this.py == otherField.py;
        };

        Field.prototype.toString = function () {
          return parseInt(this.px * 10) / 10 + ":" + parseInt(this.py * 10) / 10;
        };
        // the centeral class of a game; represents a game and holds arrays to all the objects
        function Game() {
          this.blockArray = []; // false = blocked, true = free
          this.projectiles = []; // arrows, ...
          this.fields = []; // one Field() for every grid element is stored here, also containing an array with all its neighbours
          this.fields2x2 = []; // addininal grid, we need that for units that are bigger than 1 field
          this.buckets2x2 = [];

          this.units = []; // all units that are inside the game excluding those that are in buildings for example (cuz those dont collide and actually dont take part in gameplay)
          this.units2 = []; // all units, also those that are in building for example (used for ingame stats)
          this.units3 = []; // only units that are currently not active but have to be updated (for example units that are thrown through the air)
          this.units4 = []; // dead heroes; they must be stored in case they get ressurected
          this.buildings = []; // all in game existing buildings
          this.buildings2 = []; // all existing buildings plus some already dead buildings (if seen by some play who doesnt know the building is dead it still has to be drawn for him)
          this.blockingTiles = []; // trees, rocks and so on, that block pathing and are bound to the grid

          this.global_id = 1;
          this.global_command_id = 0;
          this.pseudoBuildingsId = 1;
          this.buildingTypeIdCounter = 0;
          this.unitTypeIdCounter = 0;

          this.gameHasEnded = false;
          this.playingPlayerWon = false;

          // set replay mode to false (might have been true if we watched a replay before)
          this.replay_mode = false;

          this.areaCodeCounter = 1;

          this.astar = null;

          this.lastYesSound = -999;

          this.playingFromEditor = false;
        }

        // load a map
        /*
         * @param data map file data
         * @param playerSetting array of json datas for each player
         * @param aiRandomizer random number that comes from the server and determines the style / strategy, that ai players play, (has to be the same for all clients)
         * @param ticksCounter in case of replay this is the amount of total ticks, so the game knows when the replay is finished and it has to stop
         */
        Game.prototype.loadMap = function (
          data,
          playerSettings,
          aiRandomizer,
          replayTicksCounter,
          editorLoad,
          chat
        ) {
          if (!playerSettings) {
            playerSettings = [];

            let insertedSelf = false;

            if (editorLoad) {
              playerSettings.push({
                name: networkPlayerName,
                controller: CONTROLLER.HUMAN,
                team: 0,
                isPlayingPlayer: true,
              });
              insertedSelf = true;
            }

            for (let i = 0; i < MAX_PLAYERS; i++) {
              const team = parseInt(data.players?.[i].team.split(" ")[1]) || i + 1;
              const slot = data.players?.[i].slot ?? "open";
              const isNormalAI = (data.players?.[i].ai ?? "normal AI") == "normal AI";
              const common = { nr: i + 1, team: team };

              if (!insertedSelf && slot == "open") {
                playerSettings.push({
                  ...common,
                  name: networkPlayerName,
                  controller: CONTROLLER.HUMAN,
                  isPlayingPlayer: true,
                });
                insertedSelf = true;
              } else if ((slot == "open" || slot == "computer") && isNormalAI) {
                playerSettings.push({
                  ...common,
                  name: "Computer",
                  controller: CONTROLLER.COMPUTER,
                });
              }
            }

            if (!insertedSelf)
              playerSettings.push({
                nr: 7,
                team: 0,
                name: networkPlayerName,
                controller: CONTROLLER.SPECTATOR,
                isPlayingPlayer: true,
              });
          }

          this.x = parseInt(data.x);
          this.y = parseInt(data.y);
          this.name = data.name;
          this.data = data;
          this.aiRandomizer = aiRandomizer ? aiRandomizer : Math.ceil(Math.random() * 100000); // this is used to determine, which AI-type the cpu players pick
          this.replayTicksCounter = replayTicksCounter ? replayTicksCounter : -1;

          this.updateGlobalVars(data.globalVars);

          // create teams
          this.teams = [];
          for (var i = 0; i < MAX_PLAYERS + 1; i++) this.teams.push(new Team(i));

          // create players, player 0 is always the neutral player. He owns gold mines for example
          this.players = [new Player("Neutral", CONTROLLER.NONE, 0, 0)];

          // create the active players from playerSettings
          var specNr = MAX_PLAYERS + 1;
          for (var i = 0; i < playerSettings.length; i++) {
            var ps = playerSettings[i];

            var nr = ps.nr ? ps.nr : i + 1;
            if (ps.controller == CONTROLLER.SPECTATOR) {
              nr = specNr;
              specNr++;
            }

            var custom_ai_index =
              ps.controller == (CONTROLLER.COMPUTER && !network_game) ? ps.ai_index : -1;

            var noAI = data.players && data.players[nr - 1] && data.players[nr - 1].ai == "no AI";

            var p = new Player(
              ps.name,
              ps.controller,
              nr,
              ps.controller == CONTROLLER.SPECTATOR ? 0 : ps.team,
              this.aiRandomizer,
              custom_ai_index,
              ps.customAI,
              ps.dances,
              noAI
            );

            if (playerSettings[i].isPlayingPlayer) PLAYING_PLAYER = p;

            // set controller == remote, if human but not playing player
            if (p.controller == CONTROLLER.HUMAN && PLAYING_PLAYER != p)
              p.controller == CONTROLLER.REMOTE;

            this.players[nr] = p;
          }

          // reset ticksCounter (= Game timer)
          ticksCounter = 0;

          // reset TICK_TIME
          TICK_TIME = 50;
          replaySpeedIndex = 1;

          // reset storage for commands
          incomingOrders = {};
          playerLefts = {};

          // fill block and Fields Arrays
          for (var x = 0; x <= this.x + 1; x++) {
            this.fields[x] = [];
            this.fields2x2[x] = [];
            this.blockArray[x] = [];
            for (var y = 0; y <= this.y + 1; y++) {
              this.fields[x][y] = new Field(x, y);
              this.fields2x2[x][y] = new Field(x, y, true);
              this.blockArray[x][y] = true;
              if (x < 1 || x > this.x || y < 1 || y > this.y)
                // if outside borders
                this.blockArray[x][y] = false;
            }
          }

          // create buckets array
          for (var x = 0; x <= Math.ceil(this.x / 2); x++) {
            this.buckets2x2[x] = [];
            for (var y = 0; y <= Math.ceil(this.y / 2); y++) this.buckets2x2[x][y] = [];
          }

          // kill types list
          _.each(lists.types, function (type, key) {
            delete lists.types[key];
          });

          // Reset all other types and then populate them differently depending on whether or not the map is a mod
          this.unitTypes = [];
          this.buildingTypes = [];
          this.upgrades = [];
          this.commands = [];
          this.modifiers = [];

          // Populate with default unit data if the map isn't frozen
          if (!this.globalVars.isFrozen) {
            for (var i = 0; i < basicUnitTypes.length; i++)
              this.unitTypes.push(new UnitType(basicUnitTypes[i]));

            for (var i = 0; i < basicBuildingTypes.length; i++)
              this.buildingTypes.push(new BuildingType(basicBuildingTypes[i]));

            for (var i = 0; i < basicUpgrades.length; i++)
              this.upgrades.push(new Upgrade(basicUpgrades[i]));

            for (var i = 0; i < basicCommands.length; i++)
              this.commands.push(new Command(basicCommands[i]));

            for (var i = 0; i < basicModifiers.length; i++)
              this.modifiers.push(new Modifier(basicModifiers[i]));

            this.buildingTypes
              .concat(this.unitTypes, this.commands, this.upgrades, this.modifiers)
              .forEach((t) => (lists.types[t.id_string] = t));
          }

          // Load custom unit data and graphics if this is a mod (frozen implies modded, so that case should already be included)
          if (this.globalVars.isModded) {
            var gameRef = this;

            // Load custom unit data
            _.each(data.unitData, function (type, typeName) {
              // AMove is handled as a special case ability
              if (typeName == "amove") return;

              if (!lists.types[typeName]) {
                let o = null;
                if (type.isUnit) {
                  o = new UnitType(type);
                  gameRef.unitTypes.push(o);
                } else if (type.isBuilding) {
                  o = new BuildingType(type);
                  gameRef.buildingTypes.push(o);
                } else if (type.isCommand) {
                  o = new Command(type);
                  gameRef.commands.push(o);
                } else if (type.isUpgrade) {
                  o = new Upgrade(type);
                  gameRef.upgrades.push(o);
                } else if (type.isModifier) {
                  o = new Modifier(type);
                  gameRef.modifiers.push(o);
                } else {
                  assert(false);
                }

                if (o) {
                  o.id_string = typeName;
                  lists.types[o.id_string] = o;
                } else {
                  throw Error(
                    `Failed to obtain object for typeName ${typeName}\n${JSON.stringify(type)}`
                  );
                }
              }

              const dataFields = lists.types[typeName].getDataFields();

              _.each(type, function (val, field) {
                if (dataFields[field]) {
                  if (dataFields[field].isObject || dataFields[field].type == "complex") {
                    var obj = {};

                    _.each(val, function (el, key) {
                      obj[key] = el;
                    });

                    lists.types[typeName][field] = obj;
                  } else if (dataFields[field].isArray) {
                    var arr = [];

                    if (Object.prototype.toString.call(val) === "[object Array]")
                      for (var i = 0; i < val.length; i++)
                        arr.push(checkField(dataFields[field], val[i]));
                    else arr.push(checkField(dataFields[field], val));

                    lists.types[typeName][field] = arr;
                  } else {
                    lists.types[typeName][field] = checkField(dataFields[field], val);

                    if (
                      dataFields[field].type == "selection" &&
                      dataFields[field].all_values &&
                      !_.contains(dataFields[field].all_values, lists.types[typeName][field])
                    )
                      lists.types[typeName][field] = dataFields[field].default_;
                  }
                }
              });
            });

            // Load specifically AMove as a special case
            const amove = new Command(basicCommands.find((c) => c.id_string == "amove"));
            lists.types[amove.id_string] = amove;
            this.commands.push(amove);
          }

          calculateTypesTickValues();

          // replacing references
          _.each(
            this.commands.concat(this.upgrades, this.unitTypes, this.buildingTypes, this.modifiers),
            function (t) {
              t.replaceReferences();
            }
          );

          // change environment style depending on theme
          var theme = getThemeByName(data.theme);

          if (!theme && this.data.defaultTiles && this.data.defaultTiles[0])
            for (var i = 0; i < mapThemes.length; i++)
              if (mapThemes[i].defaultTiles.contains(this.data.defaultTiles[0]))
                theme = mapThemes[i];

          if (!theme) theme = mapThemes[0];

          this.theme = theme;

          // make cliffs
          this.makeCliffsArray();
          this.makeCliffs();

          // create units and buildings and tiles (only, if owner exists and is not spectator)
          for (var i = 0; i < data.units.length; i++)
            if (
              this.players[data.units[i].owner] &&
              this.players[data.units[i].owner].controller != CONTROLLER.SPECTATOR
            ) {
              var o = data.units[i];

              var u = {
                x: o.x,
                y: o.y,
                type: o.type.toUnitType(),
                owner: this.players[o.owner],
                waypoint: this.getWaypointFromMapUnitObject(o),
              };

              if (u.type.isUnit) new Unit(u);
            }

          for (var i = 0; i < data.buildings.length; i++)
            if (
              this.players[data.buildings[i].owner] &&
              this.players[data.buildings[i].owner].controller != CONTROLLER.SPECTATOR
            ) {
              var o = data.buildings[i];

              var u = {
                x: o.x,
                y: o.y,
                type: o.type.toUnitType(),
                owner: this.players[o.owner],
                dontRefreshNBs: true,
                waypoint: this.getWaypointFromMapUnitObject(o),
              };

              if (u.type.isBuilding) new Building(u);
            }

          for (var i = 0; i < data.tiles.length; i++)
            new Tile({
              x: data.tiles[i].x,
              y: data.tiles[i].y,
              type: data.tiles[i].type.toUnitType(),
              dontRefreshNBs: true,
            });

          // set neightbours of fields Array; we do this, so we dont have to do it everytime we do pathfinding
          for (var x = 0; x <= this.x + 1; x++)
            for (var y = 0; y <= this.y + 1; y++) {
              this.refreshNBSOfField(this.fields[x][y]);
              this.refreshNBSOfField2x2(this.fields2x2[x][y]);
            }

          // refresh all players vision
          for (var i = 1; i < this.players.length; i++)
            if (this.players[i]) this.players[i].team.refreshVision();

          this.reduceDelayOnNextTick = false;
          this.increaseDelayOnNextTick = false;

          this.astar = new AStar();

          if (!editorLoad) this.replaceStartCircles();

          this.updateGlobalPlayerVariables();

          // find cc or start location
          var cc = null;
          for (var k = 0; k < this.buildings.length; k++)
            if (this.buildings[k].type.takesGold && this.buildings[k].owner == PLAYING_PLAYER)
              cc = this.buildings[k];

          this.teams[0].refreshVision();

          this.sliceMap();

          game_paused = false;

          this.replay_mode =
            typeof replayTicksCounter != "undefined" && replayTicksCounter !== null;

          self.postMessage("gameReady$" + (cc ? cc.pos.x + "$" + cc.pos.py : ""));
        };

        Game.prototype.getWaypointFromMapUnitObject = function (o) {
          if (o.waypointX && o.waypointY)
            return [new Field(parseFloat(o.waypointX), parseFloat(o.waypointY), true)];

          if (o.waypoint) {
            var waypointArray = [];
            for (var i = 0; i < o.waypoint.length - 1; i += 2)
              waypointArray.push(
                new Field(parseFloat(o.waypoint[i]), parseFloat(o.waypoint[i + 1]), true)
              );

            return waypointArray;
          }
        };

        Game.prototype.updateGlobalVars = function (o) {
          this.globalVars = o ? o : {};
          this.setModded(this.globalVars.isModded ?? false);

          if (this.players && game_state == GAME.EDITOR)
            for (var k = 0; k < this.players.length; k++)
              if (this.players[k])
                this.players[k].modifyGold(this.getStartGold() - this.players[k].gold);
        };

        Game.prototype.setModded = function (value) {
          this.globalVars.isModded = value;
          if (!value) {
            delete this.globalVars.maxSupply;
            delete this.globalVars.startGold;
            delete this.globalVars.mineDist;
          }
        };

        Game.prototype.__getGlobalVar = function (key, min, max, defaultVal) {
          const val = parseInt(this.globalVars?.[key]);
          if (isNaN(val)) return defaultVal;
          return Math.min(max, Math.max(min, val));
        };

        Game.prototype.getMineDistance = function () {
          return this.__getGlobalVar("mineDist", 0, 100, MINE_DIST);
        };

        Game.prototype.getMaxSupply = function () {
          return this.__getGlobalVar("maxSupply", 0, 200, MAX_SUPPLY);
        };

        Game.prototype.getStartGold = function () {
          return this.__getGlobalVar("startGold", 0, 999999, START_GOLD);
        };

        Game.prototype.getAreaCode = function (x, y, type) {
          var fields = type && type.size > 1 ? this.fields2x2 : this.fields;
          return fields[x] && fields[x][y] ? fields[x][y].areaCode : -1;
        };

        Game.prototype.moveUnitBucket = function (unit, x1, y1, x2, y2) {
          var x1_ = Math.floor(x1 / 2);
          var y1_ = Math.floor(y1 / 2);
          var x2_ = Math.floor(x2 / 2);
          var y2_ = Math.floor(y2 / 2);

          var table = bucketTable[(x2_ - x1_).toString() + (y2_ - y1_).toString()];

          if (table)
            for (var i = 0; i < table.remove.length; i++) {
              this.buckets2x2[
                Math.min(Math.max(x1_ + table.remove[i].x, 0), this.buckets2x2.length - 1)
              ][
                Math.min(Math.max(y1_ + table.remove[i].y, 0), this.buckets2x2[0].length - 1)
              ].erease(unit);
              this.buckets2x2[
                Math.min(Math.max(x2_ + table.add[i].x, 0), this.buckets2x2.length - 1)
              ][Math.min(Math.max(y2_ + table.add[i].y, 0), this.buckets2x2[0].length - 1)].push(
                unit
              );
            }
          else
            for (var i = 0; i < nbCoords2.length; i++) {
              this.buckets2x2[
                Math.min(Math.max(x1_ + nbCoords2[i].x, 0), this.buckets2x2.length - 1)
              ][Math.min(Math.max(y1_ + nbCoords2[i].y, 0), this.buckets2x2[0].length - 1)].erease(
                unit
              );
              this.buckets2x2[
                Math.min(Math.max(x2_ + nbCoords2[i].x, 0), this.buckets2x2.length - 1)
              ][Math.min(Math.max(y2_ + nbCoords2[i].y, 0), this.buckets2x2[0].length - 1)].push(
                unit
              );
            }
        };

        Game.prototype.unitSpawnBucket = function (unit, x, y) {
          var x_ = Math.floor(x / 2);
          var y_ = Math.floor(y / 2);

          for (var i = 0; i < nbCoords2.length; i++)
            this.buckets2x2[Math.min(Math.max(x_ + nbCoords2[i].x, 0), this.buckets2x2.length - 1)][
              Math.min(Math.max(y_ + nbCoords2[i].y, 0), this.buckets2x2[0].length - 1)
            ].push(unit);
        };

        Game.prototype.unitDieBucket = function (unit, x, y) {
          var x_ = Math.floor(x / 2);
          var y_ = Math.floor(y / 2);

          for (var i = 0; i < nbCoords2.length; i++)
            this.buckets2x2[Math.min(Math.max(x_ + nbCoords2[i].x, 0), this.buckets2x2.length - 1)][
              Math.min(Math.max(y_ + nbCoords2[i].y, 0), this.buckets2x2[0].length - 1)
            ].erease(unit);
        };

        Game.prototype.replaceStartCircles = function () {
          this.startLocations = [];

          for (var i = 0; i < this.buildings.length; i++)
            if (this.buildings[i].type == lists.types.startlocation) {
              var b = this.buildings[i];

              this.startLocations.push({
                player: b.owner.number,
                x: b.x,
                y: b.y,
              });

              b.isAlive = false;
              b.owner.modifySupply(-b.type.supplyProvided);
              b.remove();

              new Building({
                x: b.x,
                y: b.y,
                type: lists.types.castle,
                owner: b.owner,
              });

              for (var k = 0; k < 7; k++)
                new Unit({
                  x: b.x - 1 + b.type.size / 2,
                  y: b.y - 1 + b.type.size / 2,
                  type: lists.types.worker,
                  owner: b.owner,
                });

              i--;
            }
        };

        Game.prototype.heightModIsValid = function (x, y) {
          var h = this.getHMValue(x, y);

          // check if height level is outside of max height borders
          if (h > MAX_CLIFF_LEVEL || h < 0) return false;

          // check height levels of all nbs and if theres no difference bigger than one
          for (var i = 0; i < 8; i++)
            if (Math.abs(this.getHMValue(x + nbCoords[i].x, y + nbCoords[i].y) - h) > 1)
              return false;

          // check if field and all 8 nbs are not blocked (only by cliffs)
          for (var i = 0; i < nbCoords2.length; i++) {
            var x_ = x + nbCoords2[i].x;
            var y_ = y + nbCoords2[i].y;

            var hm = this.getHMValue(x_, y_);
            if (hm != parseInt(hm)) return false;

            if (this.fieldIsBlockedForBuilding(x_, y_))
              for (var k = 0; k < this.blockingTiles.length; k++)
                if (
                  this.blockingTiles[k].includesField(x_, y_) &&
                  !this.blockingTiles[k].type.isCliff
                )
                  return false;
          }

          return true;
        };

        Game.prototype.getHMValue = function (x, y) {
          return this.fields[x] && this.fields[x][y] ? this.fields[x][y].hm : 0;
        };

        Game.prototype.getHMValue2 = function (x, y) {
          return this.fields[x] && this.fields[x][y] ? this.fields[x][y].hm2 : 0;
        };

        // tatsächliche höhe auf dem Feld (0, 0.33, 0.66); wird für sichthöhe benutzt
        Game.prototype.getHMValue5 = function (x, y) {
          return this.fields[x] && this.fields[x][y] ? this.fields[x][y].hm5 : 0;
        };

        Game.prototype.setHMValue = function (x, y, val) {
          if (this.fields[x] && this.fields[x][y]) this.fields[x][y].hm = val;
        };

        Game.prototype.makeCliffsArray = function () {
          var hm = this.data.heightmap ? this.data.heightmap : "";
          var i = 0;

          for (var x = 1; x <= this.x; x++) {
            for (var y = 1; y <= this.y; y++) {
              if (hm.length > i) {
                var val = hm.slice(i, i + 1);
                // If it's a hight level (not ramp) clamp value
                if (parseInt(val) == val) {
                  if (val > MAX_CLIFF_LEVEL) val = MAX_CLIFF_LEVEL;

                  if (val < 0) val = 0;

                  val = parseInt(val);
                }

                this.fields[x][y].hm = val;
              } else this.fields[x][y].hm = 0;

              i++;
            }
          }
        };

        // make cliffs (in an area from x1:y1 to x2:y2; default: whole map)
        Game.prototype.makeCliffs = function (x1_, y1_, x2_, y2_) {
          x1_ = Math.min(Math.max(x1_ ? x1_ : 1, 1), this.x);
          y1_ = Math.min(Math.max(y1_ ? y1_ : 1, 1), this.y);
          x2_ = Math.min(Math.max(x2_ ? x2_ : this.x, 1), this.x);
          y2_ = Math.min(Math.max(y2_ ? y2_ : this.y, 1), this.y);

          // kill all existing cliff Tiles
          for (var i = 0; i < this.blockingTiles.length; i++) {
            var tile = this.blockingTiles[i];
            if (
              tile.type.isCliff &&
              tile.x >= x1_ &&
              tile.x <= x2_ &&
              tile.y >= y1_ &&
              tile.y <= y2_
            ) {
              this.blockingTiles[i].switchBlocking(false);
              this.blockingTiles.splice(i, 1);
              i--;
            }
          }

          // higher level, if single low grounded cliff fields, cuz those look stupido
          for (var x = x1_; x <= x2_; x++)
            for (var y = y1_; y <= y2_; y++) {
              var h = this.fields[x][y].hm;

              if (parseInt(h) == h) {
                // Neighbours?
                var countHigherNBs = 0;

                for (var i = 0; i < 8; i++) {
                  var h2 = this.getHMValue(x + nbCoords[i].x, y + nbCoords[i].y);

                  if (parseInt(h2) == h2 && h2 > h) countHigherNBs++;
                }

                // if all but one (or all) nbs are higher, make this field, higher, too
                if (countHigherNBs >= 6) this.fields[x][y].hm++;
                else {
                  for (var i = 0; i < reversePairs.length; i++) {
                    var h1_ = this.getHMValue(x + reversePairs[i][0].x, y + reversePairs[i][0].y);
                    var h2_ = this.getHMValue(x + reversePairs[i][1].x, y + reversePairs[i][1].y);

                    if (parseInt(h1_) == h1_ && h1_ > h && parseInt(h2_) == h2_ && h2_ > h) {
                      this.fields[x][y].hm++;
                      i = reversePairs.length;
                    }
                  }
                }
              }
            }

          for (var x = x1_; x <= x2_; x++)
            for (var y = y1_; y <= y2_; y++) {
              var h = this.fields[x][y].hm;

              this.fields[x][y].hm2 = h;
              this.fields[x][y].hm5 = h;
              this.fields[x][y].rampEnds = null;

              // get height levels of all nbs
              var nbs = [];
              var allSame = true;
              for (var i = 0; i < 8; i++) {
                var h2 = this.getHMValue(x + nbCoords[i].x, y + nbCoords[i].y);

                if (parseInt(h2) != h2) h2 = h;

                nbs.push(h2 - h);

                if (h2 != h) allSame = false;
              }

              if (!allSame) {
                // find according cliff
                var cliffTilePlaced = false;
                for (var i = 0; i < cliffTable.length; i++) {
                  var match = true;
                  var arr = cliffTable[i].arr;
                  for (var k = 0; k < 8; k++)
                    if (
                      !(
                        arr[k] == "*" ||
                        (arr[k] == 0 && nbs[k] <= 0) ||
                        (arr[k] == 1 && nbs[k] == 1)
                      )
                    )
                      match = false;

                  if (match) {
                    new Tile({
                      x: x,
                      y: y,
                      type: this.theme.cliffs[cliffTable[i].cliffIndex],
                    });
                    cliffTilePlaced = true;
                  }
                }

                if (!cliffTilePlaced) {
                  var atLeastOneHigherGroundExists = false;
                  for (var k = 0; k < 8; k++) if (nbs[k] > 0) atLeastOneHigherGroundExists = true;

                  if (atLeastOneHigherGroundExists && h == parseInt(h)) {
                    if (this.getHMValue(x, y + 1) <= h)
                      new Tile({ x: x, y: y, type: this.theme.cliffs[0] });
                    else new Tile({ x: x, y: y, type: this.theme.cliffs[12] });
                  }
                }
              }
            }

          // Ramps
          var usedPoints = [];

          for (var x = x1_; x <= x2_; x++)
            for (var y = y1_; y <= y2_; y++) {
              var h = this.fields[x][y].hm;

              if (h == "N" || h == "S" || h == "E" || h == "W") {
                var ramp = getRampTypeFromCode(h);

                // determine height level of this ramp
                var x2 = x;
                var y2 = y;

                while (this.getHMValue(x2, y2) == h) {
                  x2 += ramp.vec.x;
                  y2 += ramp.vec.y;
                }

                this.fields[x][y].hm2 = this.getHMValue(x2, y2);

                // search and set lowest and highest point
                x2 = x;
                y2 = y;
                // Look in ramp direction
                while (this.getHMValue(x2, y2) == h) {
                  x2 += ramp.vec.x;
                  y2 += ramp.vec.y;
                }

                var x3 = x;
                var y3 = y;
                // Look opposite ramp direction
                while (this.getHMValue(x3, y3) == h) {
                  x3 -= ramp.vec.x;
                  y3 -= ramp.vec.y;
                }

                this.fields[x][y].rampEnds = {
                  low: new Field(x2, y2).add3((-ramp.vec.x + 0.9) / 2, (-ramp.vec.y + 0.9) / 2),
                  high: new Field(x3, y3).add3(ramp.vec.x / 2, ramp.vec.y / 2),
                };
                this.fields[x][y].hm5 =
                  this.getHMValue(x2, y2) +
                  0.2 +
                  this.fields[x][y].distanceTo(this.fields[x][y].rampEnds.low) /
                    (this.fields[x][y].distanceTo(this.fields[x][y].rampEnds.low) +
                      this.fields[x][y].distanceTo(this.fields[x][y].rampEnds.high));

                // sides
                for (var i = 0; i < ramp.cliffs.length; i++) {
                  var cliff = ramp.cliffs[i];

                  // search point1
                  x2 = x;
                  y2 = y;

                  while (this.getHMValue(x2 + cliff.x, y2) == h) x2 += cliff.x;

                  while (this.getHMValue(x2, y2 + cliff.y) == h) y2 += cliff.y;

                  if (cliff.addX) x2 += cliff.addX;

                  if (cliff.addY) y2 += cliff.addY;

                  var hash = x2 + y2 * 10000;
                  if (usedPoints.contains(hash)) {
                    i = ramp.cliffs.length;
                    continue;
                  } else {
                    usedPoints.push(hash);
                    if (!this.fieldIsBlocked(x2, y2)) new Tile({ x: x2, y: y2, type: cliff.cliff });
                  }
                }
              }
            }
        };

        Game.prototype.refreshAreaMapFromBuilding = function (building) {
          if (!building.isActive) {
            this.refreshAreaMap(this.fields[building.x][building.y]);
            this.refreshAreaMap(this.fields2x2[building.x][building.y], true);
            return;
          }

          // turn all the fields -1 that the building covers itself
          for (var y = building.y; y <= building.y + building.type.size - 1; y++)
            for (var x = building.x; x <= building.x + building.type.size - 1; x++)
              this.fields[x][y].areaCode = -1;

          var fields = [];

          var x = building.x - 1;
          var y = building.y - 1;

          for (; x <= building.x + building.type.size; x++)
            if (this.fields[x] && this.fields[x][y]) fields.push(this.fields[x][y]);

          for (; y < building.y + building.type.size; y++)
            if (this.fields[x] && this.fields[x][y]) fields.push(this.fields[x][y]);

          for (; x >= building.x - 1; x--)
            if (this.fields[x] && this.fields[x][y]) fields.push(this.fields[x][y]);

          for (; y >= building.y - 1; y--)
            if (this.fields[x] && this.fields[x][y]) fields.push(this.fields[x][y]);

          var lastField = null;
          var containers = [];

          for (var i = 1; i < fields.length; i++) {
            if (!this.blockArray[fields[i].x] || !this.blockArray[fields[i].x][fields[i].y])
              continue;

            if (!lastField) {
              lastField = fields[i];
              containers.push([lastField]);
              continue;
            }

            var path = this.astar.getPath(lastField, fields[i], lists.types.soldier);

            // if fields can be reached, put it in the same container
            if (path[path.length - 1].equals(fields[i]))
              containers[containers.length - 1].push(fields[i]);
            // if not, make new container and put it in there
            else containers.push([fields[i]]);
          }

          for (var i = 1; i < containers.length - 1; i++) this.refreshAreaMap(containers[i][0]);

          // 2x2

          // turn all the fields -1 that the building covers itself
          for (var y = building.y - 1; y <= building.y + building.type.size - 1; y++)
            for (var x = building.x - 1; x <= building.x + building.type.size - 1; x++)
              this.fields2x2[x][y].areaCode = -1;

          var fields = [];

          var x = building.x - 2;
          var y = building.y - 2;

          for (; x <= building.x + building.type.size; x++)
            if (this.fields2x2[x] && this.fields2x2[x][y]) fields.push(this.fields2x2[x][y]);

          for (; y < building.y + building.type.size; y++)
            if (this.fields2x2[x] && this.fields2x2[x][y]) fields.push(this.fields2x2[x][y]);

          for (; x >= building.x - 2; x--)
            if (this.fields2x2[x] && this.fields2x2[x][y]) fields.push(this.fields2x2[x][y]);

          for (; y >= building.y - 2; y--)
            if (this.fields2x2[x] && this.fields2x2[x][y]) fields.push(this.fields2x2[x][y]);

          var lastField = null;
          var containers = [];

          for (var i = 1; i < fields.length; i++) {
            if (!game.fieldIsFree2x2(fields[i].x, fields[i].y)) continue;

            if (!lastField) {
              lastField = fields[i];
              containers.push([lastField]);
              continue;
            }

            var path = this.astar.getPath(lastField, fields[i], lists.types.catapult);

            // if fields can be reached, put it in the same container
            if (path[path.length - 1].equals(fields[i]))
              containers[containers.length - 1].push(fields[i]);
            // if not, make new container and put it in there
            else containers.push([fields[i]]);
          }

          for (var i = 1; i < containers.length - 1; i++) this.refreshAreaMap(containers[i][0]);
        };

        Game.prototype.sliceMap = function () {
          this.areaCodeCounter++;
          var startCode = this.areaCodeCounter;

          for (var y = 1; y <= this.y; y++)
            for (var x = 1; x <= this.x; x++) {
              var f = this.fields[x][y];
              if (!f.checked_ || f.checked_ < startCode) this.refreshAreaMap(f);
            }

          for (var y = 1; y <= this.y; y++)
            for (var x = 1; x <= this.x; x++) {
              var f = this.fields2x2[x][y];
              if (!f.checked_ || f.checked_ < startCode) this.refreshAreaMap(f, true);
            }
        };

        Game.prototype.refreshAreaMap = function (field, x2) {
          if (
            (!x2 && !this.blockArray[field.x][field.y]) ||
            (x2 && !this.fieldIsFree2x2(field.x, field.y))
          ) {
            field.areaCode = -1;
            return;
          }

          this.areaCodeCounter++;
          var fields = [field];
          field.checked_ = this.areaCodeCounter;

          while (fields.length > 0) {
            var f = fields.pop();
            f.areaCode = this.areaCodeCounter;

            for (var i = 0; i < f.nbs.length; i++) {
              var nb = f.nbs[i];
              if (nb.checked_ != this.areaCodeCounter) {
                fields.push(nb);
                nb.checked_ = this.areaCodeCounter;
              }
            }
          }
        };

        // kill ramp at position x, y
        Game.prototype.killRamp = function (x, y) {
          var h = this.getHMValue(x, y);

          if (h == parseInt(h)) return;

          var fields = [this.fields[x][y]];
          var fields2 = [];

          while (fields.length > 0) {
            var f = fields.pop();
            fields2.push(f);

            for (var i = 0; i < nbCoords.length; i++) {
              var nb = this.fields[f.x + nbCoords[i].x]
                ? this.fields[f.x + nbCoords[i].x][f.y + nbCoords[i].y]
                : null;
              if (
                nb &&
                !fields.contains(nb) &&
                !fields2.contains(nb) &&
                this.getHMValue(nb.x, nb.y) == h
              )
                fields.push(nb);
            }
          }

          for (var i = 0; i < fields2.length; i++) {
            // kill side cliffs
            if (!this.blockArray[fields2[i].x][fields2[i].y])
              for (var k = 0; k < this.blockingTiles.length; k++)
                if (this.blockingTiles[k].includesField(fields2[i].x, fields2[i].y)) {
                  this.blockingTiles[k].switchBlocking(false);
                  this.blockingTiles.splice(k, 1); // kill the object
                }

            fields2[i].hm = fields2[i].hm2;
          }
        };

        Game.prototype.getClosestReachableField = function (from, to, type) {
          var fields = type && type.size > 1 ? this.fields2x2 : this.fields;
          var desiredAreaCode = fields[from.x][from.y].areaCode;

          for (var i = 0; i < radialOffsets.length; i++) {
            var x = to.x + radialOffsets[i].x;
            var y = to.y + radialOffsets[i].y;

            if (fields[x] && fields[x][y] && fields[x][y].areaCode == desiredAreaCode)
              return new Field(x, y);
          }
        };

        // returns an array of all units; if type set, only return all of that type, same for player
        Game.prototype.getUnits = function (type, player) {
          var units = this.buildings.concat(this.units);
          var returnValue = [];

          for (var i = 0; i < units.length; i++)
            if ((!type || type == units[i].type) && (!player || player == units[i].owner))
              returnValue.push(units[i]);

          return returnValue;
        };

        // usually gets called when a players leaves a game
        Game.prototype.killAllUnitsOfPlayer = function (player) {
          var units = this.units2.concat(this.buildings);

          for (var i = 0; i < units.length; i++) if (units[i].owner == player) units[i].hit(); // kill the unit
        };

        // checks if a game has ended and displays statistics if yes
        Game.prototype.checkIfGameHasEnded = function () {
          var countBuildings = new Array(MAX_PLAYERS + 1);
          for (var i = 0; i < countBuildings.length; i++) countBuildings[i] = 0;

          var alliedBuildingsAlive = false;
          var enemyBuildingsAlive = false;

          for (var i = 0; i < this.buildings.length; i++)
            if (this.buildings[i].getValue("preventsLoss")) {
              countBuildings[this.buildings[i].owner.number]++;

              if (this.buildings[i].owner.isEnemyOfPlayer(PLAYING_PLAYER))
                enemyBuildingsAlive = true;
              else if (this.buildings[i].owner.controller != CONTROLLER.NONE)
                alliedBuildingsAlive = true;
            }

          for (var i = 0; i < this.units2.length; i++)
            if (this.units2[i].getValue("preventsLoss")) {
              countBuildings[this.units2[i].owner.number]++;

              if (this.units2[i].owner.isEnemyOfPlayer(PLAYING_PLAYER)) enemyBuildingsAlive = true;
              else if (this.units2[i].owner.controller != CONTROLLER.NONE)
                alliedBuildingsAlive = true;
            }

          for (var i = 1; i < this.players.length; i++)
            if (this.players[i] && this.players[i].isAlive && countBuildings[i] == 0)
              this.players[i].die();

          if (
            this.gameHasEnded ||
            PLAYING_PLAYER.controller == CONTROLLER.SPECTATOR ||
            (alliedBuildingsAlive && enemyBuildingsAlive)
          )
            return;

          this.gameHasEnded = true;

          this.playingPlayerWon = enemyBuildingsAlive ? false : true;

          // PLAYING_PLAYER.setValAndSync("unspentGold", this.owner.minedGold);
          if (!this.playingFromEditor)
            message += "gameEnd$" + (this.playingPlayerWon ? "1" : "0") + "~";
        };

        // refresh the neighbours of a field, gets called everytime a building gets destroyed or created
        Game.prototype.refreshNBSOfField = function (field) {
          var nbs = [];

          for (var x = field.x - 1; x <= field.x + 1; x++)
            for (var y = field.y - 1; y <= field.y + 1; y++)
              if (
                (x != field.x || y != field.y) &&
                x >= 0 &&
                y >= 0 &&
                x <= this.x &&
                y <= this.y &&
                this.blockArray[x][y] &&
                (x == field.x ||
                  y == field.y ||
                  (this.blockArray[field.x][y] && this.blockArray[x][field.y]))
              )
                nbs.push(this.fields[x][y]);

          field.nbs = nbs;
        };

        // refresh the neighbours of a field, gets called everytime a building gets destroyed or created (2x2)
        Game.prototype.refreshNBSOfField2x2 = function (field) {
          var nbs = [];

          for (var x = field.x - 1; x <= field.x + 1; x++)
            for (var y = field.y - 1; y <= field.y + 1; y++)
              if (
                (x != field.x || y != field.y) &&
                x >= 0 &&
                y >= 0 &&
                x <= this.x - 1 &&
                y <= this.y - 1 &&
                this.fieldIsFree2x2(x, y) &&
                (x == field.x ||
                  y == field.y ||
                  (this.fieldIsFree2x2(field.x, y) && this.fieldIsFree2x2(x, field.y)))
              )
                nbs.push(this.fields2x2[x][y]);

          field.nbs = nbs;
        };

        Game.prototype.fieldIsFree2x2 = function (x, y) {
          return (
            this.blockArray[x][y] &&
            this.blockArray[x + 1][y] &&
            this.blockArray[x][y + 1] &&
            this.blockArray[x + 1][y + 1]
          );
        };

        // gets called when a building is finished or dies, this recalculates the supply of all players and the tech conditions
        Game.prototype.updateGlobalPlayerVariables = function () {
          for (var i = 1; i < this.players.length; i++)
            if (this.players[i]) this.players[i].updateGlobalVariables();
        };

        Game.prototype.getUnitById = function (id, allUnits) {
          var unitsAndBuildings = allUnits
            ? this.units2.concat(this.buildings2)
            : this.units.concat(this.buildings2);

          for (var i = 0; i < unitsAndBuildings.length; i++)
            if (unitsAndBuildings[i].id == id) return unitsAndBuildings[i];

          return null;
        };

        Game.prototype.getNextBuildingOfType = function (
          pos,
          owner,
          onlyFinished,
          filter,
          type,
          astar,
          walkerType = lists.types.worker
        ) {
          const candidates = this.buildings
            .filter(
              (b) =>
                (!owner || owner == b.owner) &&
                (!onlyFinished || !b.isUnderConstruction) &&
                (!filter || b.type[filter]) &&
                (!type || b.type == type)
            )
            .map((b) => ({ building: b, dist: pos.distanceTo2(b.pos) }))
            .sort((b1, b2) => b1.dist - b2.dist);

          if (!astar) return candidates[0] && candidates[0].building;

          let shortestDistance = 999999;
          let building = null;

          for (const b of candidates) {
            if (b.dist < shortestDistance) {
              const distance = this.astar.getDistance(
                pos,
                b.building.pos,
                walkerType,
                b.building,
                shortestDistance,
                true
              );
              if (distance < shortestDistance) {
                building = b.building;
                shortestDistance = distance;
              }
            }
          }

          return building;
        };

        // find and return enemy unit in range with highest attack priority
        Game.prototype.getHighestPrioEnemyUnitInRange = function (unit, range, minRange, minPrio) {
          var best = null;
          var bestDistance = range;
          var bestPrio = 0;
          var units = this.units.concat(this.buildings2);
          minPrio = minPrio ? minPrio : -999999;

          for (var i = 0; i < units.length; i++) {
            var u = units[i];
            if (
              unit.owner.team.canSeeUnit(u) &&
              unit.canAttackUnit(u) &&
              unit.owner.team.canSeeUnitInvisible(u) &&
              unit.owner.isEnemyOfPlayer(u.owner)
            ) {
              var distance = unit.distanceTo(u);
              var prio = u.getAttackPrio();
              if (
                prio > minPrio &&
                distance >= minRange &&
                distance <= range &&
                (prio > bestPrio || (prio == bestPrio && distance < bestDistance)) &&
                unit.hitscan(u)
              ) {
                best = u;
                bestDistance = distance;
                bestPrio = prio;
              }
            }
          }

          return best;
        };

        Game.prototype.getGameStateCheckSum = function () {
          var checksum = 0;

          for (var i = 0; i < this.units.length; i++)
            checksum += this.units[i].pos.px + this.units[i].pos.py;

          return checksum;
        };

        Game.prototype.fieldIsBlocked = function (x, y) {
          return !(x > 0 && x <= this.x && y > 0 && y <= this.y && this.blockArray[x][y]);
        };

        Game.prototype.fieldIsBlockedForBuilding = function (x, y) {
          return !(
            x > 0 &&
            x <= this.x &&
            y > 0 &&
            y <= this.y &&
            this.blockArray[x][y] &&
            this.fields[x][y].hm == parseInt(this.fields[x][y].hm)
          );
        };

        Game.prototype.fieldIsBlockedFlying = function (x, y) {
          return !(x > 0 && x <= this.x && y > 2 && y <= this.y);
        };

        // get the center of a group of units
        Game.prototype.getCenterOfUnits = function (units) {
          var x = 0;
          var y = 0;

          for (var i = 0; i < units.length; i++) {
            x += units[i].pos.px;
            y += units[i].pos.py;
          }

          return new Field(x / units.length, y / units.length, true);
        };

        Game.prototype.getBuiltInCommand = function (type) {
          return this.commands.find((c) => c.type == type);
        };

        // issue an order to an array of units
        Game.prototype.issueOrderToUnits2 = function (
          units2,
          order,
          target,
          shift,
          autoCast,
          on,
          learn
        ) {
          if (units2.length == 0) return;

          var units = units2.slice();

          // remove uncontrollable units from ze list
          for (var i = 0; i < units.length; i++)
            if (!units[i].getValue("controllable")) {
              units.splice(i, 1);
              i--;
            }

          if (units.length == 0) return;

          // apm++
          units[0].owner.setValAndSync("apm", units[0].owner.apm + 1);

          if (autoCast) {
            if (order.hasAutocast)
              for (var i = 0; i < units.length; i++) units[i].setAndSyncAutocast(order, on);
          } else if (learn) {
            for (var i = 0; i < units.length; i++) units[i].learn(order);
          }

          // for several orders, just give every unit in the group this order, nothing more to do
          else if (
            order.type == COMMAND.IDLE ||
            order.type == COMMAND.HOLDPOSITION ||
            order.type == COMMAND.ATTACK ||
            order.type == COMMAND.DANCE
          ) {
            for (var i = 0; i < units.length; i++)
              if (units[i] != target) {
                if (order.type == COMMAND.ATTACK && !units[i].type.commands.attack)
                  units[i].issueOrder(this.getBuiltInCommand(COMMAND.MOVETO), target, false, shift);
                else units[i].issueOrder(order, target, false, shift);
              }
          }

          // cancel
          else if (order.type == COMMAND.CANCEL) {
            // check if theres a building constructing a unit
            var aUnitIsTraining = false;

            for (var i = 0; i < units.length; i++)
              if (units[i].queue && units[i].queue[0]) aUnitIsTraining = true;

            // if theres a building training a unit, find the unit with the highest remaining building time and cancel it
            if (aUnitIsTraining) {
              // find building which can make this unit and has highest building queue
              var bestValue = 0;
              var bestUnit = null;
              for (var i = 0; i < units.length; i++)
                if (units[i].queue) {
                  var value = 0;
                  for (var k = 0; k < 5; k++) value += units[i].queue[k] ? 1000000 : 0;
                  value += units[i].queue[0] ? units[i].queueFinish : 0;
                  if (value > bestValue) {
                    bestValue = value;
                    bestUnit = units[i];
                  }
                }

              if (bestUnit) bestUnit.issueOrder(order);
            }

            // if no unit is training, then send a cancel building order to one of them
            else {
              var bestUnit = null;
              for (var i = 0; i < units.length; i++)
                if (units[i].isUnderConstruction) bestUnit = units[i];

              if (bestUnit) bestUnit.issueOrder(order);
            }
          } else if (order.type == COMMAND.UNLOAD) {
            for (var i = 0; i < units.length; i++)
              units[i].issueOrder(order, target.isField ? target : null, false, shift);
          } else if (order.type == COMMAND.UNLOAD2) {
            for (var i = 0; i < units.length; i++) units[i].issueOrder(order, target);
          } else if (order.type == COMMAND.LOAD) {
            if (
              !target ||
              !target.type.cargoUse ||
              !units ||
              !units[0] ||
              units[0].owner != target.owner
            )
              return;

            var bestUnit = null;
            var bestDist = 99999999;
            for (var i = 0; i < units.length; i++)
              if (units[i].freeCargo >= target.type.cargoUse) {
                var dist = units[i].distanceTo(target);
                if (dist < bestDist) {
                  bestUnit = units[i];
                  bestDist = dist;
                }
              }

            if (bestUnit) target.issueOrder(this.getBuiltInCommand(COMMAND.MOVETO), bestUnit);
          } else if (order.type == COMMAND.UNIVERSAL && order.isInstant) {
            for (var i = 0; i < units.length; i++) units[i].issueOrder(order, target, false, shift);
          }

          // if move / amove, we have to hold the formation in several cases
          else if (
            order.type == COMMAND.MOVE ||
            order.type == COMMAND.AMOVE ||
            order.type == COMMAND.TELEPORT
          ) {
            // check for which of the units waypoints have to be set instead of move commands, do that and remove it, so it doesnt get a move command
            for (var i = 0; i < units.length; i++)
              if (units[i].type.isBuilding || units[i].queue[0]) {
                if (units[i].type.canHaveWaypoint) {
                  if (shift) {
                    if (units[i].waypoint.length < 19) units[i].waypoint.push(target);
                  } else units[i].waypoint = [target];

                  units[i].syncWaypoint();
                }

                units.splice(i, 1);
                i--;
              }

            var center = this.getCenterOfUnits(units);

            if (target.isField && units.length > 2 && center.distanceTo2(target) > 15)
              this.astar.setOrder(center, target);

            var maxDist = 0;
            for (var i = 0; i < units.length; i++)
              maxDist = Math.max(maxDist, units[i].pos.distanceTo2(center));

            // hold formation
            if (
              maxDist < 2 + Math.sqrt(units.length) * 0.65 &&
              maxDist < center.distanceTo2(target)
            )
              for (var i = 0; i < units.length; i++)
                units[i].issueOrder(
                  order,
                  target.add(center.vectorTo(units[i].pos)),
                  false,
                  shift,
                  units[i].angularVelocity ? Math.min(0.15 / units[i].angularVelocity, 3) : 0
                );
            // fuck formation
            else
              for (var i = 0; i < units.length; i++)
                units[i].issueOrder(
                  order,
                  target,
                  false,
                  shift,
                  Math.max(
                    (Math.sqrt(units.length) - 1) * 0.5,
                    units[i].angularVelocity ? Math.min(0.15 / units[i].angularVelocity, 3) : 0
                  )
                );

            this.astar.killOrder();
          }

          // if produce unit order or research upgrade order, find the building with the shortest queue, and give order to it
          else if (order.type == COMMAND.MAKEUNIT || order.upgrade || order.improvedBuilding) {
            // check for unique unit
            if (
              order.type == COMMAND.MAKEUNIT &&
              order.unitType &&
              order.unitType.uniqueAndHeroic &&
              this.unitOfTypeExistsOrIsMade(order.unitType, units[0].owner)
            )
              return;

            // find building which can make this unit and has lowest building queue
            var bestValue = 99999999;
            var bestUnit = null;
            for (var i = 0; i < units.length; i++)
              if (
                units[i].type.commands[order.id_string] &&
                !units[i].isUnderConstruction &&
                units[i].queue
              ) {
                var value = 0;
                for (var k = 0; k < 5; k++) value += units[i].queue[k] ? 1000000 : 0;

                value += units[i].queue[0] ? units[i].queueFinish : 0;

                if (value < bestValue) {
                  bestValue = value;
                  bestUnit = units[i];
                }
              }

            if (bestUnit) bestUnit.orderMake(order);
          }

          // if building create, find the closest worker and give order to him
          else if (order.type == COMMAND.MAKEBUILDING) {
            // check which of the selected units that can execute the order is the closest one
            var bestUnit = null;
            var closestDistance = 999999;
            for (var i = 0; i < units.length; i++) {
              var unit = units[i];
              var dist =
                unit.pos.distanceTo(target) +
                (unit.order && unit.order.type == COMMAND.MAKEBUILDING ? 9999 : 0);
              if (unit.type.commands[order.id_string] && dist < closestDistance) {
                closestDistance = dist;
                bestUnit = unit;
              }
            }

            if (bestUnit) bestUnit.issueOrder(order, target, false, shift);
          }

          // move to building / unit; if target is mine / cc and unit is worker, order become MINE instead of MOVETO
          else if (
            order.type == COMMAND.MOVETO ||
            order.type == COMMAND.MINE ||
            order.type == COMMAND.REPAIR
          ) {
            if (units[0].type.isBuilding) {
              for (var i = 0; i < units.length; i++) {
                if (units[i].type.canHaveWaypoint) {
                  if (shift) {
                    if (units[i].waypoint.length < 19) units[i].waypoint.push(target);
                  } else units[i].waypoint = [target];

                  units[i].syncWaypoint();
                } else units[i].issueOrder(order, target, false, shift);
              }

              return;
            }

            for (const u of units) {
              // If unit can mine and target has gold or takes gold, convert this to a mine command
              const miningGold = target?.gold;
              const returningGold =
                target?.type?.takesGold && u.carriedGoldAmount && target?.hp >= target?.type?.hp;
              if (
                order.type != COMMAND.MINE &&
                u.type.commands.mine &&
                (miningGold || returningGold)
              )
                u.issueOrder(this.getBuiltInCommand(COMMAND.MINE), target, false, shift);
              else u.issueOrder(order, target, false, shift);
            }
          }

          // flamestrike or heal or fireball, only one of the units gets the order, so find the closest one to the target, which can perform the order and give it
          else if (order.type == COMMAND.UNIVERSAL || order.type == COMMAND.ATTACK_GROUND) {
            if (!target) return;

            var targetPos = target.isField ? target : target.pos;

            // check for vision if spell required vision
            if (
              order.requiresVision &&
              targetPos &&
              !units[0].owner.team.canSeeField(targetPos.x, targetPos.y)
            ) {
              if (units[0].owner == PLAYING_PLAYER) {
                message += "addMsg$requires vision at target point$red$attentionmark~";
                message += "playSnd$" + SOUND.NEGATIVE + "$0.6~";
              }

              return;
            }

            // check which of the selected units that can execute the order is the closest one
            var bestUnit = this.getClosestUnitThatCanButDoesntExecuteOrderOfType(
              units,
              targetPos,
              order
            );

            if (bestUnit) bestUnit.issueOrder(order, target, false, shift);
          }
        };

        // returns the unit of the passed units, that is closes to pos and can execute order while priorising units that are not already executing it
        Game.prototype.getClosestUnitThatCanButDoesntExecuteOrderOfType = function (
          units,
          pos,
          order
        ) {
          var bestUnit = null;
          var closestDistance = 999999;

          for (var i = 0; i < units.length; i++) {
            var unit = units[i];
            var dist_ = unit.pos.distanceTo(pos);
            var minRange =
              order && order.type != COMMAND.ATTACK_GROUND
                ? order.getValue("minRange", unit)
                : unit.getValue("minRange") + 1;
            var dist = dist_ + (unit.order && unit.order.type == order.type ? 99999 : 0); // when they already doing this order, priorise other units
            if (dist_ > minRange + 0.3 && unit.canIssueOrder(order) && dist < closestDistance) {
              closestDistance = dist;
              bestUnit = unit;
            }
          }

          return bestUnit;
        };

        // needed when we want to make a uniqueAndHeroic unit
        Game.prototype.unitOfTypeExistsOrIsMade = function (type, player) {
          // check if the unit exists
          for (var i = 0; i < this.units2.length; i++)
            if (this.units2[i].type == type && this.units2[i].owner == player) return true;

          // check if this unit is in production
          for (var i = 0; i < this.buildings.length; i++)
            if (this.buildings[i].queue)
              for (var k = 0; k < this.buildings[i].queue.length; k++)
                if (this.buildings[i].queue[k] == type && this.buildings[i].owner == player)
                  return true;

          return false;
        };

        Game.prototype.getPlayerWithIndex = function (index) {
          return this.players[index] ? this.players[index] : this.players[0];
        };

        // checks, if a unit with radius "radius" would collide with a blocking unit (enemy unit or allied unit, that has hold position order for exapmle) if it would be at pos
        Game.prototype.unitAtPosWouldCollideWithUnits = function (
          pos,
          radius,
          enemyOf,
          ignoreUnit,
          nonBlocking
        ) {
          var units = this.getPossiblyCollidingUnitsFromPos(pos);

          for (var i = 0; i < units.length; i++)
            if (
              (units[i].blocking || units[i].owner != enemyOf) &&
              !units[i].type.flying &&
              units[i].collides() &&
              pos.distanceTo2(units[i].pos) < radius + units[i].type.radius &&
              units[i] != ignoreUnit
            )
              return true;

          return false;
        };

        Game.prototype.getPossiblyCollidingUnitsFromPos = function (pos) {
          return this.buckets2x2[getBucketX(pos.x)][getBucketY(pos.y)];
        };

        // throws unit away from originPos, depending on cmd values
        Game.prototype.bashUnit = function (u, originPos, cmd) {
          // get rnd pos to throw to
          var distMin = Math.max(cmd.bounceDistMin, 1);
          var distMax = Math.max(distMin, cmd.bounceDistMax);
          var pos = u.pos.addNormalizedVector(
            originPos,
            -(0.5 + distMin + (distMax - distMin) * ((u.pos.py * 723) % 1))
          );

          // find farest pos to throw to
          while (
            (!u.type.couldStandAt(pos) ||
              game.getAreaCode(pos.x, pos.y) != game.getAreaCode(originPos.x, originPos.y)) &&
            pos.distanceTo2(originPos) > 0.3
          )
            pos = pos.addNormalizedVector(originPos, 0.5);

          var until = ticksCounter + Math.max(Math.floor(u.pos.distanceTo2(pos) * 6), 1);

          u.reposition(pos, true);
          u.remove(true);
          message += "strtThr$" + u.id + "$" + pos.px + "$" + pos.py + "$" + until + "~";
          if (cmd.soundPerHit)
            message += "playSnd$" + cmd.soundPerHit + "$1$" + u.pos.px + "$" + u.pos.py + "~";
          this.units3.push(u);
          u.isInactiveTill = until;
          u.owner.team.updateVisionUnitDie(u);
        };

        Game.prototype.collision1 = function () {
          for (var i = 0; i < this.units.length; i++) {
            var u = this.units[i];
            u.movementspeed = Math.max(u.getValue("movementSpeed"), 0);
            u.angularVelocity = u.getValue("angularVelocity");
            u.acceleration = u.getValue("acceleration");

            if (u.acceleration || u.angularVelocity) {
              if (
                u.hasMoved &&
                !u.pos.equals(u.lastTicksPosition) &&
                u.lastFramePos2 &&
                u.angularVelocity
              ) {
                var newPoint = u.lastFramePos1.add(u.lastFramePos2.vectorTo(u.lastFramePos1));
                if (u.pos.distanceTo2(newPoint) > u.movementspeed * u.angularVelocity) {
                  var x = newPoint.px - u.lastFramePos1.px;
                  var y = newPoint.py - u.lastFramePos1.py;

                  if (x == 0) x = y == 0 ? 1 : y / 100;

                  var pointA = newPoint.add(
                    new Field(-y / x, 1, true).normalize(u.movementspeed * u.angularVelocity)
                  );
                  var pointB = newPoint.add(
                    new Field(-y / x, 1, true).normalize(-u.movementspeed * u.angularVelocity)
                  );

                  var point =
                    u.pos.distanceTo2(pointA) < u.pos.distanceTo2(pointB) ? pointA : pointB;

                  u.pos = u.lastFramePos1.addNormalizedVector(point, u.movementspeed);

                  // speed change
                  if (u.acceleration) {
                    var oldSpeed = u.lastFramePos2.vectorTo(u.lastFramePos1).getLen();
                    var newSpeed = u.lastFramePos1.vectorTo(u.pos).getLen();

                    if (newSpeed > oldSpeed + u.acceleration)
                      u.pos = u.lastFramePos1.addNormalizedVector(u.pos, oldSpeed + u.acceleration);
                    else if (newSpeed < oldSpeed - u.acceleration)
                      u.pos = u.lastFramePos1.addNormalizedVector(u.pos, oldSpeed - u.acceleration);
                  }
                }
              } else if (u.acceleration) {
                var newPoint = u.lastFramePos1.add(u.lastFramePos2.vectorTo(u.lastFramePos1));
                if (u.pos.distanceTo2(newPoint) > u.acceleration)
                  u.pos = newPoint.addNormalizedVector(u.pos, u.acceleration);
              }

              u.lastFramePos2 = u.lastFramePos1;
              u.lastFramePos1 = u.pos.getCopy();
            }

            u.hasMoved = !u.pos.equals(u.lastTicksPosition);
          }

          // check for collision / all vs all; move them away from each other in case they collided; do this twice, as it produces better results
          for (var loop = 0; loop <= 1; loop++)
            for (var k = 0; k < this.units.length; k++) {
              var u2 = this.units[k];

              var possiblyCollidingUnits = this.getPossiblyCollidingUnitsFromPos(u2.pos);

              for (var i = 0; i < possiblyCollidingUnits.length; i++) {
                var u1 = possiblyCollidingUnits[i];

                if (u1 != u2) {
                  // if both units are ground units (only then collision happens)
                  if (!u1.type.flying && !u2.type.flying) {
                    var dist = u1.pos.distanceTo2(u2.pos) - u1.type.radius - u2.type.radius;

                    // if collision (and none of the units is mining, because mining units dont collide)
                    if (dist < 0 && u1.collides() && u2.collides()) {
                      // if pos exactly the same, move one unit a little bit, otherwise game would crash (~maybe)
                      if (u1.pos.equals(u2.pos)) u1.pos = u1.pos.add3(0.1, 0.1);

                      if (u1.owner == u2.owner) {
                        // if u1 not blocking, then move it away from u2
                        if (!u1.blocking || u2.blocking)
                          u1.pos = u1.pos.addNormalizedVector(
                            u2.pos,
                            -Math.min(u1.movementspeed, -dist)
                          );

                        // do the same for the other unit
                        if (!u2.blocking || u1.blocking)
                          u2.pos = u2.pos.addNormalizedVector(
                            u1.pos,
                            -Math.min(u2.movementspeed, -dist)
                          );
                      }
                    }
                  }

                  // if both are air units and both idle, push them away from each other a little bit, so they dont stack all the time
                  else if (u1.type.flying && u2.type.flying) {
                    var dist = u1.pos.distanceTo2(u2.pos) - u1.type.radius - u2.type.radius;

                    // if collision
                    if (dist < 0) {
                      // if pos exactly the same, move one unit a little bit, otherwise game would crash (~maybe)
                      if (u1.pos.equals(u2.pos)) u1.pos = u1.pos.add3(0.1, 0.1);

                      u1.pos = u1.pos.addNormalizedVector(
                        u2.pos,
                        -Math.min(u1.movementspeed / 45, -dist)
                      );
                      u2.pos = u2.pos.addNormalizedVector(
                        u1.pos,
                        -Math.min(u2.movementspeed / 45, -dist)
                      );
                    }
                  }
                }
              }
            }

          // check for collision / all vs all; move them away from each other in case they collided; do this twice, as it produces better results
          for (var k = 0; k < this.units.length; k++) {
            var u2 = this.units[k];

            var possiblyCollidingUnits = this.getPossiblyCollidingUnitsFromPos(u2.pos);

            for (var i = 0; i < possiblyCollidingUnits.length; i++) {
              var u1 = possiblyCollidingUnits[i];

              // if both units are ground units (only then collision happens)
              if (u1 != u2 && !u1.type.flying && !u2.type.flying) {
                var dist = u1.pos.distanceTo2(u2.pos) - u1.type.radius - u2.type.radius;

                // if collision (and none of the units is mining, because mining units dont collide)
                if (dist < 0 && u1.collides() && u2.collides() && u1.owner != u2.owner) {
                  if (u1.hasMoved && !u2.hasMoved)
                    u1.pos = u1.pos.addNormalizedVector(u2.pos, dist);
                  else if (u2.hasMoved && !u1.hasMoved)
                    u2.pos = u2.pos.addNormalizedVector(u1.pos, dist);
                  else {
                    u1.pos = u1.lastTicksPosition.getCopy();
                    u2.pos = u2.lastTicksPosition.getCopy();

                    if (u1.pos.distanceTo2(u2.pos) - u1.type.radius - u2.type.radius < 0) {
                      // if still collide
                      u1.pos = u1.pos.addNormalizedVector(u2.pos, -0.1);
                      u2.pos = u2.pos.addNormalizedVector(u1.pos, -0.1);
                    }
                  }
                }
              }
            }
          }
        };

        Game.prototype.collision2 = function () {
          for (var i = 0; i < this.units.length; i++) {
            var u = this.units[i];

            var distanceMovedThisFrame = u.pos.distanceTo2(u.lastTicksPosition);

            if (!u.type.flying) {
              // limit the moved distance
              if (distanceMovedThisFrame > u.movementspeed * 1.1) {
                u.pos = u.lastTicksPosition.addNormalizedVector(u.pos, u.movementspeed * 1.1);
                distanceMovedThisFrame = u.movementspeed * 1.1;
              }
            }

            // if pos is not valid (is colliding with a static object), look for next valid pos
            var newPos = u.type.getNextFreePositionFrom(u.pos);

            if (newPos) u.pos = newPos;

            // if this unit has moved to another grid, update vision and bucket
            if (!u.pos.isSameGrid(u.lastTicksPosition)) {
              u.owner.team.updateVisionUnitMove(u);
              if (
                getBucketX(u.lastTicksPosition.x) != getBucketX(u.pos.x) ||
                getBucketY(u.lastTicksPosition.y) != getBucketY(u.pos.y)
              )
                this.moveUnitBucket(
                  u,
                  u.lastTicksPosition.x,
                  u.lastTicksPosition.y,
                  u.pos.x,
                  u.pos.y
                );
            }

            if (!u.doesntCollideWithBuildings()) {
              // check if push prio needs to be highered (unit did barely move this frame) (higher push prio units cant be pushed by lower)
              if (distanceMovedThisFrame < u.movementspeed * 0.25 && u.hasPath()) {
                u.pushPrio = u.pushPrio + 1 + Math.floor(u.pos.px * 100);
                u.lastTickSetPushPrio = ticksCounter;
              }

              // if last time push prio setted too long ago, reset it
              if (u.lastTickSetPushPrio + 10 < ticksCounter) u.pushPrio = 0;

              // if path to target pretty much blocked by units and not much distance left, remove next target node; (there might be a better way to do this)
              if (
                u.timesPushedThisTick > 0 &&
                distanceMovedThisFrame < u.movementspeed * 0.3 &&
                u.hasPath() &&
                u.pos.distanceTo2(u.path[u.path.length - 1]) < 3 &&
                (u.order.type == COMMAND.MOVE || u.order.type == COMMAND.AMOVE)
              ) {
                var countBlocks = 0;
                var countSteps = 0.01;
                var dist = u.pos.distanceTo2(u.path[u.path.length - 1]) + u.type.radius * 0.5;

                for (var d = u.type.radius * 0.75; d < dist; d += u.type.radius / 4) {
                  countSteps++;
                  var pos = u.pos.addNormalizedVector(u.path[u.path.length - 1], d);
                  var possiblyCollidingUnits_ = this.getPossiblyCollidingUnitsFromPos(pos);

                  for (var k = 0; k < possiblyCollidingUnits_.length; k++)
                    if (
                      possiblyCollidingUnits_[k].pos.distanceTo(pos) <
                      possiblyCollidingUnits_[k].type.radius + u.type.radius
                    ) {
                      countBlocks++;
                      break;
                    }
                }

                // if more than 60% of the path blocked by units, remove the next node
                if (countBlocks / countSteps > 0.6) u.path.pop();
              }
            }

            message += "uUpd$" + u.id + "$" + u.pos.px + "$" + u.pos.py + "~";
          }
        };

        // gets called every tick
        Game.prototype.update = function () {
          // update all players
          for (var i = 1; i < this.players.length; i++)
            if (
              this.players[i] &&
              this.players[i].controller == CONTROLLER.COMPUTER &&
              this.players[i].aiUpdate &&
              ticksCounter % 20 == 2
            )
              this.players[i].AIUpdate();

          for (var i = 0; i < this.units.length; i++)
            this.units[i].lastTicksPosition = new Field(
              this.units[i].pos.px,
              this.units[i].pos.py,
              true
            );

          // update all units
          var units = this.units.concat(this.units3);
          for (var i = 0; i < units.length; i++) units[i].update();

          // check push prios of all units
          this.collision1();
          this.collision2();

          // update all buildings
          for (var i = 0; i < this.buildings.length; i++) this.buildings[i].update();

          // update projectiles
          for (var i = 0; i < this.projectiles.length; i++)
            if (!this.projectiles[i].update()) {
              this.projectiles.splice(i, 1);
              i--;
            }

          // update seen by
          for (var i = 0; i < this.buildings2.length; i++) {
            var b = this.buildings2[i];
            b.refreshState();

            for (var k = 0; k < this.teams.length; k++)
              if (
                this.teams[k].hasPlayers &&
                (b.seenBy[k] != b.state || b.seenByAsBuildingType[k] != b.type)
              )
                if (!this.teams[k].checkForBuildingVision(b)) {
                  message += "killBld$" + b.id + "~";
                  this.buildings2.splice(i, 1);
                  i--;
                  k = this.teams.length;
                }
          }

          // check if game is over
          if (ticksCounter == 20 && game_state != GAME.EDITOR) this.checkIfGameHasEnded();
        };
        // represents a projectile; is created and updated every frame; only thing this does is, when it has reached its target, calls the onHit function
        function Projectile(from, to, speed, onHit, data, duration) {
          _.extend(this, data);

          this.from = from;
          this.to = to;
          this.movementSpeed = (speed ? speed : 0) / 20;
          this.ticksToDoNoDmg = speed ? 35 / speed : 0;
          this.tickOfHit = this.movementSpeed
            ? duration
              ? ticksCounter + duration
              : ticksCounter + from.distanceTo2(to) / this.movementSpeed
            : ticksCounter;
          this.startTick = ticksCounter;
          this.onHit = onHit;
        }

        Projectile.prototype.update = function () {
          if (this.hitscan) {
            var pos = this.from.addNormalizedVector(
              this.targetUnit && this.targetUnit.type ? this.targetUnit.pos : this.to,
              this.movementSpeed * (ticksCounter - this.startTick)
            );

            // dmg them unitz
            var units = game.units.concat(game.buildings);
            for (var i = 0; i < units.length; i++)
              if (
                units[i] != this.originUnit &&
                units[i].pos.distanceTo2(pos) - units[i].type.radius <= 0.05 &&
                ((this.originUnit.type.canAttackGround && !units[i].type.flying) ||
                  (this.originUnit.type.canAttackAir && units[i].type.flying))
              ) {
                message += "killPro$" + this.id + "~";

                this.to = pos;
                this.targetUnit = units[i];

                if (this.onHit) this.onHit();

                return false;
              }
          }

          if (
            this.damageWhileFlying &&
            ticksCounter > this.startTick + this.ticksToDoNoDmg &&
            this.movementSpeed
          ) {
            var pos = this.from.addNormalizedVector(
              this.to,
              this.movementSpeed * (ticksCounter - this.startTick)
            );

            // dmg them unitz
            var units = game.units.concat(game.buildings);
            for (var i = 0; i < units.length; i++)
              if (
                units[i].pos.distanceTo2(pos) - units[i].type.radius <= this.damageRadius &&
                this.order.aoeHitsUnit(this.originUnit, units[i])
              ) {
                if (units[i].getValue("isReflectingProjectiles")) {
                  var oldLen = this.from.vectorTo(pos).getLen();
                  var newTo = getRefrectionPoint(this.to, pos, units[i].pos);
                  newTo = pos.addNormalizedVector(newTo, this.to.vectorTo(pos).getLen());

                  if (newTo.distanceTo2(units[i].pos) > this.to.distanceTo2(units[i].pos)) {
                    this.to = newTo;
                    this.from = pos.addNormalizedVector(newTo, -oldLen);
                    message +=
                      "modPro$" +
                      this.id +
                      "$" +
                      this.from.px +
                      "$" +
                      this.from.py +
                      "$" +
                      newTo.px +
                      "$" +
                      newTo.py +
                      "$" +
                      units[i].id +
                      "~";
                  }

                  if (units[i].getValue("takeDamageOnBlock"))
                    units[i].hit(
                      this.originUnit,
                      this.damageWhileFlying,
                      true,
                      true,
                      this.causesFlameDeath,
                      true
                    );
                } else if (units[i].getValue("isBlockingProjectiles")) {
                  message += "killPro$" + this.id + "$" + units[i].id + "~";

                  if (units[i].getValue("takeDamageOnBlock"))
                    units[i].hit(
                      this.originUnit,
                      this.damageWhileFlying,
                      true,
                      true,
                      this.causesFlameDeath,
                      true
                    );

                  return false;
                } else
                  units[i].hit(
                    this.originUnit,
                    this.damageWhileFlying,
                    true,
                    true,
                    this.causesFlameDeath,
                    true
                  );
              }
          }

          if (ticksCounter >= this.tickOfHit) {
            if (this.onHit) this.onHit();
            return false;
          }

          return true;
        };
        // a team pretty much only holds information regarding the vision
        function Team(nr) {
          this.number = nr;
          this.hasPlayers = false;

          // fog mask & block array
          this.mask = [];
          for (var x = 0; x <= game.x + 1; x++) {
            this.mask[x] = [];
            for (var y = 0; y <= game.y + 1; y++) this.mask[x][y] = 0;
          }
        }

        // set vision true or false for a specific field
        Team.prototype.setVision = function (x, y, vision) {
          if (this.mask[x][y] == 0 && vision == 1) return;

          if (this == PLAYING_PLAYER.team && this.mask[x][y] != vision)
            changeFog += x + "$" + y + "$" + vision + "$";

          this.mask[x][y] = vision;

          // refresh neutral vision
          var newVision = 0;
          for (var i = 1; i < game.teams.length; i++)
            newVision = Math.max(newVision, game.teams[i].mask[x][y]);

          if (game.teams[0] == PLAYING_PLAYER.team && game.teams[0].mask[x][y] != newVision)
            changeFog += x + "$" + y + "$" + newVision + "$";

          game.teams[0].mask[x][y] = newVision;
        };

        // refresh the whole vision
        Team.prototype.refreshVision = function () {
          for (var x = 1; x <= game.x; x++) {
            this.mask[x] = [];
            for (var y = 1; y <= game.y; y++) this.updateVisionField(x, y);
          }
        };

        Team.prototype.canSeeField = function (x, y) {
          return this.mask[x] && this.mask[x][y] > 1;
        };

        Team.prototype.canSeeUnitInvisible = function (unit) {
          // return true;
          return (
            unit.isDetectedUntil >= ticksCounter ||
            unit.owner.team == this ||
            unit.owner.team.number == 0 ||
            !unit.getValue("isInvisible")
          );
        };

        // returns true, if the team can see a specific unit (if onlyNow is flagged, only return true, if the unit is currently in the LoS of the team)
        Team.prototype.canSeeUnit = function (unit, onlyNow) {
          // if the team owns this unit, return true of course
          if (unit.owner.team == this) return true;

          // if its a unit, return true when the units is inside of the line of sight of the team
          if (!unit.type.isBuilding)
            return (
              this.mask[unit.pos.x][unit.pos.y] > 1 ||
              unit.revealedToTeamUntil[this.number] >= ticksCounter
            );
          // if its a building
          else {
            if (unit.owner.isRevealed) return true;

            // if not only now, just return seenBy
            if (!onlyNow) return unit.seenBy[this.number];

            // if only now, check line of sight for all the fields, the building contains; also set seen by = true, if it is seen
            for (var x = unit.x; x < unit.x + unit.type.size; x++)
              for (var y = unit.y; y < unit.y + unit.type.size; y++)
                if (this.mask[x][y] > 1) return true;

            return false;
          }
        };

        Team.prototype.setAndSyncVisionState = function (building, state) {
          message += "tmBldVsnSt$" + this.number + "$" + building.id + "$" + building.state + "~";
          building.seenBy[this.number] = building.state;
        };

        Team.prototype.checkForBuildingVision = function (building) {
          // check line of sight for all the fields, the building contains; also set seen by = true, if it is seen
          var canSee = this.number == 0 || this == building.owner.team || building.owner.isRevealed;

          if (!canSee)
            for (var x = building.x; x < building.x + building.type.size; x++)
              for (var y = building.y; y < building.y + building.type.size; y++)
                if (this.mask[x][y] > 1) {
                  canSee = true;
                  x = 9999;
                  y = 9999;
                }

          if (canSee) {
            if (building.seenByAsBuildingType[this.number] != building.type) {
              message += "tmBldSeenAs$" + this.number + "$" + building.id + "~";
              building.seenByAsBuildingType[this.number] = building.type;
            }

            if (!building.isAlive) {
              this.setAndSyncVisionState(building);

              // delete from waypoints and target unitz
              var units = game.units2.concat(game.buildings);
              for (var i = 0; i < units.length; i++) {
                if (units[i].owner.team == this && units[i].waypoint)
                  for (var k = 0; k < units[i].waypoint.length; k++)
                    if (units[i].waypoint[k] == building) {
                      units[i].waypoint.splice(k, 1);
                      k--;
                    }

                if (units[i].owner.team == this && units[i].targetUnit == building)
                  units[i].targetUnit = null;
              }

              // check if errbody knows this is dead; if yes, return false, so this building will be finally deleted
              var errbodyKnowsThisIsDead = true;
              for (var i = 1; i < game.teams.length; i++)
                if (game.teams[i].hasPlayers && building.seenBy[game.teams[i].number])
                  errbodyKnowsThisIsDead = false;

              if (errbodyKnowsThisIsDead) return false;
            } else {
              if (!building.seenBy[this.number])
                message += "swBlck4Tm$" + this.number + "$1$" + building.id + "~";

              this.setAndSyncVisionState(building);
            }

            return true;
          }

          return true;
        };

        // this is called when a units field changed, so the fog mask can be updated
        Team.prototype.updateVisionUnitMove = function (unit) {
          var x = 0;
          var y = 0;

          // recalculate all fields that are barely outside the units vision range
          for (var i = 0; i < unit.type.outerVisionBorder.length; i++) {
            x = unit.pos.x + unit.type.outerVisionBorder[i].x;
            y = unit.pos.y + unit.type.outerVisionBorder[i].y;

            if (x > 0 && y > 0 && x <= game.x && y <= game.y && this.mask[x][y] >= 2)
              this.updateVisionField(x, y);
          }

          // check all fields inside vision
          for (var i = 0; i < unit.type.wholeVisionCircle.length; i++) {
            x = unit.pos.x + unit.type.wholeVisionCircle[i].x;
            y = unit.pos.y + unit.type.wholeVisionCircle[i].y;

            if (x > 0 && y > 0 && x <= game.x && y <= game.y) {
              if (
                this.mask[x][y] < 2 &&
                game.getHMValue5(unit.pos.x, unit.pos.y) + unit.type.visionHeightBonus + 0.5 >=
                  game.getHMValue5(x, y)
              )
                this.setVision(x, y, 2);
              else if (
                this.mask[x][y] >= 2 &&
                game.getHMValue5(unit.pos.x, unit.pos.y) + unit.type.visionHeightBonus + 0.5 <
                  game.getHMValue5(x, y)
              )
                this.updateVisionField(x, y);
            }
          }
        };

        // this is called when a unit dies, so the fog mask can be updated
        Team.prototype.updateVisionUnitDie = function (unit, pos) {
          var x = 0;
          var y = 0;

          var pos = pos ? pos : unit.pos;

          // recalculate all fields that are in the units vision range (+1)
          for (var i = 0; i < unit.type.wholeVisionCirclePlus1.length; i++) {
            x = pos.x + unit.type.wholeVisionCirclePlus1[i].x;
            y = pos.y + unit.type.wholeVisionCirclePlus1[i].y;

            if (x > 0 && y > 0 && x <= game.x && y <= game.y && this.mask[x][y] >= 2)
              this.updateVisionField(x, y);
          }
        };

        // this is called when a unit spawns, so the fog mask can be updated
        Team.prototype.updateVisionUnitSpawn = function (unit) {
          var x = 0;
          var y = 0;

          // set all fields that are in the units vision range to true
          for (var i = 0; i < unit.type.wholeVisionCircle.length; i++) {
            x = unit.pos.x + unit.type.wholeVisionCircle[i].x;
            y = unit.pos.y + unit.type.wholeVisionCircle[i].y;

            if (
              x > 0 &&
              y > 0 &&
              x <= game.x &&
              y <= game.y &&
              this.mask[x][y] < 2 &&
              unit.type.canSeePosFromPos(unit.pos, new Field(x, y), unit.isUnderConstruction)
            )
              this.setVision(x, y, 2);
          }
        };

        // update a single fields vision, checking if a friendly unit or building is in range
        Team.prototype.updateVisionField = function (x, y) {
          // check if allied unit is near
          for (var i = 0; i < game.units.length; i++)
            if (game.units[i].owner.team == this && game.units[i].canSeePos(x, y))
              return this.setVision(x, y, 2);

          // check if allied building is near
          for (var i = 0; i < game.buildings.length; i++)
            if (game.buildings[i].owner.team == this && game.buildings[i].canSeePos(x, y))
              return this.setVision(x, y, 2);

          this.setVision(x, y, ticksCounter > 1 ? 1 : 0);
        };
        function AStar() {
          this.storedPaths = [];
          this.storedStarts = [];
          this.storedPathGridSizes = [];
          this.currentTarget = null;
        }

        AStar.prototype.setOrder = function (target) {
          this.currentTarget = target;
        };

        AStar.prototype.killOrder = function () {
          this.currentTarget = null;
          this.storedPaths = [];
          this.storedStarts = [];
          this.storedPathGridSizes = [];
        };

        AStar.prototype.getDistance = function (from, to, type, ignoreUnit, maxDist, exact) {
          const path = this.getPath(from, to, type, ignoreUnit, maxDist);
          if (!path) return 999999;
          if (exact && !path[0].equals(to)) return 999999;
          return getLenOfPath(from, path);
        };

        // calculate path to target position, using A*; optional ignoreUnit: ignore this unit while finding path (usually when finding a path to this unit, ignore it)
        AStar.prototype.getPath = function (from, to, type, ignoreUnit) {
          // if its a flying unit, we dont need to calculate a path
          if (type.flying || type.noCollision) return [type.getNextFreePositionFrom(to, null, 100)];

          // if the ignore unit is not alive anymore (a dead building still seen by some player because he doesnt know its dead), dont unblock / block
          ignoreUnit = ignoreUnit && ignoreUnit.isAlive ? ignoreUnit : null;

          var gridSize = Math.ceil(type.size);
          const x2 = gridSize > 1;

          // check, if this is a similar path to the path that was calculated before; if yes, dont recalc, but use the old one
          if (this.currentTarget && this.storedStarts.length > 0) {
            // check, which of the stores paths is the closest
            var closestDist = 999;
            var closestStartIndex = -1;
            for (var i = 0; i < this.storedStarts.length; i++) {
              if (this.storedPathGridSizes[i] == gridSize) {
                var dist = from.distanceTo2(this.storedStarts[i]);
                if (dist < closestDist) {
                  closestDist = dist;
                  closestStartIndex = i;
                }
              }
            }

            if (closestDist < 3) {
              // create copy of last path
              var path = this.storedPaths[closestStartIndex].slice();

              // replace target with this target
              path[0] = type.getNextFreePositionFrom(to, null, 30);

              if (!path[0]) path[0] = to;

              return path;
            }
          }

          // if the unit is bigger then 1 field, use 2x2 grid instead of the normal 1x1
          var fields = x2 ? game.fields2x2 : game.fields;

          // deactivate blocking for the ignore unit, in case there is one
          if (ignoreUnit && ignoreUnit.type.isBuilding) ignoreUnit.switchBlocking(false);

          var openList = [];
          var closedList = [];
          var exactTarget = type.getNextFreePositionFrom(to, null, 30);
          var exactStart = from.getCopy();

          if (!exactTarget) {
            if (ignoreUnit && ignoreUnit.type.isBuilding) ignoreUnit.switchBlocking(true);
            return [from];
          }

          if (fields[from.x][from.y].areaCode == -1)
            for (var i = 0; i < nbCoords.length; i++)
              if (game.getAreaCode(from.x + nbCoords[i].x, from.y + nbCoords[i].y, type) != -1) {
                from = new Field(from.x + nbCoords[i].x, from.y + nbCoords[i].y);
                i = nbCoords.length;
              }

          // if target not reachable, find closest reachable target
          const isUnreachableLocationOrUnit =
            fields[from.x][from.y].areaCode != fields[exactTarget.x][exactTarget.y].areaCode &&
            (fields[exactTarget.x][exactTarget.y].areaCode != -1 ||
              !ignoreUnit ||
              !ignoreUnit.type.isBuilding);
          const isUnreachableBuilding =
            ignoreUnit && ignoreUnit.type.isBuilding && !ignoreUnit.isReachableFromPos(from, x2);
          if (isUnreachableLocationOrUnit || isUnreachableBuilding)
            exactTarget = game.getClosestReachableField(from, exactTarget, type);

          if (!exactTarget) {
            if (ignoreUnit && ignoreUnit.type.isBuilding) ignoreUnit.switchBlocking(true);
            return startNode;
          }

          var targetNode = fields[exactTarget.x][exactTarget.y];
          var startNode = x2
            ? fields[Math.floor(from.px + 0.5)][Math.floor(from.py + 0.5)]
            : fields[exactStart.x][exactStart.y];

          if (targetNode == startNode) {
            // if target == start, return exact target if valid, else empty array => no moving
            if (ignoreUnit && ignoreUnit.type.isBuilding) ignoreUnit.switchBlocking(true);
            return [exactTarget];
          }

          // insert Start Node as closed and nB's as open
          openList.push(startNode);
          startNode.g = 0;
          startNode.h = startNode.distanceTo(targetNode);
          startNode.f = startNode.h;
          startNode.isOnOpenList = true;

          while (true) {
            // if open list empty => target not reachable
            if (openList.length == 0) {
              // find closest Field from closedList, put it back on openList, so it will be found as next Field to check
              var closestIndex = 0;
              for (var i = 0; i < closedList.length; i++)
                if (
                  closedList[i].distanceTo(targetNode) <
                  closedList[closestIndex].distanceTo(targetNode)
                )
                  closestIndex = i;

              openList.push(closedList[closestIndex]);
              targetNode = closedList[closestIndex];
              exactTarget = targetNode;
            }

            // get 'best' field from OpenList
            var currentNodeIndex = 0;
            for (var i = 1; i < openList.length; i++)
              if (openList[i].f < openList[currentNodeIndex].f) currentNodeIndex = i;
            var currentNode = openList[currentNodeIndex];

            for (var i = 0; i < currentNode.nbs.length; i++) {
              var nb = currentNode.nbs[i];

              // if node already closed, skip
              if (nb.closed) continue;

              if (!nb.isOnOpenList) {
                // if the field is not on the list yet, add it
                openList.push(nb);
                nb.isOnOpenList = true;
                nb.parent = currentNode;
                nb.g = currentNode.g + nb.distanceTo(currentNode);
                nb.h = nb.distanceTo(targetNode);
                nb.f = nb.g + nb.h;
              } else {
                var new_g = currentNode.g + currentNode.distanceTo(nb);
                if (new_g < nb.g) {
                  // new way to tempField is better than the existing one
                  nb.g = new_g;
                  nb.f = new_g + nb.h;
                  nb.parent = currentNode; // set this Field as new parent, because it offers the best way
                }
              }
            }

            // move field from open to closed list
            openList.splice(currentNodeIndex, 1);
            closedList.push(currentNode);
            currentNode.isOnOpenList = false;
            currentNode.closed = true;

            if (currentNode == targetNode) {
              // we have found the best way
              var path = [targetNode];
              while (
                path[path.length - 1] &&
                path[path.length - 1].parent != startNode &&
                path[path.length - 1].parent &&
                path.length < game.x * game.y
              )
                path.push(path[path.length - 1].parent);

              // add exact target as final target, if passable
              if (type.couldStandAt(exactTarget)) path.splice(0, 0, exactTarget);

              // path smoothing
              var index = path.length - 2; // highest Field, that has to be checked
              while (index >= 0) {
                if (exactStart.raytrace(path[index], type.radius)) path.splice(index + 1, 1);
                else exactStart = path[index + 1];
                index--;
              }

              // clear all the fields 'isOnOpenList' & 'closed' values
              var usedFields = openList.concat(closedList);
              for (var i = 0; i < usedFields.length; i++) {
                usedFields[i].isOnOpenList = false;
                usedFields[i].closed = false;
              }

              // reactivate blocking for the ignore unit, in case there is one
              if (ignoreUnit && ignoreUnit.type.isBuilding) ignoreUnit.switchBlocking(true);

              // save path
              if (this.currentTarget) {
                this.storedPaths.push(path);
                this.storedStarts.push(from);
                this.storedPathGridSizes.push(gridSize);
              }

              // return path
              return path;
            }
          }
        };

        function Command(data) {
          this.manaCost = [0];
          this.goldCost = 0;
          this.range = [0];
          this.minRange = [-999];
          this.aoeRadius = [0];
          this.damage = [0];
          this.projectileSpeed = [8];
          this.hitsFriendly = true;
          this.hitsEnemy = true;
          this.hitsSelf = true;
          this.effectScale = 1;
          this.projectileAoeRadius = [0];
          this.projectileDamage = [0];
          this.modifiers = [];
          this.summonedUnits = [];
          this.autocastConditions = "";
          this.cooldown = 0;
          this.cooldown2 = 0;
          this.attackEffectInit = "spell";
          this.bounceDistMax = 0;
          this.bounceDistMin = 0;

          _.extend(this, data);

          // copy arrays (so they dont get only referenced)
          var thisRef = this;
          _.each(data, function (val, key) {
            thisRef[key] =
              Object.prototype.toString.call(thisRef[key]) === "[object Array]"
                ? thisRef[key].slice()
                : thisRef[key];
          });

          this.isCommand = true;

          this.id = game.global_command_id++;

          if (!IS_LOGIC && this.image) {
            this.buttons = [new Button(this)];
            interface_.buttons.push(this.buttons[0]);

            if (this.requiredLevels && this.requiredLevels.length > 0) {
              this.buttons.push(new Button(this, true));
              interface_.buttons.push(this.buttons[1]);
            }
          }
        }

        Command.prototype.updateHotkey = function (hotkey) {
          this.hotkey = hotkey;
          this.buttons.forEach((b) => b.refresh());
        };

        Command.prototype.compileCondition0 = function () {
          if (this.autocastConditions && this.autocastConditions.length > 0) {
            var comp = this.compileCondition(this.autocastConditions);

            if (comp && comp[0])
              eval("this.autocastCondition = function(u, uthis){return " + comp[1] + ";};");
          }
        };

        Command.prototype.getTitleImage = function (nr) {
          return this.image.getTitleImage(nr);
        };

        // returns an 2 len array; 1st element: false on error, true on no error; 2nd element: error msg on error, finished language on no error
        Command.prototype.compileCondition = function (str) {
          if (!str || str.length == 0) return [0, "no content"];

          var lastType = "";
          var word = "";
          var words = [];

          str += " ";

          for (var i = 0; i < str.length; i++) {
            var char_ = str.substr(i, 1);

            var type_ = "";

            if (char_.match(/[a-zA-Z_]/) == char_) type_ = "char";
            else if (char_.match(/[0-9]/) == char_) type_ = "numerical";
            else if (char_.match(/[<>!=]/) == char_) type_ = "compare";
            else if (char_.match(/[\-+*/]/) == char_) type_ = "arithmetic";
            else if (char_.match(/[\.]/) == char_)
              type_ = lastType == "char" ? "char" : "numerical";
            else if (char_.match(/[&|]/) == char_) type_ = "conjunction";
            else if (char_ == " ") type_ = "undefined";
            else return [false, "invalid character: " + char_];

            if (type_ == lastType || lastType == "") word += char_;
            else {
              if (lastType != "undefined") {
                if (lastType == "numerical") {
                  var word2 = parseFloat(word);

                  if (word2.isNaN) return [false, word2 + " is not a number"];
                  else word = word2;
                } else if (lastType == "compare") {
                  if (
                    word != "<" &&
                    word != ">" &&
                    word != "<=" &&
                    word != ">=" &&
                    word != "=" &&
                    word != "==" &&
                    word != "!="
                  )
                    return [
                      false,
                      word + " is not a valid comparison expression (allowed are: < > <= >= == !=)",
                    ];

                  if (word == "=") word = "==";
                } else if (lastType == "arithmetic") {
                  if (word.length != 1)
                    return [
                      false,
                      word + " is not a valid arithmetic expression (allowed are: + - / *)",
                    ];
                } else if (lastType == "conjunction") {
                  if (word != "&&" && word != "||")
                    return [false, word + " is not a valid conjunction (allowed are: && ||)"];
                } else if (lastType == "char") {
                  var countDots = (word.match(/\./g) || []).length > 0;

                  if (countDots == 1) {
                    if (
                      word.substr(0, 5) != "type." &&
                      word.substr(0, 5) != "this." &&
                      word.substr(0, 6) != "owner."
                    )
                      return [false, word + " is not a valid field name"];
                  } else if (countDots > 2) return [false, word + " is not a valid field name"];

                  if (word != "true" && word != "false")
                    word = word.substr(0, 5) != "this." ? "u." + word : "u" + word;
                }

                words.push({
                  word: word,
                  type: lastType == "char" || lastType == "numerical" ? "expression" : lastType,
                });
              }

              word = char_;
            }

            lastType = type_;
          }

          var stateMachine = {
            start: {
              expression: "exp1",
            },

            exp1: {
              arithmetic: "start",
              compare: "c",
            },

            c: {
              expression: "exp2",
            },

            exp2: {
              isFinish: true,
              arithmetic: "c",
              conjunction: "start",
            },
          };

          var state = stateMachine.start;
          var language = "";

          for (var i = 0; i < words.length; i++) {
            language += words[i].word + " ";

            if (state[words[i].type]) state = stateMachine[state[words[i].type]];
            else return [false, "syntax error; unexpected word: " + words[i].word];
          }

          if (!state.isFinish) return [false, "syntax error; expecting at least one more word"];

          return [true, language];
        };

        Command.prototype.canTargetUnit = function (u) {
          for (var k = 0; k < this.targetRequiremementsArray.length; k++) {
            var met = false;

            for (var i = 0; i < this.targetRequiremementsArray[k].length; i++)
              if (this.targetRequiremementsArray[k][i].func(u)) met = true;

            if (!met) return false;
          }

          return true;
        };

        Command.prototype.replaceReferences = function () {
          if (typeof this.unitType == "string") this.unitType = lists.types[this.unitType];

          if (typeof this.improvedBuilding == "string")
            this.improvedBuilding = lists.types[this.improvedBuilding];

          if (typeof this.upgrade == "string") this.upgrade = lists.types[this.upgrade];

          if (typeof this.image == "string")
            this.image = lists.imgs[this.image]
              ? lists.imgs[this.image]
              : lists.imgs.attentionmarkYellow;

          if (this.modifiers)
            for (var k = 0; k < this.modifiers.length; k++)
              if (typeof this.modifiers[k] == "string")
                this.modifiers[k] = lists.types[this.modifiers[k]];

          if (this.modifiersSelf)
            for (var k = 0; k < this.modifiersSelf.length; k++)
              if (typeof this.modifiersSelf[k] == "string")
                this.modifiersSelf[k] = lists.types[this.modifiersSelf[k]];

          if (this.summonedUnits)
            for (var k = 0; k < this.summonedUnits.length; k++)
              if (typeof this.summonedUnits[k] == "string")
                this.summonedUnits[k] = lists.types[this.summonedUnits[k]];

          if (this.requirementType)
            for (var k = 0; k < this.requirementType.length; k++)
              if (typeof this.requirementType[k] == "string")
                this.requirementType[k] = lists.types[this.requirementType[k]];

          this.targetRequiremementsArray = [];

          if (this.targetRequirements1 && this.targetRequirements1.length > 0)
            this.targetRequiremementsArray.push(this.targetRequirements1);

          if (this.targetRequirements2 && this.targetRequirements2.length > 0)
            this.targetRequiremementsArray.push(this.targetRequirements2);

          if (this.targetRequirements3 && this.targetRequirements3.length > 0)
            this.targetRequiremementsArray.push(this.targetRequirements3);

          for (var i = 0; i < this.targetRequiremementsArray.length; i++)
            for (var k = 0; k < this.targetRequiremementsArray[i].length; k++)
              if (typeof this.targetRequiremementsArray[i][k] == "string")
                this.targetRequiremementsArray[i][k] =
                  targetRequirements[this.targetRequiremementsArray[i][k]];
        };

        Command.prototype.getValue = function (field, unit) {
          if (field == "summonedUnits" || field == "modifiers" || field == "modifiersSelf")
            return this[field][Math.min(this[field].length - 1, unit.abilityLevels[this.id] - 1)];

          return (
            (unit.abilityLevels &&
            (field == "manaCost" ||
              field == "range" ||
              field == "minRange" ||
              field == "damage" ||
              field == "aoeRadius" ||
              field == "projectileSpeed" ||
              field == "projectileDamage" ||
              field == "projectileAoeRadius")
              ? this[field][Math.min(this[field].length - 1, unit.abilityLevels[this.id] - 1)]
              : this[field]) +
            (unit.owner
              ? unit.owner.getValueModifier(field, this)
              : unit.getValueModifier(field, this))
          );
        };

        Command.prototype.getDataFields = function () {
          return list_ability_fields;
        };

        Command.prototype.addToLists = function () {
          lists.types[this.id_string] = this;
          lists.commands[this.id_string] = this;
        };

        Command.prototype.getBasicType = function () {
          for (var i = 0; i < basicCommands.length; i++)
            if (basicCommands[i].id_string == this.id_string) return basicCommands[i];

          return false;
        };

        Command.prototype.aoeHitsUnit = function (caster, target) {
          if (caster == target) return this.hitsSelf;

          var isEnemy = caster.owner.isEnemyOfPlayer(target.owner);

          if ((isEnemy && !this.hitsEnemy) || (!isEnemy && !this.hitsFriendly)) return false;

          if (this.targetFilters)
            for (var i = 0; i < this.targetFilters.length; i++)
              if (!target.type[this.targetFilters[i]]) return false;

          if (this.targetFiltersExclude)
            for (var i = 0; i < this.targetFiltersExclude.length; i++)
              if (target.type[this.targetFiltersExclude[i]]) return false;

          return true;
        };

        function Upgrade(data) {
          _.extend(this, data);

          // copy arrays (so they dont get only referenced)
          var thisRef = this;
          _.each(data, function (val, key) {
            thisRef[key] =
              Object.prototype.toString.call(thisRef[key]) === "[object Array]"
                ? thisRef[key].slice()
                : thisRef[key];
          });

          this.isUpgrade = true;
        }

        Upgrade.prototype.getValue = function (value, owner, alsoUnderConstruction) {
          return typeof this[value] === "number"
            ? this[value] + owner.getValueModifier(value, this, alsoUnderConstruction)
            : this[value];
        };

        Upgrade.prototype.replaceReferences = function () {
          if (this.effectsTypes)
            for (var k = 0; k < this.effectsTypes.length; k++)
              if (typeof this.effectsTypes[k] == "string")
                this.effectsTypes[k] = lists.types[this.effectsTypes[k]];

          if (typeof this.image == "string")
            this.image = lists.imgs[this.image]
              ? lists.imgs[this.image]
              : lists.imgs.attentionmarkYellow;
        };

        Upgrade.prototype.getDataFields = function () {
          return list_upgrade_fields;
        };

        Upgrade.prototype.getTitleImage = function (nr) {
          return this.image.getTitleImage(nr);
        };

        Upgrade.prototype.addToLists = function () {
          lists.types[this.id_string] = this;
          lists.upgrades[this.id_string] = this;
          lists.buildingsUpgrades[this.id_string] = this;
        };

        Upgrade.prototype.getBasicType = function () {
          for (var i = 0; i < basicUpgrades.length; i++)
            if (basicUpgrades[i].id_string == this.id_string) return basicUpgrades[i];

          return false;
        };

        function Modifier(data) {
          this.isModifier = true;

          this.maxStack = 1;
          this.auraHitsFriendly = true;
          this.auraHitsAllied = true;
          this.auraHitsEnemy = true;
          this.auraHitsSelf = true;

          _.extend(this, data);

          // copy arrays (so they dont get only referenced)
          var thisRef = this;
          _.each(data, function (val, key) {
            thisRef[key] =
              Object.prototype.toString.call(thisRef[key]) === "[object Array]"
                ? thisRef[key].slice()
                : thisRef[key];
          });
        }

        Modifier.prototype.getDataFields = function () {
          return list_modifiers_fields;
        };

        Modifier.prototype.replaceReferences = function () {
          if (typeof this.image == "string")
            this.image = lists.imgs[this.image]
              ? lists.imgs[this.image]
              : lists.imgs.attentionmarkYellow;

          if (this.unitImg && typeof this.unitImg == "string")
            this.unitImg = lists.imgs[this.unitImg]
              ? lists.imgs[this.unitImg]
              : lists.imgs.attentionmarkYellow;

          if (this.auraModifiers)
            for (var k = 0; k < this.auraModifiers.length; k++)
              if (typeof this.auraModifiers[k] == "string")
                this.auraModifiers[k] = lists.types[this.auraModifiers[k]];

          if (this.killModifiers)
            for (var k = 0; k < this.killModifiers.length; k++)
              if (typeof this.killModifiers[k] == "string")
                this.killModifiers[k] = lists.types[this.killModifiers[k]];

          if (this.addCommands)
            for (var k = 0; k < this.addCommands.length; k++)
              if (typeof this.addCommands[k] == "string")
                this.addCommands[k] = lists.types[this.addCommands[k]];

          if (this.disabledCommands)
            for (var k = 0; k < this.disabledCommands.length; k++)
              if (typeof this.disabledCommands[k] == "string")
                this.disabledCommands[k] = lists.types[this.disabledCommands[k]];
        };

        Modifier.prototype.addToLists = function () {
          lists.types[this.id_string] = this;
          lists.modifiers[this.id_string] = this;
        };

        Modifier.prototype.getBasicType = function () {
          for (var i = 0; i < basicModifiers.length; i++)
            if (basicModifiers[i].id_string == this.id_string) return basicModifiers[i];

          return false;
        };

        Modifier.prototype.getValue = function (field, owner) {
          return this[field] + owner.getValueModifier(field, this);
        };

        Modifier.prototype.getTitleImage = function (nr) {
          return this.image.getTitleImage(nr);
        };

        Modifier.prototype.aoeHitsUnit = function (caster, target) {
          if (!this.auraHitsSelf && caster == target) return false;

          var isEnemy = caster.owner.isEnemyOfPlayer(target.owner);
          var sameTeam = caster.owner.team == target.owner.team;

          if (
            (isEnemy && !this.auraHitsEnemy) ||
            (!isEnemy && sameTeam && !this.auraHitsFriendly) ||
            (!isEnemy && !sameTeam && !this.auraHitsAllied)
          )
            return false;

          if (this.auraTargetFilters)
            for (var i = 0; i < this.auraTargetFilters.length; i++)
              if (!target.type[this.auraTargetFilters[i]]) return false;

          if (this.auraTargetFiltersExclude)
            for (var i = 0; i < this.auraTargetFiltersExclude.length; i++)
              if (target.type[this.auraTargetFiltersExclude[i]]) return false;

          return true;
        };

        self.addEventListener(
          "message",
          function (e) {
            if (e.data.what == "start-game") {
              network_game = e.data.network_game;
              game_state = e.data.game_state;
              networkPlayerName = e.data.networkPlayerName;

              if (e.data.fromEditor) game_state = GAME.EDITOR;

              game = new Game();
              game.loadMap(
                e.data.map,
                e.data.players,
                e.data.aiRandomizer,
                e.data.ticksCounter,
                e.data.editorLoad
              );

              if (e.data.fromEditor) {
                game.playingFromEditor = true;
                game_state = GAME.PLAYING;
              }

              incomingOrders = e.data.incomingOrders ? e.data.incomingOrders : {};
              playerLefts = e.data.playerLefts ? e.data.playerLefts : {};
            } else if (e.data.what == "end-game") {
              game_state = GAME.LOBBY;
              self.postMessage("gameData$" + JSON.stringify(incomingOrders));
            } else if (e.data.what == "order") {
              if (incomingOrders[ticksCounter + 1])
                incomingOrders[ticksCounter + 1].push(e.data.msg);
              else incomingOrders[ticksCounter + 1] = [e.data.msg];
            } else if (e.data.what == "updateDataField") {
              var type = lists.types[e.data.type];

              if (e.data.commands) {
                var arr = {};
                for (var i = 0; i < e.data.val.length; i++)
                  arr[e.data.val[i]] = lists.types[e.data.val[i]];
                type[e.data.field] = arr;
              } else type[e.data.field] = e.data.val;

              calculateTypesTickValues();

              // replacing references
              _.each(lists.types, function (t) {
                if (t.replaceReferences) t.replaceReferences();
              });
            } else if (e.data.what == "aiFunc") {
              try {
                const aiNum = customAIFunctions.length;
                const scriptURL = URL.createObjectURL(
                  new Blob([`function customAI${aiNum}(scope) { ${e.data.data} };`], {
                    type: "text/javascript",
                  })
                );
                importScripts(scriptURL);
                customAIFunctions.push(eval(`customAI${aiNum}`));
                self.postMessage("aiLoaded");
              } catch (e) {
                self.postMessage("displayInfoMsg$Error parsing AI file: " + e);
              }
            } else if (e.data.what == "newType") {
              var o = null;

              var type = lists.types[e.data.type];

              if (e.data.listIndex == 0) {
                o = new UnitType(type);
                game.unitTypes.push(o);
              } else if (e.data.listIndex == 1) {
                o = new BuildingType(type);
                game.buildingTypes.push(o);
              } else if (e.data.listIndex == 2) {
                o = new Command(type);
                game.commands.push(o);
              } else if (e.data.listIndex == 3) {
                o = new Upgrade(type);
                game.upgrades.push(o);
              } else if (e.data.listIndex == 4) {
                o = new Modifier(type);
                game.modifiers.push(o);
              }

              o.id_string = e.data.id_string;
              o.name = e.data.name;

              lists.types[o.id_string] = o;

              calculateTypesTickValues();
            } else if (e.data.what == "deleteUnitEditor") {
              for (var i = 0; i < e.data.units.length; i++) {
                var msg = e.data.units[i];
                var u = null;

                if (msg.hasId) u = game.getUnitById(msg.id);
                else {
                  var tiles = game.blockingTiles;
                  for (var k = 0; k < tiles.length; k++)
                    if (
                      tiles[k].pos.px == msg.x &&
                      tiles[k].pos.py == msg.y &&
                      tiles[k].type.name == msg.type
                    )
                      u = tiles[k];
                }

                if (u) {
                  if (u.type.isBuilding) {
                    u.remove(true);
                    game.buildings2.erease(u);
                  } else if (u.type.isUnit) {
                    u.remove(true);
                    game.units2.erease(u);
                  } else if (u.type.blocking) game.blockingTiles.erease(u);

                  // unblock fields in game block array (if building or tile and non-blocking)
                  if ((u.type.isBuilding || u.type.isTile) && !u.type.ignoreGrid)
                    u.switchBlocking(false);
                }
              }

              self.postMessage("editorUnitsKilled");
            } else if (e.data.what == "editorClick") {
              var blocked = false;

              var x = e.data.x;
              var y = e.data.y;
              var field = new Field(x, y, true);

              var type = e.data.type ? e.data.type.toUnitType() : null;

              // if active unit type is building or doodad
              if (type && (type.isBuilding || type.isTile)) {
                var field2 = field.add3(-type.sizeX / 2 + 0.5, -type.sizeY / 2 + 0.5);

                if (!type.couldBePlacedAt(field2)) blocked = true;

                for (var i = 0; i < game.units.length; i++)
                  if (
                    type.distanceToPotentialBuilding(game.units[i].pos, field2) -
                      game.units[i].type.radius <
                    0
                  )
                    blocked = true;

                // if tile
                if (type.isTile) {
                  if (!blocked || !type.blocking) {
                    // if its a non blocking tile, only create on newclick (otherwise we would always draw several tiles when clicking when its a non blocking one)
                    if (
                      type.blocking ||
                      e.data.newClick ||
                      (fieldOfLastTilePlacement &&
                        fieldOfLastTilePlacement.distanceTo2(field) >=
                          (type.sizeX + type.sizeY) / 4)
                    ) {
                      var x_ = type.ignoreGrid ? field.px : field2.x;
                      var y_ = type.ignoreGrid ? field.py : field2.y;

                      new Tile({
                        x: x_,
                        y: y_,
                        type: type,
                        tellRenderer: true,
                      });

                      fieldOfLastTilePlacement = field;
                    }
                  }
                }

                // if building
                else {
                  // if free space available, place building
                  if (!blocked) {
                    var owner = type.alwaysNeutral
                      ? game.players[0]
                      : game.players[e.data.playerIndex];

                    if (!type.limit || game.getUnits(type, owner).length < type.limit) {
                      new Building({
                        x: field2.x,
                        y: field2.y,
                        type: type,
                        owner: game.players[e.data.playerIndex],
                      });
                      self.postMessage("playSnd$" + SOUND.PLACE);
                    }
                  }
                }
              }

              // if a unit type is selected
              if (type && type.isUnit) {
                // check for block
                for (var i = 0; i < game.units.length; i++)
                  if (
                    game.units[i].pos.distanceTo2(field) <
                    type.radius + game.units[i].type.radius
                  )
                    blocked = true;

                if (!type.couldStandAt(field)) blocked = true;

                // if free space, create
                if (!blocked) {
                  new Unit({
                    x: field.px,
                    y: field.py,
                    type: type,
                    owner: game.players[e.data.playerIndex],
                  });
                  self.postMessage("playSnd$" + SOUND.PLACE);
                }

                // play error msg only when on mousesown
                else if (e.data.newClick) self.postMessage("playSnd$" + SOUND.NEGATIVE);
              }

              if (e.data.heightMod != 0 && !type && e.data.newClick) {
                // add ramp
                if (e.data.heightMod == 0.5) {
                  var nbs = [];
                  for (var i = 0; i < nbCoords2.length; i++)
                    nbs.push(game.getHMValue2(field.x + nbCoords2[i].x, field.y + nbCoords2[i].y));

                  for (var i = 0; i < rampMaps.length; i++) {
                    var arr = rampMaps[i].h;
                    var match = true;
                    var diff = nbs[0] - arr[0];

                    for (var k = 1; k < nbs.length; k++) if (nbs[k] - arr[k] != diff) match = false;

                    if (match) {
                      var ramps = game.theme && game.theme.ramps ? game.theme.ramps : ramps;
                      var ramp = ramps[rampMaps[i].rampId];
                      var clippingPoint = {
                        x: rampMaps[i].clippingPoint.x + field.x,
                        y: rampMaps[i].clippingPoint.y + field.y,
                      };
                      var cPHeight = game.getHMValue2(clippingPoint.x, clippingPoint.y);

                      // check, if all fields are ok
                      var positionIsValid = true;
                      for (var k = 0; k < ramp.map.length; k++) {
                        var x = clippingPoint.x + ramp.map[k].x;
                        var y = clippingPoint.y + ramp.map[k].y;

                        if (
                          game.fieldIsBlockedForBuilding(x, y) &&
                          game.getHMValue(x, y) != ramp.code &&
                          !ramp.map[k].cliff
                        )
                          positionIsValid = false;
                      }

                      // check if no ramps touching this ramp (only a ramp of the same type touching sideways is allowed)
                      for (var k = 0; k < ramp.noRamps.length; k++) {
                        var h = game.getHMValue(
                          clippingPoint.x + ramp.noRamps[k].x,
                          clippingPoint.y + ramp.noRamps[k].y
                        );
                        if (h != parseInt(h)) positionIsValid = false;
                      }

                      // check if only same ramp codes are touching this ramp sideways
                      for (var k = 0; k < ramp.onlyThisRamp.length; k++) {
                        var h = game.getHMValue(
                          clippingPoint.x + ramp.onlyThisRamp[k].x,
                          clippingPoint.y + ramp.onlyThisRamp[k].y
                        );
                        if (h != parseInt(h) && h != ramp.code) positionIsValid = false;
                      }

                      // check if some height value conditions are met
                      for (var k = 0; k < ramp.sameLevel.length; k++)
                        if (
                          game.getHMValue2(
                            clippingPoint.x + ramp.sameLevel[k].x,
                            clippingPoint.y + ramp.sameLevel[k].y
                          ) != cPHeight
                        )
                          positionIsValid = false;

                      if (positionIsValid) {
                        for (var k = 0; k < ramp.map.length; k++) {
                          game.setHMValue(
                            clippingPoint.x + ramp.map[k].x,
                            clippingPoint.y + ramp.map[k].y,
                            ramp.code
                          );
                          self.postMessage(
                            "setHMValue$" +
                              (clippingPoint.x + ramp.map[k].x) +
                              "$" +
                              (clippingPoint.y + ramp.map[k].y) +
                              "$" +
                              ramp.code
                          );
                        }
                      } else {
                        self.postMessage("playSnd$" + SOUND.NEGATIVE);
                        return;
                      }

                      k = rampMaps.length;
                    }
                  }
                }

                // kill ramp
                else if (e.data.heightMod == -0.5) {
                  self.postMessage("killRamp$" + field.x + "$" + field.y);
                  game.killRamp(field.x, field.y);
                  game.makeCliffs();
                } else {
                  var fields = e.data.heightMod == -1 ? nbCoords2 : [{ x: 0, y: 0 }];

                  for (var i = 0; i < fields.length; i++) {
                    var x_ = field.x + fields[i].x;
                    var y_ = field.y + fields[i].y;

                    var oldVal = game.getHMValue(x_, y_);
                    game.setHMValue(x_, y_, parseInt(oldVal) + e.data.heightMod);
                    self.postMessage(
                      "setHMValue$" + x_ + "$" + y_ + "$" + (parseInt(oldVal) + e.data.heightMod)
                    );

                    if (!game.heightModIsValid(x_, y_)) {
                      game.setHMValue(x_, y_, oldVal);
                      self.postMessage("setHMValue$" + x_ + "$" + y_ + "$" + oldVal);
                    }
                  }
                  this.lastClickedField = field;
                  this.startHeight = game.getHMValue(field.x, field.y);
                }

                game.makeCliffs(field.x - 2, field.y - 2, field.x + 2, field.y + 2);

                self.postMessage(
                  "cliffSBeenPlaced2$" + field.x + "$" + field.y + "$" + e.data.heightMod
                );
              } else if (
                (e.data.heightMod >= 1 || e.data.heightMod <= -1) &&
                !type &&
                !e.data.newClick &&
                this.lastClickedField &&
                (this.lastClickedField.x != field.x || this.lastClickedField.y != field.y)
              ) {
                field = field.add3(0, -e.data.heightMod * CLIFF_HEIGHT);

                var fields = e.data.heightMod == -1 ? nbCoords2 : [{ x: 0, y: 0 }];

                for (var i = 0; i < fields.length; i++) {
                  var x_ = field.x + fields[i].x;
                  var y_ = field.y + fields[i].y;

                  var oldVal = game.getHMValue(x_, y_);
                  game.setHMValue(x_, y_, this.startHeight);
                  self.postMessage("setHMValue$" + x_ + "$" + y_ + "$" + this.startHeight);

                  if (!game.heightModIsValid(x_, y_)) {
                    game.setHMValue(x_, y_, oldVal);
                    self.postMessage("setHMValue$" + x_ + "$" + y_ + "$" + oldVal);
                  }
                }

                this.lastClickedField = field;

                game.makeCliffs(field.x - 2, field.y - 2, field.x + 2, field.y + 2);

                self.postMessage("cliffSBeenPlaced$" + field.x + "$" + field.y);
              }
            } else if (e.data.what == "requestFogMask") {
              PLAYING_PLAYER.team = game.teams[e.data.teamIndex];
              var str = "";

              for (var x = 1; x <= game.x; x++)
                for (var y = 1; y <= game.y; y++)
                  str += x + "$" + y + "$" + PLAYING_PLAYER.team.mask[x][y] + "$";

              self.postMessage("changeFog$" + str);
            } else if (e.data.what == "setTickTime") {
              TICK_TIME = e.data.tickTime;
            } else if (e.data.what == "setPause") {
              game_paused = e.data.val;
            } else if (e.data.what == "changeUnitPos") {
              var unit = game.getUnitById(e.data.id);
              var field = new Field(e.data.x, e.data.y, true);

              if (unit) {
                unit.pos = unit.type.getNextFreePositionFrom(field);
                unit.lastTicksPosition = unit.pos;

                self.postMessage("changeUnitPos$" + field.px + "$" + field.py + "$" + unit.id);
              }
            } else if (e.data.what == "setWP") {
              var unit = game.getUnitById(e.data.id);

              var arr = [];
              for (var k = 0; k < e.data.waypoint.length; k += 2)
                arr.push(new Field(e.data.waypoint[k], e.data.waypoint[k + 1], true));

              if (unit) unit.waypoint = arr;
            } else if (e.data.what == "unitChangeOwner") {
              var unit = game.getUnitById(e.data.unit);

              if (unit) unit.owner = game.players[e.data.owner];
            } else if (e.data.what == "updateGlobalVars") {
              if (game) game.updateGlobalVars(e.data.globalVars);
            } else if (e.data.what == "orders") {
              try {
                var parsedMsg = JSON.parse(e.data.msg);
                incomingOrders[parsedMsg.tick] = parsedMsg.orders;
                if (parsedMsg.playersLeft) playerLefts[parsedMsg.tick] = parsedMsg.playersLeft;
              } catch (e) {
                // console.log("worker error parsing orders msg");
              }
            }
          },
          false
        );

        updateGameLogic();

        function Scope(player) {
          this.player = player;
        }

        Scope.prototype.getTypeFieldValue = function (typeName, fieldName) {
          var type = lists.types[typeName];
          return type ? type[fieldName] : null;
        };

        Scope.prototype.getGroundDistance = function (fromX, fromY, toX, toY) {
          var from = new Field(fromX, fromY, true);
          var to = new Field(toX, toY, true);
          console.log(game.astar.getPath(from, to, lists.types.soldier));
          return getLenOfPath(from, game.astar.getPath(from, to, lists.types.soldier));
        };

        Scope.prototype.getCurrentGameTimeInSec = function () {
          return ticksCounter / 20;
        };

        Scope.prototype.getMyPlayerNumber = function () {
          return this.player.number;
        };

        Scope.prototype.getMyTeamNumber = function () {
          return this.player.team.number;
        };

        Scope.prototype.getTeamNumber = function (playerNr) {
          var player = game.getPlayerWithIndex(playerNr);
          return player ? player.team.number : -1;
        };

        Scope.prototype.positionIsPathable = function (x, y) {
          return !game.fieldIsBlocked(parseInt(x), parseInt(y));
        };

        Scope.prototype.getMapWidth = function () {
          return game.x;
        };

        Scope.prototype.getMapHeight = function () {
          return game.y;
        };

        Scope.prototype.getCurrentSupply = function () {
          return this.player.supply;
        };

        Scope.prototype.getMaxSupply = function () {
          return this.player.maxSupply;
        };

        Scope.prototype.getUpgradeLevel = function (upgName) {
          for (var i = 0; i < game.upgrades.length; i++)
            if (game.upgrades[i].name == upgName)
              return this.player.getUpgradeLevel(game.upgrades[i]);

          return null;
        };

        Scope.prototype.getArrayOfPlayerNumbers = function () {
          var arr = [];

          for (var i = 0; i < game.players.length; i++)
            if (
              game.players[i] &&
              game.players[i].controller != CONTROLLER.SPECTATOR &&
              game.players[i].controller != CONTROLLER.NONE
            )
              arr.push(i);

          return arr;
        };

        Scope.prototype.getStartLocationForPlayerNumber = function (nr) {
          for (var i = 0; i < game.startLocations.length; i++)
            if (game.startLocations[i].player == nr)
              return {
                x: game.startLocations[i].x,
                y: game.startLocations[i].y,
              };
        };

        // returns an array of all units, the player can see
        Scope.prototype.getUnits = function (filter) {
          var units = [];

          if (!filter) filter = {};

          for (var i = 0; i < game.units.length; i++)
            if (
              this.player.team.canSeeUnit(game.units[i]) &&
              (!filter.type || filter.type == game.units[i].type.name) &&
              (!filter.notOfType || filter.notOfType != game.units[i].type.name) &&
              (!filter.player || filter.player == game.units[i].owner.number) &&
              (!filter.team || filter.team == game.units[i].owner.team.number) &&
              (!filter.order || filter.order == game.units[i].order.name) &&
              (!filter.enemyOf ||
                !game.players[filter.enemyOf] ||
                (game.players[filter.enemyOf].team.number != game.units[i].owner.team.number &&
                  game.players[filter.enemyOf].team.number != 0))
            )
              units.push(new UnitWrapper(game.units[i]));

          return units;
        };

        Scope.prototype.getBuildings = function (filter) {
          var buildings = [];

          if (!filter) filter = {};

          for (var i = 0; i < game.buildings.length; i++)
            if (
              game.buildings[i].seenBy[this.player.team.number] &&
              (!filter.type || filter.type == game.buildings[i].type.name) &&
              (!filter.notOftype || filter.notOftype != game.buildings[i].type.name) &&
              (!filter.player || filter.player == game.buildings[i].owner.number) &&
              (!filter.team || filter.team == game.buildings[i].owner.team.number) &&
              (!filter.order || filter.order == game.buildings[i].order.name) &&
              (!filter.onlyFinshed || !game.buildings[i].isUnderConstruction) &&
              (!filter.enemyOf ||
                !game.players[filter.enemyOf] ||
                (game.players[filter.enemyOf].team.number != game.buildings[i].owner.team.number &&
                  game.players[filter.enemyOf].team.number != 0))
            )
              buildings.push(new UnitWrapper(game.buildings[i]));

          return buildings;
        };

        Scope.prototype.order = function (order, units, o, shift) {
          // remove all units that not belong to the player or are not active atm
          var units2 = [];
          for (var i = 0; i < units.length; i++)
            if (units[i].unit.isActive && units[i].unit.owner == this.player)
              units2.push(units[i].unit);

          var cmd = this.getCommandFromCommandName(order);

          // if no command, return (later maybe add some sort of error msg here)
          if (!cmd || units2.length == 0) return;

          // parse target
          var target = null;

          if (o && o.unit && o.unit.unit) target = o.unit.unit;
          else if (o && o.x && o.y) target = new Field(o.x, o.y, true);

          if (cmd.targetIsUnit && (!o || !target || !target.type)) return;

          if (cmd.targetIsPoint && (!o || !target || !target.isField)) return;

          // issue the order
          game.issueOrderToUnits2(units2, cmd, target, shift);
        };

        Scope.prototype.getCenterOfUnits = function (units) {
          var i = 0;
          var x = 0;
          var y = 0;

          for (; i < units.length; i++) {
            var u = units[i].unit;
            x += u.pos.px;
            y += u.pos.py;
          }

          return { x: x / i, y: y / i };
        };

        Scope.prototype.getGold = function () {
          return this.player.gold;
        };

        Scope.prototype.chatMsg = function (text) {
          message += "addMsg$" + text.replace(/$/g, "").replace(/~/g, "") + "$#00FFFF~";
        };

        Scope.prototype.playerIsAlive = function (nr) {
          if (!game.players[nr]) return false;

          for (var i = 0; i < game.buildings.length; i++)
            if (game.buildings[i].owner == game.players[nr]) return true;

          return false;
        };

        Scope.prototype.getCommandFromCommandName = function (name) {
          if (game && game.commands)
            for (var i = 0; i < game.commands.length; i++)
              if (game.commands[i].name == name) return game.commands[i];

          return null;
        };

        Scope.prototype.getHeightLevel = function (x, y) {
          return game.getHMValue(Math.floor(x), Math.floor(y));
        };

        Scope.prototype.getRandomNumber = function (min, max) {
          aiRndInc++;
          return (
            ((((ticksCounter + aiRndInc) * 179 +
              (game.units.length > 0 ? game.units[0].pos.px * 173 : 0) +
              game.aiRandomizer) %
              1382) /
              1382) *
              (max - min) +
            min
          );
        };

        Scope.prototype.fieldIsRamp = function (x, y) {
          var hm = this.getHeightLevel(x, y);
          return hm != parseInt(hm);
        };

        // Scope.prototype.getChatLog = function()
        // {
        // 	var gameChatLog = game.chatLog //this doesn't work because somehow the game variable is the one in src\code\logic rather than src\code
        // 	if (gameChatLog) {
        // 		return Object.values(gameChatLog);
        // 	}

        // 	return null;
        // }

        Scope.prototype.leaveGame = function () {
          if (this.player.isAlive) {
            this.player.die();
          }
        };
        function UnitWrapper(unit) {
          this.unit = unit;
        }

        UnitWrapper.prototype.equals = function (otherUnit) {
          return otherUnit && this.unit == otherUnit.unit;
        };

        UnitWrapper.prototype.getValue = function (field) {
          return this.unit[field];
        };

        UnitWrapper.prototype.getFieldValue = function (field) {
          return this.unit.type[field];
        };

        UnitWrapper.prototype.getCurrentHP = function () {
          return this.unit.hp;
        };

        UnitWrapper.prototype.getX = function () {
          return this.unit.pos.px;
        };

        UnitWrapper.prototype.getY = function () {
          return this.unit.pos.py;
        };

        UnitWrapper.prototype.getTypeName = function () {
          return this.unit.type.name;
        };

        UnitWrapper.prototype.getOwnerNumber = function () {
          return this.unit.owner.number;
        };

        UnitWrapper.prototype.getTeamNumber = function () {
          return this.unit.owner.team.number;
        };

        UnitWrapper.prototype.getRemainingBuildTime = function () {
          return this.unit.queue && this.unit.queue[0] ? this.unit.queueFinish - ticksCounter : -1;
        };

        UnitWrapper.prototype.getUnitTypeNameInProductionQueAt = function (nr) {
          return this.unit.queue && this.unit.queue[nr - 1] ? this.unit.queue[nr - 1].name : null;
        };

        UnitWrapper.prototype.isUnderConstruction = function () {
          return this.unit.isUnderConstruction;
        };

        UnitWrapper.prototype.isNeutral = function () {
          return this.unit.owner.team.number == 0;
        };

        UnitWrapper.prototype.getCurrentOrderName = function () {
          if (!this.unit.type.isUnit || !this.unit.order) return null;

          return this.unit.order.name;
        };

        UnitWrapper.prototype.getUnitID = function () {
          return this.unit.id;
        };
      },
      {},
    ],
  },
  {},
  [1]
);
