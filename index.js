const { Extension, type, api } = require('clipcc-extension');

class MyExtension extends Extension {
    onInit() {
        api.addCategory({
            categoryId: 'top.sparrowhe.pauli.category',
            messageId: 'top.sparrowhe.pauli.category',
            color: '#66CCFF'
        });
        api.addBlock({
            opcode: 'top.sparrowhe.pauli.setFps',
            type: type.BlockType.COMMAND,
            messageId: 'top.sparrowhe.pauli.setFps',
            categoryId: 'top.sparrowhe.pauli.category',
            param: {
                FPS: {
                    type: type.ParameterType.NUMBER,
                    default: 60
                }
            },
            function: (args) => {
                const fps = args.FPS;
                const VM = api.getVmInstance();
                VM.runtime.setFramerate(fps);
            }
        });

        api.addBlock({
            opcode: 'top.sparrowhe.pauli.getFps',
            type: type.BlockType.REPORTER,
            messageId: 'top.sparrowhe.pauli.getFps',
            categoryId: 'top.sparrowhe.pauli.category',
            function: (args) => {
                const VM = api.getVmInstance();
                return VM.runtime.frameRate;
            }
        });
    }
}

module.exports = MyExtension;
