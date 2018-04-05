import Service from "../../common/basic/Service";

class PlayerService extends Service {
  getPlayers() {
    const { axios, apiUrls } = this;
    return axios(apiUrls.GET_PLAYERS());
  }

  create(formData) {
    const { axios, apiUrls } = this;
    return axios(apiUrls.CREATE_PLAYER(formData));
  }
}

export const Player = new PlayerService();
