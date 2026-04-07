pipeline {
  agent any

  stages {

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t qa-automation .'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'docker run qa-automation'
      }
    }
  }
}