import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'
// 状态管理
const state = {
  singer: {}, // 歌手
  playing: false, // 播放状态
  fullScreen: false, // 播放器展开或缩起
  playlist: [], // 播放列表
  sequenceList: [], // 顺序列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1, // 当前播放歌曲
  disc: {}, // 歌单
  topList: {},
  searchHistory: loadSearch(), // 历史记录
  playHistory: loadPlay(), // 播放历史
  favoriteList: loadFavorite() // 收藏列表
}

export default state