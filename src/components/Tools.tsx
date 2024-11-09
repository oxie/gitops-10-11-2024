import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Cloud, Database, Shield, Activity, Container, Lock, Workflow, Code, Cog, Terminal, Key, MessageSquare, GitPullRequest, Scale, Box } from 'lucide-react';

export default function Tools() {
  const tools = [
    {
      icon: <GitPullRequest className="h-10 w-10" aria-hidden="true" />,
      name: "Continuous Delivery & GitOps",
      description: "Automated deployment and progressive delivery with GitOps methodology",
      techs: [
        "FluxCD",
        "ArgoCD",
        "Helm",
        "Flagger",
        "Kustomize",
        "Crossplane"
      ]
    },
    {
      icon: <Box className="h-10 w-10" aria-hidden="true" />,
      name: "Docker Registries & Helm Charts",
      description: "Enterprise-grade artifact management and distribution",
      techs: [
        "Nexus",
        "Artifactory",
        "ChartMuseum",
        "Harbor",
        "AWS ECR",
        "Azure ACR"
      ]
    },
    {
      icon: <Scale className="h-10 w-10" aria-hidden="true" />,
      name: "Autoscaling & Resource Management",
      description: "Intelligent workload scaling and resource optimization",
      techs: [
        "AWS Autoscaler",
        "Karpenter",
        "CASK AI",
        "Vertical Pod Autoscaler",
        "Horizontal Pod Autoscaler",
        "Goldilocks"
      ]
    },
    {
      icon: <Cloud className="h-10 w-10" aria-hidden="true" />,
      name: "Cloud Platforms",
      description: "Multi-cloud infrastructure management with enterprise-grade scalability",
      techs: ["AWS", "Azure", "GCP", "Hybrid"]
    },
    {
      icon: <Container className="h-10 w-10" aria-hidden="true" />,
      name: "Container Orchestration",
      description: "Enterprise container management with automated scaling and deployment",
      techs: ["Kubernetes", "Docker", "Helm", "ArgoCD"]
    },
    {
      icon: <Shield className="h-10 w-10" aria-hidden="true" />,
      name: "Security & Compliance",
      description: "Zero-trust security framework with automated compliance monitoring",
      techs: [
        "KubeArmor",
        "Kyverno",
        "Falco",
        "Trivy",
        "CertManager",
        "Authelia"
      ]
    },
    {
      icon: <Key className="h-10 w-10" aria-hidden="true" />,
      name: "Secrets Management",
      description: "Secure secrets management and encryption solutions",
      techs: [
        "External Secrets",
        "Sealed Secrets",
        "SOPS",
        "Vault",
        "AWS Secrets Manager",
        "Azure Key Vault"
      ]
    },
    {
      icon: <Database className="h-10 w-10" aria-hidden="true" />,
      name: "Database Solutions",
      description: "Production-grade database management and operations",
      techs: [
        "Percona PostgreSQL",
        "CloudNative PG",
        "StackGres",
        "TimescaleDB",
        "MongoDB",
        "MariaDB Operator"
      ]
    },
    {
      icon: <Database className="h-10 w-10" aria-hidden="true" />,
      name: "Cache & Storage",
      description: "High-performance caching and data storage solutions",
      techs: [
        "Redis",
        "Valkey",
        "Dragonfly",
        "AWS RDS",
        "ElastiCache",
        "InfluxDB"
      ]
    },
    {
      icon: <Activity className="h-10 w-10" aria-hidden="true" />,
      name: "Observability",
      description: "Full-stack monitoring with real-time alerts and detailed analytics",
      techs: ["Prometheus", "Grafana", "PMM", "Datadog"]
    },
    {
      icon: <MessageSquare className="h-10 w-10" aria-hidden="true" />,
      name: "Streaming & Messaging",
      description: "Enterprise-grade event streaming and data pipeline solutions",
      techs: [
        "AWS MSK",
        "Strimzi Kafka",
        "Debezium",
        "Kafka Connect",
        "Mirror Maker 2",
        "S3 Sink"
      ]
    },
    {
      icon: <Code className="h-10 w-10" aria-hidden="true" />,
      name: "Developer Portal",
      description: "Centralized platform for developer productivity and service management",
      techs: ["Backstage", "TechDocs", "Software Templates", "Service Catalog"]
    }
  ];

  return (
    <section 
      id="technology" 
      className="min-h-screen py-32 relative"
      role="region"
      aria-labelledby="tools-title"
    >
      {/* Background effects */}
      <div 
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      </div>

      <div 
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true" 
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(250, 189, 0, 0.1) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Animated orbs */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="section-title">
            <div className="section-title-wrapper group">
              <div 
                className="section-title-icon"
                aria-hidden="true"
              >
                <Terminal className="h-6 w-6 text-gold-400" />
              </div>
              <h2 
                id="tools-title"
                className="section-title-text"
              >
                Technology Stack
              </h2>
            </div>
          </div>
          <p className="section-description">
            Built on industry-leading open source technologies for reliability, scalability, and security
          </p>
        </motion.div>

        <div 
          className="grid md:grid-cols-3 gap-8 mt-16"
          role="list"
          aria-label="Technology tools"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative z-10"
              role="listitem"
              aria-labelledby={`tool-title-${index}`}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative h-full p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-gold-500/50 transition-all duration-300 flex flex-col">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-gold-500/10 to-gold-600/10 mb-6 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <div className="text-gold-400">{tool.icon}</div>
                </div>

                <h3 
                  id={`tool-title-${index}`}
                  className="text-xl font-bold mb-3"
                >
                  {tool.name}
                </h3>

                <p className="text-slate-300 mb-6 flex-grow">
                  {tool.description}
                </p>

                <div 
                  className="flex flex-wrap gap-2 mt-auto"
                  role="list"
                  aria-label={`Technologies used in ${tool.name}`}
                >
                  {tool.techs.map((tech, idx) => (
                    <span
                      key={idx}
                      role="listitem"
                      className="px-3 py-1 rounded-full text-sm bg-gold-500/10 text-gold-400 border border-gold-500/20 group-hover:border-gold-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}