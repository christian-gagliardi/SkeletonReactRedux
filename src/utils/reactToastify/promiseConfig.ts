const pendingConfigObj = {
    render() {
        return 'Loading'
    },
    icon: true,
}
const successConfigObj = {
    render() {
        return 'Success'
    },
    icon: '🟢',
}
const errorConfigObj = {
    render() {
        return 'Error'
    },
    icon: '🔴',
}

export { pendingConfigObj, successConfigObj, errorConfigObj }
