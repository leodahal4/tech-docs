const n=`# Kubernetes (K8s) Documentation

## 1. What is Kubernetes?

Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Originally developed by Google, it is now maintained by the Cloud Native Computing Foundation (CNCF).

### Key Benefits
- **Automated Deployment**: Easily deploy and manage containerized applications
- **Scalability**: Automatically scale applications up or down based on demand
- **Self-healing**: Restart failed containers, replace and reschedule containers when nodes die
- **Load Balancing**: Distribute network traffic to ensure stable deployment
- **Rolling Updates**: Update applications with zero downtime

## 2. Core Concepts

### 2.1 Pods
- The smallest deployable units in Kubernetes
- Can contain one or more containers
- Share network namespace and storage volumes
- Ephemeral by nature - can be created and destroyed dynamically

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: example-pod
spec:
  containers:
  - name: web-app
    image: nginx:latest
\`\`\`

### 2.2 Deployments
- Describe the desired state for Pods and ReplicaSets
- Provide declarative updates for Pods
- Manage rollback and rollout of application versions

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
\`\`\`

### 2.3 Services
- Abstract a logical set of Pods
- Provide network connectivity
- Types:
  - ClusterIP (default): Exposes service on internal cluster network
  - NodePort: Exposes service externally
  - LoadBalancer: Creates external load balancer

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: MyApp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
\`\`\`

## 3. Kubernetes Architecture

### Control Plane Components
- **kube-apiserver**: Exposes Kubernetes API
- **etcd**: Consistent and highly-available key-value store
- **kube-scheduler**: Assigns nodes to newly created pods
- **kube-controller-manager**: Runs controller processes
- **cloud-controller-manager**: Interacts with underlying cloud providers

### Node Components
- **kubelet**: Ensures containers are running in a Pod
- **kube-proxy**: Network proxy, implements part of the Service concept
- **Container Runtime**: Docker, containerd, CRI-O

## 4. Basic Kubectl Commands

\`\`\`bash
# View cluster information
kubectl cluster-info

# List all nodes
kubectl get nodes

# Create a deployment
kubectl create deployment nginx --image=nginx

# Scale a deployment
kubectl scale deployment nginx --replicas=3

# Expose deployment as a service
kubectl expose deployment nginx --port=80 --type=LoadBalancer

# View running pods
kubectl get pods

# Delete a deployment
kubectl delete deployment nginx
\`\`\`

## 5. Configuration Management

### ConfigMaps
- Store non-sensitive configuration data
- Can be used as environment variables, command-line arguments, or config files

\`\`\`yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DATABASE_URL: postgresql://localhost/mydatabase
  DEBUG: "true"
\`\`\`

### Secrets
- Store sensitive information like passwords, OAuth tokens
- Base64 encoded

\`\`\`yaml
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
type: Opaque
data:
  USERNAME: base64encodedusername
  PASSWORD: base64encodedpassword
\`\`\`

## 6. Recommended Learning Path
1. Understand Docker basics
2. Learn Kubernetes core concepts
3. Practice with Minikube or Kind (local Kubernetes clusters)
4. Explore advanced topics like StatefulSets, DaemonSets
5. Learn about monitoring and logging
6. Explore Helm for package management

## 7. Best Practices
- Use declarative configuration (YAML)
- Implement resource limits
- Use labels and selectors effectively
- Regularly update Kubernetes and container images
- Implement proper logging and monitoring
- Use namespaces for resource isolation

## 8. Useful Tools
- **Minikube**: Local Kubernetes cluster for development
- **kubectl**: Official Kubernetes CLI
- **Helm**: Package manager for Kubernetes
- **k9s**: Terminal UI for Kubernetes
- **Lens**: Kubernetes IDE

---

**Note**: This documentation is a living document. Kubernetes evolves rapidly, so always refer to the latest official documentation.
`;export{n as default};
