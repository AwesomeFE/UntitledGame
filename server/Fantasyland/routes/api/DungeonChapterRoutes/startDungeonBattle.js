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
    const { player } = req;

    const dungeonChapter = await DungeonChapter.findOne({
      'chapters.dungeons.type': 'dungeon-battle',
      'chapters.dungeons._id': dungeonBattleId
    });

    const currentDungeonBattle = this.getDungeonBattleById(dungeonChapter.toJSON(), dungeonBattleId);
    const battleData = this.generateBattle(currentDungeonBattle);
    const battle = await this.saveUserBattle(player._id, battleData);

    res.json(messages.REQUEST_SUCCESS(battle));
  }

  /**
   * 保存用户的一场战斗
   * @param {*} playerId 
   * @param {*} battleData 
   */
  saveUserBattle(playerId, battleData) {
    return Battle.create({ ...battleData, player: playerId });
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
        const currentEnemy = generateItemFromPool(enemy.pool);
        enemys.push({ enemy: currentEnemy, items: [] });
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

    delete currentDungeonBattle._id;
    return currentDungeonBattle;
  }
}

export const startDungeonBattle = new StartDungeonBattle();