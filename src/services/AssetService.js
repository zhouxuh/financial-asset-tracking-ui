import axios from 'axios';

const ASSET_API_BASE_URL = 'http://localhost:8080/api/v1/';

class AssetService {
  saveAsset(asset) {
    return axios.post(ASSET_API_BASE_URL + 'asset', asset);
  }

  getAssets() {
    return axios.get(ASSET_API_BASE_URL + 'assets');
  }

  getAssetById(id) {
    return axios.get(ASSET_API_BASE_URL + 'asset/' + id);
  }

  updateAsset(asset, id) {
    return axios.put(ASSET_API_BASE_URL + 'asset/' + id, asset);
  }

  deleteAsset(id) {
    return axios.delete(ASSET_API_BASE_URL + 'asset/' + id);
  }
}

export default new AssetService();
