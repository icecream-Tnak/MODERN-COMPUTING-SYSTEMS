import type { CoursewareItem } from "./courseware-explorer";

export const courseware: CoursewareItem[] = [
  { no: "0", title: "课程简介与内容安排", summary: "现代计算系统结构与算力技术 课程简介", topic: "导论", file: "0 - 课程简介与内容安排.pptx", available: true },
  { no: "1-1", title: "计算系统的历史演进", summary: "核心问题：计算核心如何从通用走向专用，以应对不同的效率瓶颈？", topic: "基础", file: "1-1 - 计算系统的历史演进.pptx", available: true },
  { no: "1-2", title: "冯·诺依曼架构与三大瓶颈", summary: "核心问题：从存储程序到现代计算系统的演进动力", topic: "体系结构", file: "1-2 冯·诺依曼架构与三大瓶颈.pptx", available: true },
  // { no: "03", title: "流水线与乱序执行", summary: "指令级并行与现代处理器性能优化", topic: "体系结构", file: "03-流水线与乱序执行.pptx", available: false },
  // { no: "04", title: "存储系统", summary: "缓存、主存与存储层次结构", topic: "存储", file: "04-存储系统.pptx", available: false },
  // { no: "05", title: "并行计算与加速", summary: "多核处理器、并行模型与加速方法", topic: "并行计算", file: "05-并行计算与加速.pptx", available: false },
  // { no: "06", title: "GPU 架构与编程模型", summary: "GPU 执行模型、存储组织与算力特征", topic: "异构计算", file: "06-GPU架构与编程模型.pptx", available: false },
  // { no: "07", title: "异构计算系统", summary: "CPU、GPU 与专用加速器的协同计算", topic: "异构计算", file: "07-异构计算系统.pptx", available: false },
  // { no: "08", title: "数据中心与算力网络", summary: "集群架构、互连网络与资源调度", topic: "算力基础设施", file: "08-数据中心与算力网络.pptx", available: false },
  // { no: "09", title: "智能算力基础设施", summary: "面向人工智能的算力平台与系统软件", topic: "算力基础设施", file: "09-智能算力基础设施.pptx", available: false },
  // { no: "10", title: "新型计算架构", summary: "存算一体、近数据计算与未来趋势", topic: "前沿", file: "10-新型计算架构.pptx", available: false },
];

export type WeekPlan = {
  week: number;
  title: string;
  focus: string;
  activity: string;
  type: "理论" | "实验" | "研讨" | "复习" | "理论 + 实验" | "理论 + 研讨";
};

export const weekPlans: WeekPlan[] = [
  { week: 1, title: "课程导论；计算系统演进与冯·诺依曼架构", focus: "分析机、ENIAC，“结构-组成-实现”层次，三大瓶颈：功耗墙、存储墙、ILP墙", activity: "作业1：分析一个冯·诺依曼瓶颈实例", type: "理论" },
  { week: 2, title: "多核、并行与异构", focus: "单核瓶颈、多核兴起、弗林分类法、SIMD/MIMD/SIMT概念", activity: "无", type: "理论" },
  { week: 3, title: "处理器微架构（一）", focus: "流水线基础、三类冒险、数据转发、分支预测", activity: "无", type: "理论" },
  { week: 4, title: "处理器微架构（二）", focus: "超标量、乱序执行、寄存器重命名", activity: "无", type: "理论" },
  { week: 5, title: "存储系统与缓存一致性", focus: "存储层次、存储墙、MESI协议概述", activity: "实践1：存储编码实验", type: "理论 + 实验" },
  { week: 6, title: "片上互联与NUMA架构", focus: "Ring/Mesh、AMD Infinity Fabric、NUMA特性", activity: "作业：研讨准备", type: "理论" },
  { week: 7, title: "并行计算理论与模型", focus: "阿姆达尔定律、古斯塔夫森定律、PRAM/BSP/LogP简介", activity: "研讨1：缓存一致性工程案例（MESI在多核CPU中的实现挑战与优化）", type: "理论 + 研讨" },
  { week: 8, title: "GPU与SIMT架构", focus: "SM结构、线程束、分化、CUDA编程模型简介", activity: "实践2：容器化边缘计算模拟", type: "理论 + 实验" },
  { week: 9, title: "分布式系统基础与CAP定理", focus: "核心挑战、CAP内涵与权衡", activity: "作业：研讨准备", type: "理论" },
  { week: 10, title: "分布式共识与云计算", focus: "Paxos/Raft核心思想、IaaS/PaaS/SaaS", activity: "研讨2：云边端协同架构设计（以智慧城市为例，讨论任务卸载策略）", type: "理论 + 研讨" },
  { week: 11, title: "云边端协同与大模型训练基础", focus: "边缘计算概念、数据并行/模型并行/流水线并行", activity: "无", type: "研讨" },
  { week: 12, title: "能效计算与存算一体原理", focus: "", activity: "实践3：硬件性能监测（使用nvidia-smi监测GPU/CPU/内存，分析负载特征）", type: "理论 + 实验" },
  { week: 13, title: "神经形态与量子计算简介", focus: "", activity: "无", type: "理论" },
  { week: 14, title: "异构计算生态观", focus: "CPU+GPU+NPU+…融合", activity: "实践4：量子计算模拟演示（Qiskit教师演示，学生观察叠加态与测量，提交简评报告）", type: "理论 + 实验" },
  { week: 15, title: "综合复习", focus: "重点知识串讲", activity: "课程复习与答疑", type: "复习" },
  { week: 16, title: "综合习题课", focus: "覆盖全学期核心知识点", activity: "课程复习与答疑", type: "复习" },
];

