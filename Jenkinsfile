node {
    def app
    stage('Clone repository') {
        git branch: 'feat/todolist',
        url: 'https://github.com/jhson929/TodoList.git'
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
