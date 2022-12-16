node {
    def app
    stage('Clone repository') {
        git branch: 'main',
        url: 'https://github.com/2022OSS-PROJECT/TodoList.git'
    }
    stage('Build image') {
        app = docker.build("hoo903/todolist")
    }
    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                app.push("${env.BUILD_NUMBER}")
                app.push("latest")
        }
    }
}
