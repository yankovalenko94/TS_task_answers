enum TransferStatus {
	Pending = "pending",
	Rejected = "rejected",
	Completed = "completed",
}

enum ErrorMessages {
	NotFound = "Not found: 404",
	NotEnoughSpace = "Not enough space: 507",
	Forbidden = "Forbidden: 403",
}

interface ITransfer {
	path: string;
	data: string[];
	date?: Date;
	start: (p: string, d: string[]) => string;
	stop: (reason: string) => string;
}

interface TransferError {
	message: ErrorMessages;
}

class SingleFileTransfer implements ITransfer, TransferError {
    path: string;
    data: string[];
    date?: Date | undefined;
    message: ErrorMessages;
    transferStatus: TransferStatus;

    constructor(status: TransferStatus) {
        this.transferStatus = status;
    }

    start(p: string, d: string[]) {
        return 'Transfer started'
    }

    // Никто не запрещает создавать стрелочные функции
    // С ними проще работать с this
    checkTransferStatus = (): string => {
        return this.transferStatus;
    }

    stop = (reason: string) => {
        return `Transfer stopped, reason: ${reason}, Date: ${new Date().toLocaleString()}`
    };

    // Метод может показаться странным, но может использоваться для тестов, например
    makeError = (): string => {
        // Ведь при ошибке статус всегда "отклонено", правда?
        return `Status: ${TransferStatus.Rejected}, error message: ${ErrorMessages.Forbidden}`
    }
}

const transfer = new SingleFileTransfer(TransferStatus.Pending);
console.log(transfer.checkTransferStatus());
console.log(transfer.stop('Test'));
console.log(transfer.makeError());