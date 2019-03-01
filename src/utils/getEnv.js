export default function getEnv() {
  let env = 'http://39.108.178.7:8011'
  let redirectUrl = 'http://ip.web.dev.kimed.me:8017'
  let useLocalToken = false
  if (process.env.NODE_ENV == 'development') {
    env = 'http://39.108.178.7:8011'
    useLocalToken = true
  } else if (process.env.NODE_ENV == 'production') {
    env = 'http://39.108.178.7:8011'
    useLocalToken = false
    redirectUrl = 'http://insurmall.kimed.me'
  } else if (process.env.NODE_ENV == 'testing') {
    env = 'http://39.108.178.7:8011'
    useLocalToken = false
  }
  return {
    env,
    useLocalToken,
    redirectUrl
  }
}