export const labs = [
  { no: "01", title: "实践1：存储编码实验", weeks: "第 5 周", duration: "1 学时", tools: "DNA Storage Designer在线平台", goal: "光电存储与DNA存储对比", deliverable: "实验报告" },
  { no: "02", title: "实践2：容器化边缘计算模拟", weeks: "第 8 周", duration: "1 学时", tools: "Docker / MQTT", goal: "Docker安装与MQTT镜像运行", deliverable: "实验报告" },
  { no: "03", title: "实践3：硬件性能监测", weeks: "第 12 周", duration: "1 学时", tools: "NVIDIA Driver", goal: "使用nvidia-smi监测GPU/CPU/内存，分析负载特征", deliverable: "实验报告" },
  { no: "04", title: "实践4：量子计算模拟演示", weeks: "第 14 周", duration: "1 学时", tools: "Qiskit", goal: "Qiskit教师演示，学生观察叠加态与测量，提交简评报告", deliverable: "实验报告" },
];

export const usefulLinks = [
  { title: "哈尔滨工程大学课程攻略共享计划", source: "学生共享资源", url: "https://heu.us.kg/", tag: "中文资料", description: "汇集多门课程的学习资料与经验，可用于查找相近课程的复习材料和学习路径。内容由社区整理，使用时请注意核对版本。" },
  { title: "UC Berkeley CS61C", source: "加州大学伯克利分校", url: "https://cs61c.org/", tag: "体系结构课程", description: "完整覆盖 C、RISC-V、数据通路、流水线、Cache 与并行计算，课程日历、讲义和实验组织都很有参考价值。" },
  { title: "MIT 6.823 Computer System Architecture", source: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/6-823-computer-system-architecture-fall-2005/", tag: "进阶课程", description: "研究生层次的体系结构公开课，提供讲义、阅读材料、作业和考试，适合进一步学习乱序执行、存储系统与并行架构。" },
  { title: "RISC-V 官方规范", source: "RISC-V International", url: "https://riscv.org/specifications/ratified/", tag: "技术规范", description: "RISC-V 已批准指令集与扩展规范的官方入口，适合在学习 ISA 和完成汇编实验时查询精确定义。" },
  { title: "CUDA C++ Programming Guide", source: "NVIDIA 官方文档", url: "https://docs.nvidia.com/cuda/cuda-c-programming-guide/", tag: "GPU 编程", description: "系统介绍 CUDA 编程模型、线程层次、存储层次、异构编程与性能相关机制，是 GPU 实验的主要参考手册。" },
  { title: "Stanford CS231n", source: "斯坦福大学", url: "https://cs231n.stanford.edu/", tag: "课程组织", description: "深度学习视觉课程的经典门户，课程主页、日程、作业和项目组织清晰；同时可帮助理解现代 GPU 算力的应用背景。" },
  { title: "浙江科技大学", source: "学校官方网站", url: "https://www.zust.edu.cn/", tag: "校内入口", description: "学校新闻、院系设置、本科生教育、图书馆与校园服务的官方入口。" },
  { title: "浙江科技大学图书馆", source: "浙江科技大学", url: "https://lib.zust.edu.cn/", tag: "学术资源", description: "用于检索教材、期刊论文和电子资源，为课程报告、前沿调研与综合实验提供文献支持。" },
];
