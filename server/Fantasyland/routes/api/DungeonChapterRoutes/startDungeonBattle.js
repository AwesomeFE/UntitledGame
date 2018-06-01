import { DungeonChapter, Battle } from '../../../models';
import { messages } from '../../../../common/constants';
import { generateItemFromPool } from '../../../../common/utils/dataFormat';

class StartDungeonBattle {
  required = {
    params: [ 'dungeonBattleId' ]
  };

  constructor() {
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  validate(req, res) {}

  async handler(req, res) {
    const { dungeonBattleId } = req.params;

    const dungeonChapter = await DungeonChapter.findOne({
      'chapters.dungeons.type': 'dungeon-battle',
      'chapters.dungeons._id': dungeonBattleId
    });

    const currentDungeonBattle = this.getDungeonBattleById(dungeonChapter, dungeonBattleId);
    const battleData = this.generateBattle(currentDungeonBattle.toJSON());
    const battle = await Battle.create(battleData);

    res.json(messages.REQUEST_SUCCESS(battleData));
  }

  /**
   * 通过副本战斗数据产生一次用户战斗
   * @param {*} dungeonBattle 
   */
  generateBattle(dungeonBattle) {
    const battles = [];

    // 遍历每一场战斗数据
    for(const battle of dungeonBattle.battles) {
      const enemys = [];
      // 遍历每一个敌人池
      for(const enemy of battle.enemys) {
        enemys.push(generateItemFromPool(enemy.pool));
      }
      battles.push({ ...battle, enemys });
    }

    // 合成用户战斗
    return { ...dungeonBattle, battles };
  }

  /**
   * 通过id获取副本信息中的副本战斗数据
   * @param {*} dungeonChapter 
   * @param {*} _id 
   */
  getDungeonBattleById(dungeonChapter, _id) {
    let currentDungeonBattle = null;

    for(const chapter of dungeonChapter.chapters) {
      for(const dungeon of chapter.dungeons || []) {
        if(dungeon.type === 'dungeon-battle' && dungeon._id.toString() === _id) {
          currentDungeonBattle = dungeon;
        }
      }
    }

    return currentDungeonBattle;
  }
}

export const startDungeonBattle = new StartDungeonBattle();