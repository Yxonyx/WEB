import { Container } from '../Container';
import { Section } from '../Section';
import { BracketFrame } from '../ui/BracketFrame';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
};

const projects = [
    { id: 1, name: "Projekt 01", image: "/images/project-1.gif" },
    { id: 2, name: "Projekt 02", image: "/images/portfolio-2.webp" },
    { id: 3, name: "Projekt 03", image: "/images/portfolio-3.webp" }
];

export const Portfolio = () => {
    return (
        <Section id="referenciak">
            <Container>
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Referenciák</h2>
                    <p className="text-muted text-lg">Modern weboldalak, amik eredményt hoznak.</p>
                </motion.div>

                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {projects.map((project) => (
                        <motion.div key={project.id} variants={itemVariants}>
                            <BracketFrame className="group cursor-pointer hover:border-neonBlue/30 transition-colors">
                                <div className="aspect-video bg-gradient-to-br from-surface2 to-surface rounded-lg mb-6 relative overflow-hidden group-hover:shadow-lg group-hover:shadow-neonBlue/20 transition-all">
                                    {project.image ? (
                                        <>
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-muted2 font-mono text-sm group-hover:bg-black/50 transition-colors">
                                            project_thumbnail_{project.id}.jpg
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-bold text-white">{project.name}</h3>
                                    <span className="text-xs font-mono text-neonBlue border border-neonBlue/20 px-2 py-1 rounded">CL</span>
                                </div>
                                <div className="h-1 w-12 bg-white/10 group-hover:w-full group-hover:bg-neonBlue/50 transition-all duration-500" />
                            </BracketFrame>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
};
