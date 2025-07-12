import { motion } from 'framer-motion'
import { Github, Linkedin, X, Instagram, Mail } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center font-mono">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl mx-auto px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl md:text-5xl font-light mb-8 tracking-wide"
        >
          Babak Rahimi
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-6 text-base md:text-lg leading-relaxed"
        >
          <p className="text-gray-700">
            Software Engineer & Technology Enthusiast
          </p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
            className="h-px bg-black mx-auto max-w-xs"
          />
          
          <p className="text-gray-600 max-w-lg mx-auto">
            Passionate about creating elegant solutions to complex problems. 
            Building the future one line of code at a time.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex justify-center space-x-6"
        >
          <motion.a
            href="https://github.com/babakrahimi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 border border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            <Github size={20} />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/babakrahimi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 border border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            <Linkedin size={20} />
          </motion.a>
          
          <motion.a
            href="https://twitter.com/babakrahimi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 border border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            <X size={20} />
          </motion.a>
          
          <motion.a
            href="https://instagram.com/babakrahimi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 border border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            <Instagram size={20} />
          </motion.a>
          
          <motion.a
            href="mailto:babak@rahimi.co"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 border border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            <Mail size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App