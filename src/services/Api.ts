import Axios from '@lib/Axios'

class AxiosService {
  get(URI: string) {
    return Axios.get(URI)
  }

  post(URI: string, body: any, config: any) {
    return Axios.post(URI, body, config)
  }
}

export default new AxiosService()
